import { createContext, useEffect, useReducer, useContext } from "react";

import reducer from "./reducer";
import { fetchData, login } from "./utils/fetchdata";

// movie api base url

// initializing state
const initialState = {
	baseUrl: "http://movieto-api.vercel.app/",
	isUserLogin: false,
	currentPage: 1,
	movies: [],
	isLoading: true,
	randomMovie: {},
	user: {},
	userToken: "",
	watchlist: [],
};

// creating app context
const AppContext = createContext();

// creating app provider
const AppProvider = ({ children }) => {
	// using useReducer hook
	const [state, dispatch] = useReducer(reducer, initialState);

	const getPageMovies = async () => {
		dispatch({ type: "LOADING" });

		const result = await fetchData(
			`${state.baseUrl}movie/all?page=${state.currentPage}`
		);

		if (result.success) {
			dispatch({
				type: "DISPLAY_MOVIES",
				payload: {
					movies: result.data,
				},
			});
		}
	};

	const changePage = (pageNo) => {
		dispatch({ type: "CHANGE_PAGE", payload: { pageNo } });
	};

	const incrementPage = () => {
		dispatch({
			type: "INCREMENT_PAGE",
			payload: { pageNo: state.currentPage + 1 },
		});
	};

	const decrementPage = () => {
		dispatch({
			type: "DECREMENT_PAGE",
			payload: { pageNo: state.currentPage - 1 },
		});
	};

	const getRandomMovie = async () => {
		const result = await fetchData(`${state.baseUrl}movie`);

		if (result.success) {
			dispatch({
				type: "DISPLAY_RANDOM_MOVIE",
				payload: { randomMovie: result.data },
			});
		}
	};

	const onSignup = (data) => {
		dispatch({ type: "STORE_USER", payload: { data } });
	};

	const setToken = (token) => {
		dispatch({ type: "SET_TOKEN", payload: { token } });
	};

	const setLogin = (value) => {
		dispatch({ type: "SET_LOGIN", payload: { isUserLogin: value } });
	};

	const loginUser = async (dataObj) => {
		const loginResult = await login(`${state.baseUrl}user/login`, dataObj);

		loginResult.success && setToken(loginResult.token);
		return loginResult;
	};

	const addMovieToWatchList = (movie) => {
		dispatch({ type: "ADD_TO_WATCHLIST", payload: { movie } });
	};

	useEffect(() => {
		getRandomMovie();
	}, []);

	useEffect(() => {
		getPageMovies();
	}, [state.currentPage]);

	return (
		<AppContext.Provider
			value={{
				...state,
				changePage,
				incrementPage,
				decrementPage,
				onSignup,
				loginUser,
				setToken,
				setLogin,
				addMovieToWatchList,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// for using app context without importing useContext and then putting appContext in it. I am making a custom hook to combine both so that we only have to import this custom hook

const useGlobalContext = () => useContext(AppContext);

//exporting app provider and custom hook Global Context
export { AppProvider, useGlobalContext };

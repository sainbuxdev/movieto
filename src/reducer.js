const reducer = (state, action) => {
	if (action.type === "LOADING") {
		return { ...state, isLoading: true };
	}

	if (action.type === "DISPLAY_MOVIES") {
		return { ...state, movies: action.payload.movies, isLoading: false };
	}

	if (action.type === "CHANGE_PAGE") {
		return { ...state, currentPage: action.payload.pageNo };
	}

	if (action.type === "DISPLAY_RANDOM_MOVIE") {
		return { ...state, randomMovie: action.payload.randomMovie };
	}

	if (action.type === "INCREMENT_PAGE") {
		return { ...state, currentPage: action.payload.pageNo };
	}

	if (action.type === "DECREMENT_PAGE") {
		return { ...state, currentPage: action.payload.pageNo };
	}

	if (action.type === "STORE_USER") {
		return { ...state, user: action.payload.data };
	}

	if (action.type === "SET_TOKEN") {
		return { ...state, userToken: action.payload.token };
	}

	if (action.type === "SET_LOGIN") {
		return { ...state, isUserLogin: action.payload.isUserLogin };
	}

	if (action.type === "ADD_TO_WATCHLIST") {
		console.log(action.payload.movie);
		return {
			...state,
			watchlist: [...state.watchlist, action.payload.movie],
		};
	}

	return state;
};

export default reducer;

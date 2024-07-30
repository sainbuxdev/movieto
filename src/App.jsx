import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { SharedLayout } from "./containers";
import { Login, Signup, Account, WatchList, MovieInfo, Home } from "./pages";
import { useGlobalContext } from "./context";

import "./App.css";

function App() {
	const { isUserLogin } = useGlobalContext();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="signup" element={<Signup />} />
					<Route path="account" element={<Account />} />
					<Route
						path="watchlist"
						element={
							isUserLogin ? (
								<WatchList />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					<Route path="movie/:movieId" element={<MovieInfo />} />
				</Route>
			</Routes>
		</Router>
		// <div className="app">
		// 	<Header />
		// 	{/* <Hero /> */}
		// 	<main>
		// 		<Home />
		// 		{/* <MovieInfo /> */}
		// 		{/* <FixedAlert /> */}
		// 		{/* <FixedOverlayLoader /> */}
		// 		{/* <Movies /> */}
		// 		{/* <Login /> */}
		// 		{/* <Signup /> */}
		// 		{/* <Account /> */}
		// 		{/* <WatchList /> */}
		// 	</main>
		// </div>
	);
}

export default App;

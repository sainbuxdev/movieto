import { Link } from "react-router-dom";
import "./navbar.css";
import { useGlobalContext } from "../../context";

const Navbar = () => {
	const { isUserLogin } = useGlobalContext();

	return (
		<nav className="navbar">
			<ul className="flex align-ic navlist">
				{isUserLogin ? (
					<>
						<li className="nav__item">
							<Link
								to="/watchlist"
								className="btn btn--primary-no-outline"
							>
								WatchList
							</Link>
						</li>

						<li className="nav__item">
							<Link to="/account" className="btn btn--primary">
								Account
							</Link>
						</li>
					</>
				) : (
					<>
						<li className="nav__item">
							<Link
								to="/signup"
								className="btn btn--primary-no-outline"
							>
								Signup
							</Link>
						</li>

						<li className="nav__item">
							<Link to="/login" className="btn btn--primary">
								Login
							</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;

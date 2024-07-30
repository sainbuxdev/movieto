import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./header.css";

const Header = () => {
	return (
		<div className="fixed top-0 left-0 right-0 header-wrapper">
			<header className="max-fw mg-center md-padx-1x pady-20x flex align-ic header">
				<Link to="/" className="logo">
					RMovies
				</Link>
				<Navbar />
			</header>
		</div>
	);
};

export default Header;

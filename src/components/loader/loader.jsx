import "./loader.css";

const Loader = ({ generalClasses }) => {
	return <div className={`${generalClasses} loader`} role="loader"></div>;
};

export default Loader;

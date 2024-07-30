import "./alert.css";

const Alert = ({ generalClasses, text }) => {
	return (
		<div className={`${generalClasses} alert`} role="alert">
			<p className="alert__msg">{text}</p>
		</div>
	);
};

export default Alert;

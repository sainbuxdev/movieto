import "./button-icon.css";

const ButtonIcon = ({ generalClasses, icon, handleClick }) => {
	return (
		<button
			className={`flex align-ic justify-cc ${generalClasses} btn btn--icon-only`}
			onClick={(e) => {
				e.stopPropagation();
				handleClick();
			}}
		>
			{icon}
		</button>
	);
};

export default ButtonIcon;

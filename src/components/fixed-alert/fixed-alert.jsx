import { Alert } from "../";
import "./fixed-alert.css";

const FixedAlert = () => {
	return (
		<Alert
			generalClasses={
				"fixed left-0 right-0 bottom-3 mg-center rounded-pill"
			}
		/>
	);
};

export default FixedAlert;

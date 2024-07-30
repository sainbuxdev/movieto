import { Outlet } from "react-router-dom";
import { Header } from "../";
import { FixedAlert, FixedOverlayLoader } from "../../components";

const SharedLayout = () => {
	return (
		<div className="app">
			<Header />
			{/* <FixedAlert /> */}
			<Outlet />
		</div>
	);
};

export default SharedLayout;

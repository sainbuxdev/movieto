import { Loader } from "..";
import { useGlobalContext } from "../../context";
import "./fixed-overlay-loader.css";

const FixedOverlayLoader = () => {
	const { isLoading } = useGlobalContext();

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 fixed-ovarlay-loader">
			<Loader
				generalClasses={`absolute left-50x bottom-0 abs-gen-self-center ${
					isLoading ? "" : "hidden"
				}`}
			/>
		</div>
	);
};

export default FixedOverlayLoader;

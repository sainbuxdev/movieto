import { useGlobalContext } from "../../context";
import "./pagination.css";

const Pagination = () => {
	const { currentPage, changePage, incrementPage, decrementPage } =
		useGlobalContext();
	const buttonArray = [1, 2, 3, 4, 5, 6, 8, 9];

	return (
		<div className="max-fw mg-center pagination-wrapper">
			<section className="flex mg-center round-6 pagination">
				<button
					className="no-after btn pagination__btn"
					onClick={decrementPage}
				>
					Prev
				</button>
				<div className="flex pagination-btn-group">
					{buttonArray.map((value) => {
						return (
							<button
								key={value}
								className={`btn pagination__btn ${
									currentPage === value ? "active" : ""
								}`}
								onClick={(e) => {
									changePage(value);
								}}
							>
								{value}
							</button>
						);
					})}
				</div>
				<button className="btn pagination__btn" onClick={incrementPage}>
					Next
				</button>
			</section>
		</div>
	);
};

export default Pagination;

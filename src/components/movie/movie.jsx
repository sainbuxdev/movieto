import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { ButtonIcon } from "../";
import "./movie.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

const Movie = (props) => {
	const { addMovieToWatchList } = useGlobalContext();

	const navigate = useNavigate();

	const {
		movie: { id, name, img_url },
		type,
	} = props;

	const handleMovieClick = (id) => {
		navigate(`/movie/${id}`);
	};

	return (
		<article className="movie" onClick={() => handleMovieClick(id)}>
			<ButtonIcon
				generalClasses={`movie__btn--${
					type === "add" ? "add" : "delete"
				} btn--icon-only-sm`}
				icon={
					type === "add" ? (
						<IoMdAdd className="icon-sm" />
					) : (
						<MdDelete className="icon-sm" />
					)
				}
				handleClick={addMovieToWatchList?.bind(null, props.movie)}
			/>

			<img src={img_url} className="round-6 movie__img" alt={name} />
			<div className="movie-content">
				<h2 className="movie__name">{name}</h2>
			</div>
		</article>
	);
};

export default Movie;

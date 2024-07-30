import { Link, useParams } from "react-router-dom";
import "./movie-info.css";
import { getItem } from "../../utils/search";
import gradientImg from "../../assets/gradient.jpg";
import { useGlobalContext } from "../../context";

const MovieInfo = () => {
	const { movies } = useGlobalContext();
	const { movieId } = useParams();
	const movie = getItem(movies, parseInt(movieId, 10));

	if (!movie) {
		return (
			<main>
				<section className="max-fw mg-center md-padx-1x pady-app-top">
					<h2>No such movie found</h2>
				</section>
			</main>
		);
	}

	const { name, img_url, url, launch_date, rating } = movie;

	return (
		<main>
			<section className="max-fw mg-center md-padx-1x pady-app-top movie-info">
				<h2 className="movie-info__name">{name}</h2>
				<p className="movie-info__launch-date">{launch_date}</p>

				<div className="grid justify-btw  movie-info-detail-card">
					<p className="movie-info__desc">
						Justice League is a 2017 American superhero film based
						on the DC Comics superhero team of the same name.
						Produced by Warner Bros. Pictures, DC Films, RatPac-Dune
						Entertainment, Atlas Entertainment, and Cruel and
						Unusual Films and distributed by Warner Bros. Pictures,
						it is the fifth installment in the DC Extended Universe
						(DCEU). Directed by Zack Snyder and written by Chris
						Terrio and Joss Whedon, the film features an ensemble
						cast including Ben Affleck, Henry Cavill, Amy Adams, Gal
						Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Jeremy
						Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In
						the film, following the events of Batman v Superman:
						Dawn of Justice (2016) Batman and Wonder Woman recruit
						The Flash, Aquaman, and Cyborg after the death of
						Superman to save the world from the catastrophic threat
						of Steppenwolf and his army of Parademons.
					</p>

					<img
						src={img_url || gradientImg}
						alt=""
						className="round-6 movie-info__img"
					/>
				</div>

				<p className="movie-info__rating">Movie Rating: {rating}</p>
				<a href="#" className="movie-info__link">
					{url}
				</a>

				<Link to="/" className="btn btn--primary">
					Back
				</Link>
			</section>
		</main>
	);
};

export default MovieInfo;

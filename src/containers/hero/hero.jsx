import gradientImg from "../../assets/gradient.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import "./hero.css";
import { useEffect } from "react";

const Hero = () => {
	const { randomMovie } = useGlobalContext();

	const { name, img_url } = randomMovie;

	return (
		<section className="hero-wrapper">
			<div className="max-fw mg-center md-padx-1x grid align-ic hero">
				<div className="pady-01x hero-content">
					<p className="hero__call-out">Help us find you the</p>
					<h1 className="hero__title">Perfect Movie</h1>
					<p className="hero__desc">
						Hustle through tons of movies of every category, giving
						you a lot of movies to choose from, or if you are
						confused watch one of our choosen here.
					</p>

					<a
						href="#movies-list"
						className="btn btn--primary hero__find--btn"
					>
						Find Movie
					</a>
				</div>
				<div className="pady-01x hero-movie">
					<p className="hero-movie__call-out">You may like</p>
					<h2 className="hero-movie__name">{name || "Loading..."}</h2>
					<img
						src={img_url || gradientImg}
						alt=""
						className="mg-center round-6 hero-movie__img"
					/>

					<Link
						to="/watchlist"
						className="btn btn--primary hero-movie__watchlist--btn"
					>
						Add to Watchlist
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;

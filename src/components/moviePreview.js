import { useState } from "react";
import MovieCard from "./movieCard";

export default function MoviePreview({ movie }) {
	const [showCard, setShowCard] = useState(false);

	return (
		<div
			className="preview"
			key={movie.id}
			onClick={() => {
				setShowCard(!showCard);
			}}
		>
			<img
				className="preview-img"
				alt={movie.title + "poster"}
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				height="150"
			/>
			<div className="preview-content">
				<h3 className="preview-title">{movie.title}</h3>
				<p className="preview-rating">{movie.vote_average}</p>
			</div>
			{showCard ? (
				<MovieCard movie={movie} setShowCard={setShowCard} />
			) : null}
		</div>
	);
}

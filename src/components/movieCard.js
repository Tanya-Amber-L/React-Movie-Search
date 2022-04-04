export default function MovieCard({ movie }) {
	return (
		<div className="card" key={movie.id}>
			{console.log(movie)}
			<img
				className="card-image"
				alt={movie.title + "poster"}
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				height="150"
			/>
			<div className="card-content">
				<h3 className="card-title">{movie.title}</h3>
				<p className="card-release">
					Release date: {movie.release_date}.
				</p>
				<p className="card-rating">
					Rated {movie.vote_average} with {movie.vote_count} votes.
				</p>
				<p className="card-description">{movie.overview}</p>
			</div>
		</div>
	);
}

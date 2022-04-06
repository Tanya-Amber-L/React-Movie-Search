export default function MovieCard({ movie, setShowCard }) {
	return (
		<div
			className="card-container"
			onClick={() => {
				setShowCard(false);
			}}
		>
			<div className="card" key={movie.id}>
				<div
					className="card-close-btn"
					onClick={() => {
						setShowCard(false);
					}}
				>
					<img alt="close card button" src="../close.png" />
				</div>
				<img
					className="card-img"
					alt={movie.title + "poster"}
					src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				/>
				<div className="card-content">
					<h3 className="card-title">{movie.title}</h3>
					<p className="card-rating">
						<span>
							{movie.vote_average} {"\u2605"}
						</span>{" "}
						({movie.vote_count} vote.s)
					</p>
					<p className="card-release">
						Released : {movie.release_date}.
					</p>
					<p className="card-description">{movie.overview}</p>
				</div>
			</div>
		</div>
	);
}

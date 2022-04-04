import "../src/index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./components/searchMovies";
import MovieCard from "./components/movieCard";
import PopularMovies from "./components/popularMovies";

function App() {
	const [movies, setMovies] = useState([]);
	return (
		<div className="container">
			<h1 className="title">React Movie Search</h1>
			<SearchMovies setMovies={setMovies} />
			<PopularMovies setMovies={setMovies} />
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<MovieCard movie={movie} />
					))}
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

import "../src/index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./components/searchMovies";
import MoviePreview from "./components/moviePreview";
// require("dotenv").config();

function App() {
	const [movies, setMovies] = useState([]);
	return (
		<main>
			<h1 className="title">Movie Search</h1>
			<SearchMovies setMovies={setMovies} />
			<div className="card-list">
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<MoviePreview movie={movie} />
					))}
			</div>
		</main>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

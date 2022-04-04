import React, { useState } from "react";

export default function SearchMovies({ setMovies }) {
	const [query, setQuery] = useState("");

	const searchMovies = async (e) => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=11097d4989e6947066c1928625606ba8&language=en-US&query=${query}&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<form className="form" onSubmit={searchMovies}>
			<label className="label" htmlFor="query">
				Movie Name
			</label>
			<input
				className="input"
				type="text"
				name="query"
				placeholder="Seach a movie"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className="button" type="submit">
				Search
			</button>
		</form>
	);
}

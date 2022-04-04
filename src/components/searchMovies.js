import React, { useState, useEffect } from "react";
import fetchMovies, { fetchPopular } from "./fetch";

export default function SearchMovies({ setMovies }) {
	const [query, setQuery] = useState("");

	useEffect(() => {
		fetchPopular(setMovies);
	}, [query, setMovies]);

	const searchMovies = async (e) => {
		e.preventDefault();
		fetchMovies(query, setMovies);
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

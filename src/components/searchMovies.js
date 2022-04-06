import React, { useState, useEffect } from "react";
// import ErrorMessage from "./errorMessage";
import fetchMovies, { fetchPopular } from "./fetch";

export default function SearchMovies({ setMovies }) {
	const [query, setQuery] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchPopular(setMovies);
	}, [query, setMovies]);
	const searchMovies = async (e) => {
		e.preventDefault();
		if (query === "") {
			setError(true);
			return;
		}
		setError(false);
		console.log(error);
		fetchMovies(query, setMovies);
	};

	return (
		<form className="form" onSubmit={searchMovies}>
			<input
				className="input"
				type="text"
				name="query"
				placeholder="Seach a movie"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className="submit" type="submit">
				Search
			</button>
			<br />
			{error ? (
				<span className="error">
					The field is empty. You need to type something before
					submit.
				</span>
			) : (
				<span></span>
			)}
		</form>
	);
}

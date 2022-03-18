import React from "react";

export default function SearchMovies() {
	return (
		<form className="form" action="">
			<label className="label" htmlFor="query">
				Movie Name
			</label>
			<input
				className="input"
				type="text"
				name="query"
				placeholder="Seach a movie"
			/>
			<button className="button" type="submit">
				Search
			</button>
		</form>
	);
}

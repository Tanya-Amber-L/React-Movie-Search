export default async function fetchMovies(query, setMovies) {
	if (query === "") {
		alert("You need to write something before submitting");
		return;
	}

	let url = `https://api.themoviedb.org/3/search/movie?api_key=11097d4989e6947066c1928625606ba8&language=en-US&query=${query}&include_adult=false`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		setMovies(data.results);
	} catch (err) {
		console.error(err);
	}
}

export async function fetchPopular(setMovies) {
	let url = `https://api.themoviedb.org/3/movie/popular?api_key=11097d4989e6947066c1928625606ba8&language=en-US&page=1`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		setMovies(data.results);
	} catch (err) {
		console.error(err);
	}
}

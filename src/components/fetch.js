const apiKey = process.env.REACT_APP_API_KEY;
export default async function fetchMovies(query, setMovies) {
	let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&include_adult=false`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		setMovies(data.results);
	} catch (err) {
		console.error(err);
	}
}

export async function fetchPopular(setMovies) {
	let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
	try {
		const res = await fetch(url);
		const data = await res.json();
		setMovies(data.results);
	} catch (err) {
		console.error(err);
	}
}

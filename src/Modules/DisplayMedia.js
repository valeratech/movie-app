import API from "./API";
import fetchAPIData from "./API";

 async function displayPopularMovies() {
    const {results} = await fetchAPIData('movie/popular');
    console.log(results);
}

async function displayPopularTV() {
    const {results} = await fetchAPIData('tv/popular');
    console.log(results);
}

export {displayPopularMovies, displayPopularTV};
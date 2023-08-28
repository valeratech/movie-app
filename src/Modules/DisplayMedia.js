import fetchAPIData from "./API";
import createCardContainer from "./CreateCard";

 async function displayPopularMovies() {
    const {results} = await fetchAPIData('movie/popular');
    console.log(results);
    document.getElementById('popular-movies')
        .append(createCardContainer());
}

async function displayPopularTV() {
    const {results} = await fetchAPIData('tv/popular');
    console.log(results);
}

export {displayPopularMovies, displayPopularTV};
import fetchAPIData from "./API";
import createCardContainer from "./CreateCard";
import toggleSpinner from "./ToggleSpinner";

// Requests movie data using the API.js module and passes either the TV or Movie argument
 async function displayPopularMovies() {
    const moviesContainer = document.getElementById('popular-movies');
    const {results} = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        moviesContainer.append(createCardContainer(movie));
    })
}

async function displayPopularTV() {
    const {results} = await fetchAPIData('tv/popular');
    console.log(results);
}

export {displayPopularMovies, displayPopularTV};
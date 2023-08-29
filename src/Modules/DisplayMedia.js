import fetchAPIData from "./API";
import createCardContainer from "./CreateCard";
import toggleSpinner from "./ToggleSpinner";

// Requests movie data using the API.js module and passes either the tv or movie argument
 async function displayPopularMovies() {
    const moviesContainer = document.getElementById('popular-movies');

    const {results} = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        moviesContainer.append(createCardContainer(movie, 'movie'));
    })
}

async function displayPopularTV() {
    const moviesContainer = document.getElementById('popular-shows');

    const {results} = await fetchAPIData('tv/popular');
    results.forEach(show => {
        moviesContainer.append(createCardContainer(show, 'show'));
    })
}

export {displayPopularMovies, displayPopularTV};
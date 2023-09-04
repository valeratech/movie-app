import fetchAPIData from "./API";
import createMediaTileContainer from "./CreateMediaTile";
import createMediaPage from "./CreateMediaPage";

// Requests movie data using the API.js module and passes either the tv or movie argument
 async function displayPopularMovies() {
    const moviesContainer = document.getElementById('popular-movies');

    const {results} = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        moviesContainer.append(createMediaTileContainer(movie, 'movie'));
    })
}

async function displayPopularTV() {
    const moviesContainer = document.getElementById('popular-shows');

    const {results} = await fetchAPIData('tv/popular');
    results.forEach(show => {
        moviesContainer.append(createMediaTileContainer(show, 'show'));
    })
}

async function displayMovieDetails() {
    const id = window.location.search.split('=')[1];
    const movieDetails = await fetchAPIData(`movie/${id}`);
    createMediaPage(movieDetails, 'movie');
}

async function displayTvDetails() {
    const id = window.location.search.split('=')[1];
    const tvDetails = await fetchAPIData(`tv/${id}`);
    console.log(tvDetails);
    createMediaPage(tvDetails, 'tv');
}


export {displayPopularMovies, displayPopularTV, displayMovieDetails, displayTvDetails};
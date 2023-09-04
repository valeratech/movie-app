import fetchAPIData from "./API";
import createMediaTileContainer from "./CreateMediaTile";
import createMediaPage from "./CreateMediaPage";

// Requests movie data using the API.js module and passes either the tv or movie argument
 async function displayPopularMedia(type) {
    const moviesContainer = document.getElementById(
        type === 'movie' ? 'popular-movies' : 'popular-shows'
    );

    const {results} = await fetchAPIData(`${type}/popular`);
    results.forEach(media => {
        moviesContainer.append(createMediaTileContainer(media, type === 'movie' ? type : 'show'));
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


export {displayPopularMedia, displayPopularTV, displayMovieDetails, displayTvDetails};
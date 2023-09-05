import fetchAPIData from "./FetchAPI";
import createMediaTileContainer from "./CreateMediaTile";
import createMediaPage from "./CreateMediaPage";

// Requests movie data using the FetchAPI.js module and passes either the tv or movie argument
 async function displayPopularMedia(type) {
    // Populate the main movie/tv page with tiles using CreateMediaTile.js module
     const mediaContainer = document.getElementById(
        type === 'movie' ? 'popular-movies' : 'popular-shows'
    );

    const {results} = await fetchAPIData(`${type}/popular`, type);
    // Loop through each movie results and render a tile container
    results.forEach(media => {
        mediaContainer.append(createMediaTileContainer(media, type === 'movie' ? type : 'show'));
    })
}

async function displayMediaPageDetails(type) {
    // Display the specific single media page (tv/movie) by extracting the ID and fetching the data
    const id = window.location.search.split('=')[1];
    const mediaDetails = await fetchAPIData(`${type}/${id}`);
    createMediaPage(mediaDetails, type);
}

export {displayPopularMedia, displayMediaPageDetails};
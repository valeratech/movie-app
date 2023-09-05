import fetchAPIData from "./FetchAPI";
import createMediaTileContainer from "./CreateMediaTile";
import createMediaPage from "./CreateMediaPage";

// Requests movie data using the FetchAPI.js module and passes either the tv or movie argument
 async function displayPopularMedia(type) {
    const mediaContainer = document.getElementById(
        type === 'movie' ? 'popular-movies' : 'popular-shows'
    );

    const {results} = await fetchAPIData(`${type}/popular`, type);
    results.forEach(media => {
        mediaContainer.append(createMediaTileContainer(media, type === 'movie' ? type : 'show'));
    })
}

async function displayMediaDetails(type) {
    const id = window.location.search.split('=')[1];
    const mediaDetails = await fetchAPIData(`${type}/${id}`);
    createMediaPage(mediaDetails, type);
}

export {displayPopularMedia, displayMediaDetails};
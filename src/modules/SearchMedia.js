import searchAPIData from "./SearchAPI";
import createMediaTileContainer from "./CreateMediaTile";
import fetchAPIData from "./FetchAPI";

async function searchMedia(searchState) {
    // Sends a search query using SearchAPI.js after a form a submission from the homepage
    const currentState = searchState;

    // Retrieve the parameters from the results of the search submission
    const searchString = window.location.search;
    const urlParams = new URLSearchParams(searchString);

    currentState.search.type = urlParams.get('type');
    currentState.search.term = urlParams.get('search-term');
    console.log(currentState.search);

    // Check if search input is empty and send an alert otherwise fetch/search data
    if(currentState.search.term !== '') {
        const {results, total_pages, page} = await searchAPIData(currentState.search.type, currentState.search.term);
        const mediaContainer = document.getElementById(
            currentState.search.type === 'movie' ? 'popular-movies'
                : currentState.search.type === 'tv' ? 'popular-shows'
                : 'search-results'
        );

        results.forEach(media => {
            mediaContainer.append(createMediaTileContainer(
                media,
                currentState.search.type === 'movie' ? currentState.search.type : 'show'));
        });
    } else {
        alert('Please enter search term');
    }

    // return currentState.search;
}

export default searchMedia;
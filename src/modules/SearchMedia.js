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

    // Create a function-scope variable 'type' to be used throughout the entire function
    // currentState.search.type gets modified after API call!
    const type = currentState.search.type;

    // Check if search input is empty and send an alert otherwise fetch/search data
    if(currentState.search.term !== '') {
        // Deconstruct the required keys from the search API results which will be used for display and pagination
        const {results, total_pages, page} = await searchAPIData(currentState.search.type, currentState.search.term);
        console.log('THIS', type);

        // Use a ternary condition to render the active html page with required results
        const mediaContainer = document.getElementById(
            currentState.search.type === 'movie' ? 'popular-movies'
                : currentState.search.type === 'tv' ? 'popular-shows'
                : 'search-results'
        );

        results.forEach(media => {
            mediaContainer.append(createMediaTileContainer(
                media,
                type === 'movie' ? type : 'show'));
        });
    } else {
        alert('Please enter search term');
    }
}

export default searchMedia;
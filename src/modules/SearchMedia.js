import searchAPIData from "./SearchAPI";
import createMediaTileContainer from "./CreateMediaTile";
import fetchAPIData from "./FetchAPI";
import updateGlobal from "./UpdateGlobal";
import createSearchResultsHeading from "./CreateSearchResultsHeading";
import createPagination from "./CreatePagination";

async function searchMedia(globalObject) {
    // Sends a search query using SearchAPI.js after a form a submission from the homepage
    const globalState = globalObject;

    // Retrieve the parameters from the results of the search submission
    const searchString = window.location.search;
    const urlParams = new URLSearchParams(searchString);

    globalState.search.type = urlParams.get('type');
    globalState.search.term = urlParams.get('search-term');

    // Check if search input is empty and send an alert otherwise fetch/search data
    if(globalState.search.term !== '' && globalState.search.term !== null) {
        // Deconstruct the required keys from the search API results which will be used for display and pagination
        const {results, total_pages, page, total_results} = await searchAPIData(
            globalState.search.type,
            globalState.search.term,
            globalState.search.page
        );

        globalState.search.totalPages = total_pages;
        globalState.search.page = page;
        globalState.search.totalResults = total_results;
        updateGlobal(globalState);

        // Use a ternary condition to render the active html page with required results
        const mediaContainer = document.getElementById(
            globalState.search.type === 'movie' && globalState.currentPage !== '/search.html'  ? 'popular-movies'
                : globalState.search.type === 'tv' && globalState.currentPage !== '/search.html'? 'popular-shows'
                : 'search-results'
        );

        // Create the tiles by looping through the API data and calling the createMediaTileContainer
        results.forEach(media => {
            mediaContainer.append(createMediaTileContainer(
                media,
                globalState.search.type === 'movie' ? globalState.search.type : 'show'));
        });

        // Create a search results heading using the info stored in globalState
        createSearchResultsHeading(globalState.search.term, results.length, globalState.search.totalResults);
        createPagination(globalState.search);
 
    } else {
        alert('Please enter search term');
    }
}

export default searchMedia;
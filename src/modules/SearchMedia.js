

function searchMedia(searchState) {

    const currentState = searchState;

    // Retrieve the parameters from the results of the search submission
    const searchString = window.location.search;
    const urlParams = new URLSearchParams(searchString);

    currentState.search.type = urlParams.get('type');
    currentState.search.term = urlParams.get('search-term');
    console.log(currentState.search);
    if(currentState.search.term !== '') {
        // make request and display results
    } else {
        alert('Please enter search term');
    }

    return currentState.search;
}

export default searchMedia;
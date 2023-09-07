function removePagination() {
    // Removes and prevents search result containers and buttons from stacking when createPagination is called
    removeSearchResults();
    removePreviousNextButtons();
    removeSearchResultsHeading();
}

function removeSearchResults() {
    // Removes the first 20 search results that were displayed in search.html
    const container = document.getElementById('search-results');
    let child = container.lastElementChild
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    };
}

function removePreviousNextButtons() {
    // Remove and prevent stacking of duplicate prev and next buttons as a result of calling CreatePagination.js
    const container = document.getElementById('pagination');
    let child = container.lastElementChild
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    };
}

function removeSearchResultsHeading() {
    const container = document.getElementById('search-results-heading');
    container.removeChild(container.firstElementChild);
}

export default removePagination;
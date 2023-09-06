function createSearchResultsHeading(searchTerm, resultsLength, resultsTotal) {
    const totalResultsContainer = document.getElementById('search-results-heading');
    const totalResultsHeading = document.createElement('h3');
    const totalResults = document.createTextNode(
        `Results for ${searchTerm}: ${resultsLength} of ${resultsTotal}`
    );
    totalResultsHeading.appendChild(totalResults);
    totalResultsContainer.appendChild(totalResultsHeading);

    return totalResultsContainer;
}

export default createSearchResultsHeading;
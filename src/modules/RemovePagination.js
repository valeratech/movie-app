function removePagination() {
    // Removes and prevents search result containers from stacking when createPagination is called

    removePreviousNextButtons();

}

function removeSearchResults() {
    // Removes the first 20 search results that were displayed in search.html
    const container = document.getElementById('pagination');
    let child = container.lastElementChild
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    };
}

function removePreviousNextButtons() {
    const container = document.getElementById('pagination');
    let child = container.lastElementChild
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    };
}

export default removePagination;
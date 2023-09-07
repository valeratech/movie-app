function createPagination(searchState) {
    const container = document.getElementById('pagination');
    container.append(
        createPreviousButton(searchState),
        createNextButton(searchState),
        pageCounter(searchState)
    );

    return container;
}

function createPreviousButton(searchState) {
    const prev = document.createElement('button');
    prev.className = "btn btn-primary";
    prev.id = "prev";

    const text = document.createTextNode('Prev');
    prev.appendChild(text);

    return prev;
}

function createNextButton(searchState) {
    const next = document.createElement('button');
    next.className = "btn btn-primary";
    next.id = "next";

    const text = document.createTextNode('Next')
    next.appendChild(text);

    return next;
}

function pageCounter(searchState) {
    const div = document.createElement('div');
    div.className = "page-counter"

    const text = document.createTextNode(`Page ${searchState.page} of ${searchState.totalPages}`)
    div.appendChild(text)

    return div;
}

export default createPagination;
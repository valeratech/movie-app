function createPagination(state) {
    const container = document.getElementById('pagination');
    container.append(
        createPreviousButton(state),
        createNextButton(state),
        pageCounter()
    );

    return container;
}

function createPreviousButton(state) {
    const prev = document.createElement('button');
    prev.className = "btn btn-primary";
    prev.id = "prev";

    const text = document.createTextNode('Prev');
    prev.appendChild(text);

    return prev;
}

function createNextButton(state) {
    const next = document.createElement('button');
    next.className = "btn btn-primary";
    next.id = "next";

    const text = document.createTextNode('Next')
    next.appendChild(text);

    return next;
}

function pageCounter() {
    const div = document.createElement('div');
    div.className = "page-counter"

    const text = document.createTextNode('Page 1 of 5')
    div.appendChild(text)

    return div;
}

export default createPagination;
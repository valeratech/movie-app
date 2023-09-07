function createPagination() {
    const container = document.getElementById('pagination');
    container.append(
        createPreviousButton(),
        createNextButton(),
        pageCounter()
    );

    return container;
}

function createPreviousButton() {
    const prev = document.createElement('button');
    prev.className = "btn btn-primary";
    prev.id = "prev";

    return prev;
}

function createNextButton() {
    const next = document.createElement('button');
    next.className = "btn btn-primary";
    next.id = "next";

    return next;
}

function pageCounter() {
    const div = document.createElement('div');
    div.className = "page-counter"

    return div;
}

export default createPagination;
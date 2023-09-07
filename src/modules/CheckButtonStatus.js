function checkButtonStatus(globalState) {
    console.log(globalState.search.totalPages)
    if (globalState.search.totalPages === 1) {
        disablePrev();
        disableNext();
    } else if (globalState.search.page === 1 && global.search.totalPages > 1) {
        disablePrev();
    } else if (globalState.search.page === global.search.totalPages) {
        disableNext();
    }
}

function disablePrev(globalState) {
    const prev = document.getElementById('prev');
    prev.disabled = true;
    console.log('hello')

}

function disableNext(globalState) {
    const next = document.getElementById('next');
    next.disabled  = true;
    console.log('hello')
}

export default checkButtonStatus;
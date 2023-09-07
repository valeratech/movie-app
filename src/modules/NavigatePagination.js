import searchMedia from "./SearchMedia";
import updateGlobal from "./UpdateGlobal";
import removePagination from "./RemovePagination";
import checkButtonStatus from "./CheckButtonStatus";

function navigatePagination(event, globalState) {
    console.log(globalState.search.totalPages);
    if (event === 'next') {
        removePagination();
        updateGlobal(globalState.search.page++);
        searchMedia(globalState);
    } else if (event === 'prev') {
        removePagination();
        updateGlobal(globalState.search.page--);
        searchMedia(globalState);
    }
    console.log(globalState.search.totalPages);
}

export default navigatePagination;
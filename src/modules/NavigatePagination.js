import searchMedia from "./SearchMedia";
import updateGlobal from "./UpdateGlobal";
import removePagination from "./RemovePagination";

function navigatePagination(event, globalState) {
    if (event === 'next') {
        removePagination();
        updateGlobal(globalState.search.page++);
        console.log(globalState)
        searchMedia(globalState);
    } else {

    }
}

export default navigatePagination;
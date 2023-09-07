import searchMedia from "./SearchMedia";
import updateGlobal from "./UpdateGlobal";

function navigatePagination(event, globalState) {
    console.log(event);
    if (event === 'next') {
        updateGlobal(globalState.search.page++);
        console.log(globalState)
        searchMedia(globalState);
    } else {

    }
}

export default navigatePagination;
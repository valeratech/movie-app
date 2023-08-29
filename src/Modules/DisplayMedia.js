import fetchAPIData from "./API";
import createCardContainer from "./CreateCard";
import toggleSpinner from "./ToggleSpinner";

 async function displayPopularMovies() {
    const moviesContainer = document.getElementById('popular-movies');
    toggleSpinner();
    const {results} = await fetchAPIData('movie/popular');
    results.forEach(movie => {
        moviesContainer.append(createCardContainer(movie));
    })
    toggleSpinner();

}

async function displayPopularTV() {
    const {results} = await fetchAPIData('tv/popular');
    console.log(results);
}

export {displayPopularMovies, displayPopularTV};
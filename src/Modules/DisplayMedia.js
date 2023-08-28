import fetchAPIData from "./API";
import {createCardContainer, createImageLink, createCardInformation} from "./CreateCard";

 async function displayPopularMovies() {
    const moviesContainer = document.getElementById('popular-movies');
    const {results} = await fetchAPIData('movie/popular');
    console.log(results);
    results.forEach(movie => {
        moviesContainer.append(createCardContainer(movie));
    })
}

async function displayPopularTV() {
    const {results} = await fetchAPIData('tv/popular');
    console.log(results);
}

export {displayPopularMovies, displayPopularTV};
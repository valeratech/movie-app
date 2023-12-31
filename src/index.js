import './styles/style.css';
import './styles/spinner.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import {displayPopularMedia, displayPopularTV, displayMediaPageDetails, displayTvDetails} from "./modules/DisplayMedia";
import highlightActiveLink from "./modules/HighlightActiveLink";
import displaySlider from "./modules/DisplaySlider";
import searchMedia from "./modules/SearchMedia";
import navigatePagination from "./modules/NavigatePagination";

// Create an object to retrieve the current html page-name for routing
let global = {
    currentPage: window.location.pathname,
    search: {
        term: '',
        type: '',
        page: 1,
        totalPages:1,
        totalResults: 0
    }
}

// Create a Router and initialize through a condition to navigate through html pages
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('movie');
            displayPopularMedia('movie');
            displaySlider('movie');
            break;
        case '/shows.html':
            console.log('tv')
            displayPopularMedia('tv');
            displaySlider('tv');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            displayMediaPageDetails('movie');
            break;
        case '/tv-details.html':
            console.log('TV Details');
            displayMediaPageDetails('tv');
            break;
        case '/search.html':
            console.log('Search');
            searchMedia(global);
            document.getElementById('pagination').addEventListener('click', (e => {
                navigatePagination(e.target.id, global)
            }));
            break;
    }
    // Each time a html page is called render the page with the link that has the "active" classname
    highlightActiveLink(global.currentPage);
}

document.addEventListener('DOMContentLoaded', init)
highlightActiveLink(global.currentPage);

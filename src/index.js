import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './styles/style.css';
import {displayPopularMovies, displayPopularTV} from "./Modules/DisplayMedia";

// Create an object to retrieve the current html page-name for routing
const global = {
    currentPage: window.location.pathname
}

// Loop through all nav-link classes and apply the "active" class for highlighting
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    console.log(global.currentPage);
    console.log(links);
    links.forEach(link => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    })
}


// Create a Router and initialize through a condition to navigate through html pages
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('movie');
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('tv')
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('TV Details')
            break;
        case '/search.html':
            console.log('Search')
            break;
    }
    // Each time a html page is called render the page with the link that has the "active" classname
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init)
highlightActiveLink();

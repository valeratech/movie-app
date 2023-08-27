import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './styles/style.css';

// Create a Router to navigate through html pages
const global = {
    currentPage: window.location.pathname
}

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


function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            console.log('Home')
            break;
        case '/shows.html':
            console.log('Shows')
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
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init)
highlightActiveLink();

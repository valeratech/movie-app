// Loop through all nav-link classes and apply the "active" class for highlighting
function highlightActiveLink(currentPage) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    })
}

export default highlightActiveLink;
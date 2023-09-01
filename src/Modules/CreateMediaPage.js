import noImage from '../assets/no-image.jpg'

function createMediaPage(pageData) {
    // The main container for the movie-details.html page
    const mainContainer = document.querySelector('#movie-details')
    mainContainer.append(
        createDetailsTopContainer(pageData),
        createDetailsBottomContainer(pageData),
    );
}

function createDetailsTopContainer(topData) {
    // Creates the top half of the Media Details Page which will be nested in createMediaPage

    const topContainer = document.createElement('div');
    topContainer.className = 'details-top';
    topContainer.append(
        createTopSubContainerOne(topData),
        createTopSubContainerTwo(topData)
    )

    return topContainer;
}

function createTopSubContainerOne(topData) {
    // Creates the first sub-container which will be nested in createDetailsTopContainer
    const container = document.createElement('div');
    container.className = 'details-top--sub-one';
    container.appendChild(createTopPagePoster(topData));

    return container;
}


function createTopPagePoster(topData) {
    // Creates the movie poster which will be appended into the createTopSubContainerOne
    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500${topData.poster_path}`;
    image.className = "card-img-top";
    image.alt = "Movie Title";

    return image;
}


function createTopSubContainerTwo(topData) {
    // Creates the first sub-container which will be nested in createDetailsTopContainer
    const container = document.createElement('div');
    container.className = 'details-top--sub-two';
    container.append(
        createDetailsMainTitle(topData),
        createMovieRating(topData),
        createReleaseDateInfo(topData),
        createMovieOverview(topData),
        createMovieGenresHeading(topData),
        createMovieGenresList(topData),
        createMovieHomepageButton(topData),
    )

    return container;
}

function createDetailsMainTitle(topData) {
    // Creates the main title which will be appended into the createTopSubContainerTwo
    const movieTitle = document.createTextNode(topData.original_title);
    console.log(movieTitle);

    const mainTitle = document.createElement('h2');
    mainTitle.appendChild(movieTitle);

   return mainTitle;
}

function createMovieRating(topData) {
    // Creates the movie rating which will be appended into the createTopSubContainerTwo
    const starIcon = document.createElement('i');
    starIcon.className = 'fas fa-star text-primary';
    console.log(topData);
    const rating = document.createTextNode(` ${(parseFloat(topData.vote_average).toFixed(1))} / 10`);

    const ratingContainer = document.createElement('p');
    ratingContainer.append(starIcon, rating)

    return ratingContainer;
}

function createReleaseDateInfo(topData) {
    // Creates the release date info which will be appended into the createTopSubContainerTwo
    const releaseDateInfo = document.createElement('p');
    releaseDateInfo.appendChild(document.createTextNode(`Release Date: ${topData.release_date}`));

    return releaseDateInfo;
}

function createMovieOverview(topData) {
    // Creates the movie overview which will be appended into the createTopSubContainerTwo
    const container = document.createElement('p');
    container.appendChild(document.createTextNode(topData.overview));

    return container;
}

function createMovieGenresHeading(topData) {
    // Creates a "Genres" sub-heading which will be appended into the createTopSubContainerTwo
    const heading = document.createElement('h5');
    heading.appendChild(document.createTextNode('Genres'));

    return heading;
}

function createMovieGenresList(topData) {
    const listContainer = document.createElement('ul');
    topData.genres.forEach(genre => {
        const list = document.createElement('li');
        list.appendChild(document.createTextNode(genre.name));
        listContainer.appendChild(list);
    })

    return listContainer;
}

function createMovieHomepageButton(topData) {
    const link = document.createElement('a');
    link.href = '/';
    link.target = '_blank';
    link.className = 'btn';
    link.appendChild(document.createTextNode('Visit Movie Homepage'));

    return link;
}

function createDetailsBottomContainer(bottomData) {
    // Creates the bottom half of the Media Details Page
    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'details-bottom';
    bottomContainer.append(
        createMovieInfoHeader(bottomData),

    )

    return bottomContainer;
}

function createMovieInfoHeader(bottomData) {
    // Creates the movie info header for the bottom half of the media-page which will be appended to createDetailsBottomContainer
    const movieInfo = document.createElement('h2');
    movieInfo.appendChild(document.createTextNode('Movie Info'));

    return movieInfo;
}



export default createMediaPage;


// <div class="details-top">
//     <div>
//         <img
//             src="../images/no-image.jpg"
//             class="card-img-top"
//             alt="Movie Title"
//         />
//     </div>
//     <div>
//         <h2>Movie Title</h2>
//         <p>
//             <i class="fas fa-star text-primary"></i>
//             8 / 10
//         </p>
//         <p class="text-muted">Release Date: XX/XX/XXXX</p>
//         <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
//             atque molestiae error debitis provident dolore hic odit, impedit
//             sint, voluptatum consectetur assumenda expedita perferendis
//             obcaecati veritatis voluptatibus. Voluptatum repellat suscipit,
//             quae molestiae cupiditate modi libero dolorem commodi obcaecati!
//             Ratione quia corporis recusandae delectus perspiciatis consequatur
//             ipsam. Cumque omnis ad recusandae.
//         </p>
//         <h5>Genres</h5>
//         <ul class="list-group">
//             <li>Genre 1</li>
//             <li>Genre 2</li>
//             <li>Genre 3</li>
//         </ul>
//         <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>
//     </div>
// </div>
//
//
// <div class="details-bottom">
//     <h2>Movie Info</h2>
//     <ul>
//         <li><span class="text-secondary">Budget:</span> $1,000,000</li>
//         <li><span class="text-secondary">Revenue:</span> $2,000,000</li>
//         <li><span class="text-secondary">Runtime:</span> 90 minutes</li>
//         <li><span class="text-secondary">Status:</span> Released</li>
//     </ul>
//     <h4>Production Companies</h4>
//     <div class="list-group">Company 1, Company 2, Company 3</div>
// </div>
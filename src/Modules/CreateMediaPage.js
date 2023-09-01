import noImage from '../assets/no-image.jpg'

function createMediaPage(pageData) {
    // The main container for the movie-details.html page
    const mainContainer = document.querySelector('#movie-details')
    mainContainer.appendChild(createDetailsTopContainer(pageData));
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
    const starIcon = document.createElement('i');
    starIcon.className = 'fas fa-star text-primary';
    console.log(topData);
    const rating = document.createTextNode(` ${(parseFloat(topData.vote_average).toFixed(1))} / 10`);

    const ratingContainer = document.createElement('p');
    ratingContainer.append(starIcon, rating)

    return ratingContainer;
}

function createReleaseDateInfo(topData) {
    const releaseDateInfo = document.createElement('p');
    releaseDateInfo.appendChild(document.createTextNode(`Release Date: ${topData.release_date}`));

    return releaseDateInfo;
}

function createDetailsBottom() {
    // Creates the bottom half of the Media Details Page
    const topContainer = document.createElement('div');
}

function createBottomHeader() {}

function createBottomList() {}

function createBottomSubHeader() {}

function createBottomListGroup() {}

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
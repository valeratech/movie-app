import noImage from '../assets/no-image.jpg'

function createMediaPage(pageData) {
    const mainContainer = document.querySelector('#movie-details')
    mainContainer.appendChild(createDetailsTop(pageData));
}

function createDetailsTop(pageData) {
    // Creates the top half of the Media Details Page

    const topContainer = document.createElement('div');
    topContainer.className = 'details-top';
    topContainer.appendChild(
        createTopPagePoster(pageData),
    )

    return topContainer;
}

function createDetailsTopInfo(pageData) {

}


function createTopPagePoster(pageData) {

    console.log(`https://image.tmdb.org/t/p/w500${pageData.poster_path}`)
    const image = document.createElement('img');
    image.src = `https://image.tmdb.org/t/p/w500${pageData.poster_path}`;
    image.className = "card-img-top";
    image.alt = "Movie Title";

    const container = document.createElement('div');
    container.appendChild(image);

    return container;
}

function createDetailsBottom() {
    // Creates the bottom half of the Media Details Page
    const topContainer = document.createElement('div');
}

function createBottomHeader() {}

function createBottomList() {}

function createBottomSubHeader() {}

function crreatBottomListGroup() {}

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
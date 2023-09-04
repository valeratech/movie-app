import noImage from '../assets/no-image.jpg'

function createMediaPage(pageData, type) {
    // The main container that will display information in the movie-details.html page
    if (type === 'movie') {
        const movieContainer = document.querySelector('#movie-details');
        movieContainer.append(
            createOverlay(pageData.backdrop_path),
            createDetailsTopContainer(pageData, type),
            createDetailsBottomContainer(pageData, type),
        );
    } else {
        const tvContainer = document.querySelector('#show-details');
        tvContainer.append(
            createOverlay(pageData.backdrop_path),
            createDetailsTopContainer(pageData, type),
            createDetailsBottomContainer(pageData, type),
        )
    }
}

function createOverlay(imagePath) {
    // Creates a media-image backdrop for the media page
    const div = document.createElement('div');
    div.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${imagePath}`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';
    div.style.backgroundRepeat = 'no-repeat';
    div.style.height = '100vh';
    div.style.width = '100vw';
    div.style.position = 'absolute';
    div.style.top = '0';
    div.style.left = '0';
    div.style.zIndex = '-1';
    div.style.opacity = '0.1';

    return div;
}

function createDetailsTopContainer(topData, type) {
    // Creates the top half of the Media Details Page which will be nested in createMediaPage
    console.log('this', type)
    const topContainer = document.createElement('div');
    topContainer.className = 'details-top';
    topContainer.append(
        createTopSubContainerOne(topData),
        createTopSubContainerTwo(topData, type)
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
    image.alt = "Media Title";

    return image;
}


function createTopSubContainerTwo(topData, type) {
    // Creates the first sub-container which will be nested in createDetailsTopContainer
    const container = document.createElement('div');
    container.className = 'details-top--sub-two';
    container.append(
        createDetailsMainTitle(topData, type),
        createMediaRatingContainer(topData),
        createMediaDateInfo(topData, type),
        createMediaOverview(topData),
        createMediaGenresHeading(topData),
        createMediaGenresList(topData),
        createMediaHomepageButton(topData, type),
    )

    return container;
}

function createDetailsMainTitle(topData, type) {
    // Creates the main title which will be appended into the createTopSubContainerTwo

        const titleText= document.createTextNode(
            type === 'movie' ? topData.original_title : topData.name
        );

        const mainTitle = document.createElement('h2');
        mainTitle.appendChild(titleText);

        return mainTitle;
}


function createMediaRatingIcon() {
    const starIcon = document.createElement('i');
    starIcon.className = 'fas fa-star text-primary';

    return starIcon;
}

function createMediaRating(topData) {
    const rating = document.createTextNode(` ${(parseFloat(topData.vote_average).toFixed(1))} / 10`);

    return rating;
}

function createMediaRatingContainer(topData) {
    // Creates the movie rating which will be appended into the createTopSubContainerTwo

    const ratingContainer = document.createElement('p');
    ratingContainer.append(createMediaRatingIcon(), createMediaRating(topData));

    return ratingContainer;
}

function createMediaDateInfo(topData, type) {
    // Creates the release date info which will be appended into the createTopSubContainerTwo
    const mediaDateInfo = document.createElement('p');
    mediaDateInfo.appendChild(document.createTextNode(
        type === 'movie' ? `Release Date: ${topData.release_date}` : `First Air Date: ${topData.first_air_date}`
        )
    );

    return mediaDateInfo;
}

function createMediaOverview(topData) {
    // Creates the movie overview which will be appended into the createTopSubContainerTwo
    const container = document.createElement('p');
    container.appendChild(document.createTextNode(topData.overview));

    return container;
}

function createMediaGenresHeading(topData) {
    // Creates a "Genres" sub-heading which will be appended into the createTopSubContainerTwo
    const heading = document.createElement('h5');
    heading.appendChild(document.createTextNode('Genres'));

    return heading;
}

function createMediaGenresList(topData) {
    const listContainer = document.createElement('ul');
    topData.genres.forEach(genre => {
        const list = document.createElement('li');
        list.appendChild(document.createTextNode(genre.name));
        listContainer.appendChild(list);
    })

    return listContainer;
}

function createMediaHomepageButton(topData, type) {
    const link = document.createElement('a');
    link.href = '/';
    link.target = '_blank';
    link.className = 'btn';
    link.appendChild(document.createTextNode(
        type === 'movie' ? 'Visit Movie Homepage' : 'Visit Show Homepage')
    );

    return link;
}

function createDetailsBottomContainer(bottomData, type) {
    // Creates the bottom half of the Media Details Page
    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'details-bottom';
    bottomContainer.append(
        createMediaInfoHeader(bottomData, type),
        createMediaInfoList(bottomData, type),
        createProductionInfoHeader(),
        createCompanyList(bottomData)
    )

    return bottomContainer;
}

function createMediaInfoHeader(bottomData, type) {
    // Creates the movie info header for the bottom half of the media-page which will be appended to createDetailsBottomContainer
    const mediaInfoHeader = document.createElement('h2');
    mediaInfoHeader.appendChild(document.createTextNode(
        type === 'movie' ? 'Movie Info' : 'Show Info'
        )
    );

    return mediaInfoHeader;
}

function createMediaInfoObject(bottomData, type) {
    // Decontructs and extracts data into a new object from the main-API movie data object
    if (type === 'movie') {
        const {budget, revenue, runtime, status} = bottomData;
        const obj = {budget, revenue, runtime, status};
        const items = [
            {name: 'Budget', info: obj.budget},
            {name: 'Revenue', info: obj.revenue},
            {name: 'Runtime', info: obj.runtime},
            {name: 'Status', info: obj.status}
        ];

        return items;

    } else {
        const {number_of_episodes, first_air_date, status} = bottomData;
        const obj = {number_of_episodes, first_air_date, status};
        const items = [
            {name: 'Number of Episodes', info: obj.number_of_episodes},
            {name: 'First Air Date', info: obj.first_air_date},
            {name: 'Status', info: obj.status}
        ];

        return items;
    }

}

function createMediaInfoItem(name, info) {
    // Creates a list container with associated info to populate the unordered createMovieInfoList function

    // Create nodes which will be appended to the span and list container
    const nameText = document.createTextNode(`${name}: `);
    const infoText =  document.createTextNode(
        name === 'Budget' || name === 'Revenue' ? `$${parseInt(info).toLocaleString("en-us")}`
            : name === 'Runtime' ? `${info} minutes`
            : info
    );

    const span = document.createElement('span');
    span.className = 'text-secondary';
    span.appendChild(nameText);

    const list = document.createElement('li');
    list.append(
        span,
        infoText
    );

    return list;
}

function createMediaInfoList(bottomData, type) {
    const listContainer = document.createElement('ul');

    const mediaInfo = createMediaInfoObject(bottomData, type);
    mediaInfo.forEach(item => {
        listContainer.appendChild(
            createMediaInfoItem(item.name, item.info)
        )
    })

    return listContainer;
}


function createProductionInfoHeader() {
    // Creates a subheader for the production companies that appends to createDetailsBottomContainer
    return document.createElement('h4').appendChild(document.createTextNode('Production Companies'));
}

function createCompanyList(bottomData) {
    // Creates a list on the same line within a container - last item to append to  createDetailsBottomContainer
    const div = document.createElement('div');
    div.className = 'list-group';

    // Loop through the production names and add a comma if object is no the last item in the index
    div.appendChild(
        document.createTextNode(bottomData.production_companies.map(company => company.name).join(', '))
    );

    return div;
}

export default createMediaPage;
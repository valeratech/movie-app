import noImage from '../assets/no-image.jpg'

function createMediaTileContainer(mediaData, type) {
    // Create card containers for tv/movie banner tiles
    console.log(mediaData.vote_average);
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    if (type === 'movie') {
        cardContainer.append(
            createPosterImageLink(mediaData.poster_path, mediaData.id, mediaData.original_title, type),
            createMediaTileInformation(mediaData.original_title, mediaData.vote_average)
        );
    } else if (type === 'show') {
        cardContainer.append(
            createPosterImageLink(mediaData.poster_path, mediaData.id, mediaData.name, type),
            createMediaTileInformation(mediaData.name, mediaData.vote_average)
        );
    }

    return cardContainer;
}

function createPosterImageLink(poster, id, title, type) {
    // Creates an anchor to link each API backdrop_path value
    const image = document.createElement('img');
    image.src = poster ? `https://image.tmdb.org/t/p/w500${poster}` : noImage;

    // https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL
    const anchor = document.createElement('a');

    // Set ID parameter in the URL which can be used to render movie page
    anchor.href = `${type === 'movie' ? 'movie' : 'tv'}-details.html?id=${id}`;
    anchor.alt = title;
    anchor.appendChild(image);

    return anchor;
}

function createMediaTileInformation(title, rating) {
    // Create card information for original_tile and release_date API values to fill tiles
    const mediaBodyTitle = document.createElement('h5');
    mediaBodyTitle.className = 'card-title';
    mediaBodyTitle.appendChild(document.createTextNode(title));

    const starIcon = document.createElement('i');
    starIcon.className = 'fas fa-star text-primary';
    const average = document.createTextNode(` ${(parseFloat(rating).toFixed(1))} / 10`);

    const mediaBodyText = document.createElement('small');
    mediaBodyText.className = 'text-muted';
    mediaBodyText.append(
        starIcon,
        average
    );

    const mediaBodyTextContainer = document.createElement('p');
    mediaBodyTextContainer.className = 'card-text';
    mediaBodyTextContainer.appendChild(mediaBodyText);

    // Create card body container and append the card information
    const mediaTileContainer = document.createElement('div');
    mediaTileContainer.className = 'card-body';
    mediaTileContainer.append(mediaBodyTextContainer, mediaBodyTitle);

    return mediaTileContainer;
}

export default createMediaTileContainer;
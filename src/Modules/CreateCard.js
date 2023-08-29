import noImage from '../assets/no-image.jpg'

function createCardContainer(media) {
    // Create card containers for tv/movie banner tiles
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.append(createImageLink(media.poster_path, media.id, media.original_title), createCardInformation(media.original_title, media.release_date));

    return cardContainer;
}

function createImageLink(poster, id, title) {
    // Creates an anchor to link each API backdrop_path value
    const image = document.createElement('img');
    image.src = poster ? `https://image.tmdb.org/t/p/w500${poster}` : noImage;

    // https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL
    const anchor = document.createElement('a');
    anchor.href = `movie-details.html?id=${id}`;
    anchor.alt = title;
    anchor.appendChild(image);

    return anchor;
}

function createCardInformation(title, text) {
    // Create card information for original_tile and release_date API values to fill tiles
    const cardBodyTitle = document.createElement('h5');
    cardBodyTitle.className = 'card-title';
    cardBodyTitle.appendChild(document.createTextNode(title));

    const cardBodyText = document.createElement('small');
    cardBodyText.className = 'text-muted';
    cardBodyText.appendChild(document.createTextNode(`Release: ${text}`));

    const cardBodyTextContainer = document.createElement('p');
    cardBodyTextContainer.className = 'card-text';
    cardBodyTextContainer.appendChild(cardBodyText);

    // Create card body container and append the card information
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.append(cardBodyTitle, cardBodyTextContainer);

    return cardBody;
}

export default createCardContainer;
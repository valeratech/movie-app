import noImage from '../assets/no-image.jpg'

function createCardContainer(mediaData, type) {
    // Create card containers for tv/movie banner tiles
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    if (type === 'movie') {
        cardContainer.append(
            createImageLink(mediaData.poster_path, mediaData.id, mediaData.original_title),
            createCardInformation(mediaData.original_title, mediaData.release_date)
        );
    } else if (type === 'show') {
        cardContainer.append(
            createImageLink(mediaData.poster_path, mediaData.id, mediaData.name, type),
            createCardInformation(mediaData.name, mediaData.first_air_date)
        );
    }

    return cardContainer;
}

function createImageLink(poster, id, title, type) {
    // Creates an anchor to link each API backdrop_path value
    const image = document.createElement('img');
    image.src = poster ? `https://image.tmdb.org/t/p/w500${poster}` : noImage;

    // https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL
    const anchor = document.createElement('a');
    anchor.href = `${type}-details.html?id=${id}`; // Set ID parameter in the URL which can be used to render movie page
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
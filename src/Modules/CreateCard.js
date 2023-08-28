import noImage from '../assets/no-image.jpg'

function createCardContainer() {
    // Create card containers for movie banner tiles
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.append(createImageLink(), createCardInformation('my title','my text'));

    return cardContainer;
}

function createImageLink() {
    const image = document.createElement('img');
    image.src =  noImage;

    const anchor = document.createElement('a');
    anchor.appendChild(image);

    return anchor;
}

function createCardInformation(title, text) {
    // Create card information to fill tiles
    const cardBodyTitle = document.createElement('h5');
    cardBodyTitle.className = 'card-title';
    cardBodyTitle.appendChild(document.createTextNode(title));

    const cardBodyText = document.createElement('small');
    cardBodyText.className = 'text-muted';
    cardBodyText.appendChild(document.createTextNode(text));

    const cardBodyTextContainer = document.createElement('p');
    cardBodyTextContainer.className = 'card-text';
    cardBodyTextContainer.appendChild(cardBodyText);

    // Create card body container and append the card informatio
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.append(cardBodyTitle, cardBodyTextContainer);

    return cardBody;
}

// <div class="card">
//     <a href="movie-details.html?id=1">
//         <img src="./assets/no-image.jpg">
//     </a>
//     <div class="card-body">
//         <h5 class="card-title">Movie Title</h5>
//         <p class="card-text">
//             <small class="text-muted">Release: XX/XX/XXXX</small>
//         </p>
//     </div>
// </div>

export {createCardContainer, createImageLink, createCardInformation};
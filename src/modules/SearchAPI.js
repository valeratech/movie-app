import toggleSpinner from "./ToggleSpinner";

async function searchAPIData(type, term, page) {
    const API_KEY = 'e9dd849d4f789bb12085092d84ad45f7';
    const API_URL = 'https://api.themoviedb.org/3/';

    toggleSpinner();

    // Gather movie or tv 'type' and the 'term' we are searching on and fetch results
    const response = await fetch(
        `${API_URL}search/${type}?api_key=${API_KEY}&language=en-US&query=${term}`
    );

    const data = await response.json();

    toggleSpinner();

    return data;
}

export default searchAPIData;
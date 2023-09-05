import toggleSpinner from "./ToggleSpinner";

async function searchAPIData(type, term) {
    console.log('this', type,term)
    const API_KEY = 'e9dd849d4f789bb12085092d84ad45f7';
    const API_URL = 'https://api.themoviedb.org/3/';

    toggleSpinner();

    const response = await fetch(
        `${API_URL}search/${type}?api_key=${API_KEY}&language=en-US&query=${term}`
    );

    const data = await response.json();

    toggleSpinner();

    return data;
}

export default searchAPIData;
import toggleSpinner from "./ToggleSpinner";

// Fetch popular movie data from themoviedb.org and return objects
async function fetchAPIData(endpoint) {
    const API_KEY = 'e9dd849d4f789bb12085092d84ad45f7';
    const API_URL = 'https://api.themoviedb.org/3/';

    toggleSpinner();
    if (endpoint === 'movie' || endpoint === 'tv') {
        const res = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
        const data = await res.json();
        toggleSpinner();
        return (data);
    } else {
        const res = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
        const data = await res.json();
        toggleSpinner();
        return (data);
    }
}

export default fetchAPIData;
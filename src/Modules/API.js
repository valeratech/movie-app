// Fetch popular movie data from themoviedb.org and return objects
async function fetchAPIData(endpoint) {
    const API_KEY = 'e9dd849d4f789bb12085092d84ad45f7';
    const API_URL = 'https://api.themoviedb.org/3/';
    const res = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();
    console.log(data);
    return (data);
}

export default fetchAPIData;
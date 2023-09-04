import fetchAPIData from "./API";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

async function displaySlider() {
    const {results} = await fetchAPIData('movie/now_playing');
    console.log(results);

}

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    ...
});

function createSwiperHeader() {
    const header = document.createElement('h4');

}

export default displaySlider;



// <div class="swiper-slide">
//     <a href="movie-details.html?id=1">
//         <img src="./images/no-image.jpg" alt="Movie Title" />
//     </a>
//     <h4 class="swiper-rating">
//         <i class="fas fa-star text-secondary"></i> 8 / 10
//     </h4>
// </div>
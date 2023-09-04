import fetchAPIData from "./API";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import noImage from "../assets/no-image.jpg";

function createSliderPoster(mediaData, type) {
    const image = document.createElement('img');
    image.src = mediaData.poster_path ? `https://image.tmdb.org/t/p/w500${mediaData.poster_path}` : noImage;

    const anchor = document.createElement('a');
    anchor.href = `${type === 'movie' ? 'movie' : 'tv'}-details.html?id=${mediaData.id}`; // Set ID parameter in the URL which can be used to render movie page
    anchor.alt = mediaData.title;
    anchor.appendChild(image);

    return anchor;
}

async function displaySlider(type) {
    const {results} = await fetchAPIData('movie/now_playing');
    console.log(results);
    results.forEach(media => {
        const swiperWrapper = document.querySelector('.swiper-wrapper');

        const star = document.createElement('i');
        star.className = 'fas fa-star text-primary';

        const rating = document.createTextNode(` ${(parseFloat(media.vote_average).toFixed(1))} / 10`);

        const header = document.createElement('h4');
        header.className = "swiper-rating";
        header.append(star, rating);

        const swiperDiv = document.createElement('div');
        swiperDiv.className = "swiper-slide";
        swiperDiv.append(createSliderPoster(media, type), header);

        swiperWrapper.appendChild(swiperDiv);
    })
    initSwiper()
}

function initSwiper() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            700: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
}

function createSwiperHeader() {
    const header = document.createElement('h4');

}

export default displaySlider;
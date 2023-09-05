import fetchAPIData from "./FetchAPI";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import noImage from "../assets/no-image.jpg";

async function displaySlider(type) {
    const {results} = await fetchAPIData(`${type === 'movie' ? 'movie/now_playing' : 'tv/on_the_air'}`);
    console.log(results);
    results.forEach(media => {
        const swiperDiv = document.createElement('div');
        swiperDiv.className = "swiper-slide";
        swiperDiv.append(createSliderPoster(media, type), createSliderHeading(media));

        const swiperWrapper = document.querySelector('.swiper-wrapper');
        swiperWrapper.appendChild(swiperDiv);
    })
    initSwiper();
}

function createSliderPoster(mediaData, type) {
    const image = document.createElement('img');
    image.src = mediaData.poster_path ? `https://image.tmdb.org/t/p/w500${mediaData.poster_path}` : noImage;

    const anchor = document.createElement('a');
    anchor.href = `${type === 'movie' ? 'movie' : 'tv'}-details.html?id=${mediaData.id}`; // Set ID parameter in the URL which can be used to render movie page
    anchor.alt = mediaData.title;
    anchor.appendChild(image);

    return anchor;
}

function createSliderRatingIcon() {
    const star = document.createElement('i');
    star.className = 'fas fa-star text-primary';

    return star;
}

function createSliderRating(mediaData) {
    const rating = document.createTextNode(` ${(parseFloat(mediaData.vote_average).toFixed(1))} / 10`);

    return rating;
}

function createSliderHeading(mediaData) {
    const header = document.createElement('h4');
    header.className = "swiper-rating";
    header.append(createSliderRatingIcon(), createSliderRating(mediaData));

    return header;
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

export default displaySlider;
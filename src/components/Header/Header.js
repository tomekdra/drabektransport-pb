import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './Header.scss'
import img1 from '../../images/IMG_1.jpg'
import img2 from '../../images/IMG_2.jpg'
import img3 from '../../images/IMG_3.jpg'
import img4 from '../../images/IMG_4.jpg'

const Header = () => {

    const params = {
        effect: 'fade',
        fadeEffect: {
            crossFade: false
        },
        preloadImages: true,
        lazy: {
            loadPrevNext: true,
        },
        speed: 2000,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    }

    return (
        <Swiper {...params}>
            <div data-background={img1} className={'slide swiper-lazy'}>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div data-background={img2} className={'slide swiper-lazy'}>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div data-background={img3} className={'slide swiper-lazy'}>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <div data-background={img4} className={'slide swiper-lazy'}>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
        </Swiper>
    )
}

export default Header;
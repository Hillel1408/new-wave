const swiper = new Swiper('.intro', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const reviewsSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const certificatesSwiper = new Swiper('.slider__container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    spaceBetween: 88,
    initialSlide: 2,
    breakpoints: {
        1160: {
            slidesPerView: 2,
        },
    },
    navigation: {
        nextEl: '.slider__swiper-button-next',
        prevEl: '.slider__swiper-button-prev',
    },
});

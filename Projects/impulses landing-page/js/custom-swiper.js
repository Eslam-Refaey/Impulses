var swiper = new Swiper(".slide-content.products", {
    slidesPerView: 3,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    // allowSlideNext: true,
    // allowSlidePrev: true,
    loop: true,
    // centerInsufficientSlides: 'false',
    // centeredSlides: true,
    // centeredSlidesBounds: false,
    // direction: 'vertical',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        690: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 3,
        },

    },
});



// ====================================
// Testimonial Slider
// ====================================



var swiper = new Swiper(".slide-content.testimonial", {
    slidesPerView: 1,
    spaceBetween: 80,
    autoplay: true,
    loop: false,
    centerSlide: 'true',
    draggable: true,
    fade: 'true',
    grabCursor: 'true',
    simulateTouch: 'true',
    // centerInsufficientSlides: 'false',
    // centeredSlides: true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        690: {
            slidesPerView: 1,
        },
        1150: {
            slidesPerView: 2,
        },

    },
});


// =======================================
// Vertical Swiper
// =======================================



var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    grabcursor: 'true',
    mousewheel: true,
    mousewheel: {
        invert: true,
        sensitivity: 1,
      },
    setTransition : ('.swiper-container', 5000),
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    }
});

document.getElementById("swiperid").addEventListener("wheel", (e) => {
    console.log(e);
    const isEnd = swiper.isEnd;
    const isBegining = swiper.isBeginning;
    if (e.deltaY > 90) {
        if (!isEnd) { e.preventDefault()
        swiper.slideNext()}
    } else {
        if (!isBegining) { e.preventDefault()
        swiper.slidePrev()}
    }
})

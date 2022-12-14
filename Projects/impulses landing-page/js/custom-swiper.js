var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    autoplay: true,
    loop: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
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
    slidesPerView: 3,
    spaceBetween: 80,
    autoplay: true,
    loop: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
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
    grabcursor: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});






//   var swiper = new Swiper(".swiper-container", {
//     direction: 'vertical',
//     effect: 'coverflow',
//     mousewheel: true,
//     slidesPerView: 1,
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//     },
//     clickable: true,
//     type: 'progressbar',
//   });
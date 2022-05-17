window.addEventListener("load", function () {
    var swiper = new Swiper(".brand__slider", {
        slidesPerView: 5,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiperProduct = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiperProductThumb = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiperProduct,
        },
    });
    var bannerMain = new Swiper(".banner-swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

});

window.addEventListener("load", function () {
    let hamburger = document.querySelector('.v-search');

    const toggleMenu = () => {
        hamburger.classList.toggle('active');
    }

    hamburger.addEventListener('click', e => {
        e.stopPropagation();

        toggleMenu();
    });
});


window.addEventListener("load", function () {
    let hamburger1 = document.querySelector('.h-link-order');

    const toggleMenu = () => {
        hamburger1.classList.toggle('active');
    }

    hamburger1.addEventListener('click', e => {
        e.stopPropagation();

        toggleMenu();
    });
});

window.addEventListener("load", function () {
    let hamburger2 = document.querySelector('.add-sale');

    const toggleMenu = () => {
        hamburger2.classList.toggle('active');
    }

    hamburger2.addEventListener('click', e => {
        e.stopPropagation();

        toggleMenu();
    });
});
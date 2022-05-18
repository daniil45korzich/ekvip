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

window.addEventListener("load", function () {
    let catGrid = document.querySelector('.t-view__grid');
    let catList = document.querySelector('.t-view__list');
    let productGrid = document.querySelector('.page-products-grid');
    let productList = document.querySelector('.page-products-list');
    
    const catListActive = () => {
        fadeOut(productList);
        fadeIn(productGrid);
    }

    const catGridActive = () => {
        fadeIn(productList);
        fadeOut(productGrid);
    }

    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "grid";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };
    
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0.1) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    catList.addEventListener('click', e => {
        e.stopPropagation();

        catGridActive();
    });

    catGrid.addEventListener('click', e => {
        e.stopPropagation();

        catListActive();
    });
});

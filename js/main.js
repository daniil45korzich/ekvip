// ** FADE IN FUNCTION **
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
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

window.addEventListener("load", function () {
    var swiper = new Swiper(".brand__slider", {
        slidesPerView: 5,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 5,
            }
        }
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

    if (hamburger2 !== null) {
        hamburger2.addEventListener('click', e => {
            e.stopPropagation();

            toggleMenu();
        });
    }
});

window.addEventListener("load", function () {
    let catGrid = document.querySelector('.t-view__grid');
    let catList = document.querySelector('.t-view__list');
    let productGrid = document.querySelector('.page-products-grid');
    let productList = document.querySelector('.page-products-list');

    const catListActive = () => {
        fadeOut(productList);
        fadeIn(productGrid);
        catGrid.childNodes[0].src='img/view-grid.png';
        catList.childNodes[0].src='img/view-list.png';
    }

    const catGridActive = () => {
        fadeIn(productList);
        fadeOut(productGrid);
        catGrid.childNodes[0].src='img/view-grid-noactive.png';
        catList.childNodes[0].src='img/view-list-active.png';
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

    if (catList !== null) {
        catList.addEventListener('click', e => {
            e.stopPropagation();


            catGridActive();
        });
    }

    if (catGrid !== null) {
        catGrid.addEventListener('click', e => {
            e.stopPropagation();

            catListActive();
        });
    }


    let mapBtn = document.querySelector(".map__btn");
    let mapInfo = document.querySelector(".map__info");

    if (mapBtn !== null) {
        mapBtn.addEventListener("click", function () {
            this.textContent = this.textContent === 'Подробнее' ? 'Скрыть' : 'Подробнее';
            mapInfo.classList.toggle('active');
        });
    }


    let menuVerticalNavName = document.querySelector(".menu-vertical-nav");

    menuVerticalNavName.addEventListener("click", function () {
        this.classList.toggle('active');
    });
});



window.addEventListener("load", function () {
    let HeaderMobBtn = document.querySelector(".menu__btn");
    let MenuMob = document.querySelector(".menu-mob");
    if (HeaderMobBtn !== null && MenuMob !== null) {
        HeaderMobBtn.addEventListener("click", function () {
            if (HeaderMobBtn.classList.contains("menu__btn_active")) {
                HeaderMobBtn.classList.remove("menu__btn_active");
                fadeOut(MenuMob);
            } else {
                HeaderMobBtn.classList.add("menu__btn_active");
                fadeIn(MenuMob);
            }
        });
    }

    /* tabs */
    let ProductLinks = document.querySelectorAll(".w-description-l__item");
    let ProductPanels = document.querySelectorAll(".w-description-c__item");
    for (let el of ProductLinks) {
        el.addEventListener("click", e => {
            e.preventDefault();
            if (document.querySelector(".w-description-l__item.active")) {
                document.querySelector(".w-description-l__item.active").classList.remove("active");
            }
            if (document.querySelector(".w-description-c__item.active")) {
                document.querySelector(".w-description-c__item.active").classList.remove("active");
            }
            //const parentListItem = el.parentElement;
            el.classList.add("active");
            var index = [...el.parentElement.children].indexOf(el);
            var panel = [...ProductPanels].filter(el => el.getAttribute("data-index") == index);
            panel[0].classList.add("active");
        });
    }
});

/* form */
window.addEventListener("load", function () {
    let Fade = document.querySelector(".overlay");
    let Modal = document.querySelector(".form-l");
    let ModalClose = document.querySelector(".form-l__close");
    let btnOpen = document.querySelector(".h-b-item__call");

    if (btnOpen !== null) {
        btnOpen.addEventListener("click", function (e) {
            fadeIn(Fade);
            fadeIn(Modal);
        });
    }

    if (ModalClose !== null) {
        ModalClose.addEventListener("click", function (e) {
            fadeOut(Fade);
            fadeOut(Modal);
        });
    }

    if (Fade !== null) {
        Fade.addEventListener("click", function (e) {
            fadeOut(Fade);
            fadeOut(Modal);
        });
    }
});

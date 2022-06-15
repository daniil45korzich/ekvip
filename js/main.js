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

/* banner main zone */
window.addEventListener("load", function () {
    let classOkrasochnojeOborudovanje = document.querySelector(".class-okrasochnoje-oborudovanje");
    let classStepenRazvalShozhdenja = document.querySelector(".class-stepen-razval-shozhdenja");
    let classGruzovojeOborudovanje = document.querySelector(".class-gruzovoje-oborudovanje");
    let classPodjemnojeIGudroOborud = document.querySelector(".class-podjemnoje-i-gudro-oborud");
    let classSpecInstrument = document.querySelector(".class-spec-instrument");
    let classCompressory = document.querySelector(".class-compressory");
    let classZapravkaKondicioner = document.querySelector(".class-zapravka-kondicioner");
    let classObshegarazhnojeOborud = document.querySelector(".class-obshegarazhnoje-oborud");
    let classMebel = document.querySelector(".class-mebel");
    let classShirokomontazhnojeOborud = document.querySelector(".class-shirokomontazhnoje-oborud");
    let classDiagnostichOborud = document.querySelector(".class-diagnostich-oborud");

    // HOVER EFFECT FUNCTIONS
    const с1 = document.querySelector(".fillPolEffect");
    classOkrasochnojeOborudovanje.addEventListener("mouseover", function( event ) {
        с1.setAttribute("points", "10058.31,7779.41 14217.68,5363.42 10426.04,3543.1 6023.26,5968.46");
        с1.setAttribute("fill", "#DFB9EB");
    }, false);
    classOkrasochnojeOborudovanje.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classShirokomontazhnojeOborud.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "7809.65,12249.8 10597.57,10504 5752.09,7995.86 2825.96,9676.59");
    }, false);
    classShirokomontazhnojeOborud.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classStepenRazvalShozhdenja.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "14284.16,8651.49 16331.84,7368.76 13483.44,6000.39 11415.57,7239.46");
    }, false);
    classStepenRazvalShozhdenja.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classSpecInstrument.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "5544.4,8021 7529.48,6787.53 5619.69,5933.57 3696.38,7074.69");
    }, false);
    classSpecInstrument.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classPodjemnojeIGudroOborud.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "16728.94,9638.58 19694.83,7908.21 17225.21,6769.4 14170.24,8570.89");
    }, false);
    classPodjemnojeIGudroOborud.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classObshegarazhnojeOborud.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "13629.92,11475.04 16595.81,9744.67 14126.19,8605.86 11071.22,10407.35");
    }, false);
    classObshegarazhnojeOborud.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classMebel.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "2619.89,9623.12 5444.18,7995.47 3534.39,7141.51 771.87,8676.8");
    }, false);
    classMebel.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classCompressory.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "7896.72,9025.5 10148.81,7804.75 7730.42,6785.49 5476.51,7990.19");
    }, false);
    classCompressory.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classZapravkaKondicioner.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "11113.67,10335.16 14204.96,8590.99 10960.09,7321.62 8184.86,9110.41");
    }, false);
    classZapravkaKondicioner.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classDiagnostichOborud.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "10287.15,13407.05 13498.87,11530.86 11130.88,10554.87 8041.76,12317.09");
    }, false);
    classDiagnostichOborud.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);

    classGruzovojeOborudovanje.addEventListener("mouseover", function( event ) {
        с1.setAttribute("fill", "#DFB9EB");
        с1.setAttribute("points", "16361.64,7320.06 17318.92,6771.91 14447.57,5437.97 13493.05,5908.03");
    }, false);
    classGruzovojeOborudovanje.addEventListener("mouseout", function( event ) {
        с1.setAttribute("fill", "#c9c9c9");
    }, false);




    // LINK ON CATEGORY URL
    classOkrasochnojeOborudovanje.addEventListener("click", function () {
        location.href = 'https://google.com';
    });

    classStepenRazvalShozhdenja.addEventListener("click", function () {
        location.href = 'https://mail.ru';
    });

    classGruzovojeOborudovanje.addEventListener("click", function () {
        location.href = 'https://mail.ru';
    });

    classPodjemnojeIGudroOborud.addEventListener("click", function () {
        location.href = 'https://vk.com';
    });

    classSpecInstrument.addEventListener("click", function () {
        location.href = 'https://vk.com';
    });

    classCompressory.addEventListener("click", function () {
        location.href = 'https://yandex.ru';
    });

    classZapravkaKondicioner.addEventListener("click", function () {
        location.href = 'https://yandex.ru';
    });

    classObshegarazhnojeOborud.addEventListener("click", function () {
        location.href = 'https://yandex.ru';
    });

    classMebel.addEventListener("click", function () {
        location.href = 'https://github.com';
    });

    classShirokomontazhnojeOborud.addEventListener("click", function () {
        location.href = 'https://github.com';
    });

    classDiagnostichOborud.addEventListener("click", function () {
        location.href = 'https://github.com';
    });

});

 "use strict";
window.onload = function () {
  let searchInput = document.querySelector(".header-search__bl");
  let searchValue = document.querySelector(".header-search__input");
  let searchBlock = document.querySelector(".h-search__block");
  let navLinks = document.querySelectorAll(".nav__link__a");
  let navLinksBody = document.querySelectorAll('.bl-nav__link');
  let subNavLinks = document.querySelectorAll('.bl-nav__link__body');
  let subNavLinkItems = document.querySelectorAll('.bl-nav__link__a');
  let BurgerBtns = document.querySelectorAll(".header__burger");
  let HeaderPopup = document.querySelector(".popup");
  let searchLink = document.querySelector(".header-search__bl-btn");
  let mainPage = document.querySelector(".page");
  let pageSearch = document.querySelector(".page-search");
  let switchBtn = document.querySelector(".switch-btn");
  let body = document.body;
  let modalForm = document.querySelector('.contact__form-modal');
  let modalFormClose = document.querySelector('.form__modal-close');
  let headerBottom = document.querySelector('.header__bottom');
  let infoLinks = document.querySelectorAll('.list__item-link');
  let infoSub = document.querySelectorAll('.list__item-subblock');
  

  searchInput.addEventListener("keydown", (e) => {
    if (searchValue.value > "") {
      searchBlock.classList.add("active");
    } else {
      searchBlock.classList.remove("active");
    }
  });
  BurgerBtns.forEach((e) => {
    e.addEventListener("click", (e) => {
      HeaderPopup.classList.toggle("active");
      body.classList.toggle("active");
    });
  });
  navLinks.forEach((e) => {
    e.addEventListener('mouseover', () => {
      headerBottom, mainPage.classList.add('hide__z-index');
    });
    e.addEventListener('mouseout', () => {
      headerBottom, mainPage.classList.remove('hide__z-index');
    });
    e.addEventListener("click", (el) => {
        if (e.parentElement.querySelector(".p-bl-nav__link")) {
            e.parentElement.querySelector(".p-bl-nav__link").classList.toggle("active");
        }
      e.classList.toggle("active");
    });
  subNavLinks.forEach((e) => {
    e.addEventListener('mouseover', () => {
      headerBottom.classList.add('hide__z-index');
      mainPage.classList.add('hide__z-index');
    });
    navLinksBody.forEach(el => {
        el.addEventListener('mouseover', () => {
            headerBottom.classList.add('hide__z-index');
            mainPage.classList.add('hide__z-index');
          });
    })
    e.addEventListener('mouseout', () => {
      headerBottom.classList.remove('hide__z-index');
      mainPage.classList.remove('hide__z-index');
    });
  });
    
  });
  searchLink.addEventListener("click", (e) => {
    if (searchValue.value > "") {
      pageSearch.classList.toggle("active");
      searchBlock.classList.remove("active");
      mainPage.classList.toggle("noActive");
      document
        .querySelector(".header-search__bl-nav-pages")
        .classList.add("noActive");
      document.querySelector(".header-search").style = "flex: 0 1 100%";
      document
        .querySelector(".header-search__close")
        .classList.toggle("active");
    }
  });
  document
    .querySelector(".header-search__close")
    .addEventListener("click", (e) => {
      pageSearch.classList.remove("active");
      searchBlock.classList.remove("active");
      mainPage.classList.remove("noActive");
      document
        .querySelector(".header-search__bl-nav-pages")
        .classList.remove("noActive");
      document.querySelector(".header-search").style = "flex: 0 1 50%";
      document
        .querySelector(".header-search__close")
        .classList.remove("active");
    });
  if (switchBtn) {
    switchBtn.addEventListener("click", (e) => {
      switchBtn.classList.toggle("switch-on");
    });
  }
  if (document.querySelector(".gallery-top_1")) {
    let galleryTop1 = new Swiper(".gallery-top_1", {
      spaceBetween: 30,
      loop: false,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // watchOverflow: true,
      breakpoints: {
        320: {
          slidesPerView: 1.25,
        },
        700: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
  if (document.querySelector(".gallery-top_2")) {
    let galleryTop2 = new Swiper(".gallery-top_2", {
      spaceBetween: 30,
      loop: false,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // watchOverflow: true,
      breakpoints: {
        320: {
          slidesPerView: 1.25,
        },
        700: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }

  if (document.querySelector(".gallery-top_3")) {
    let galleryTop3 = new Swiper(".gallery-top_3", {
      spaceBetween: 30,
      loop: false,
      // loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 5,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // watchOverflow: true,
      // slidesPerColumn: 4,

      breakpoints: {
        320: {
          slidesPerView: 4,
        },
        700: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  }
  if (document.querySelector(".gallery-top_4")) {
    let galleryTop4 = new Swiper(".gallery-top_4", {
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 5,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // watchOverflow: true,
      // slidesPerColumn: 4,

      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
  if (document.querySelector(".products-sw")) {
    let productsSw = new Swiper(".products-sw", {
      spaceBetween: 25,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 5,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      // watchOverflow: true,
      // slidesPerColumn: 4,

      breakpoints: {
        320: {
          slidesPerView: 1.25,
        },
        700: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }
  subNavLinkItems.forEach(e => {
    e.addEventListener('click', () => {
        if (e.getAttribute('data-link') == 'modal-form') {
            modalForm.style.display = 'block';
        } 
    })
    });

    modalFormClose.addEventListener('click', () => {
    modalForm.style.display = 'none';
    });

  infoLinks.forEach(e => {
    let linkTitle = e.querySelector('.item__link-title'),
        linkMore = e.querySelectorAll('.item__link-more');
    e.addEventListener('click', () => {
      infoSub.forEach(el => {
        if (el.getAttribute('data-number') === e.getAttribute('data-number')) {
            el.classList.toggle('hidden');
            linkTitle.classList.toggle('link-title-bold');
            linkMore.forEach(link => {
                link.classList.toggle('hidden');
            })
        }
      })
    })
  })
  // function setSwipper() {
  //   console.log("1");
  //   debugger;
  //   if (document.querySelector(".products_items")) {
  //     let productsItems = new Swiper(".products_items", {
  //       spaceBetween: 10,
  //       loop: false,
  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },
  //       slidesPerView: 5,
  //       observer: true,
  //       observeParents: true,
  //       observeSlideChildren: true,
  //       // watchOverflow: true,
  //       // slidesPerColumn: 4,

  //       breakpoints: {
  //         320: {
  //           slidesPerView: 1.2,
  //         },
  //         700: {
  //           slidesPerView: 3,
  //         },
  //         1024: {
  //           slidesPerView: 4,
  //         },
  //       },
  //     });
  //   }
  //   debugger;
  // }
  // const mediaQuery = window.matchMedia("(max-width: 768px)");
  // function handleTabletChange(e) {
  //   if (e.matches) {
  //     console.log("Media Query Matched!");
  //     body.style.background = "red";
  //     productSwipers();
  //   } else {
  //     // productSwipers();
  //   }
  // }
  // function productSwipers() {
  //   if (document.querySelector(".s-batteries__body")) {
  //     let container = document.querySelectorAll(".s-batteries__body ");

  //     container.forEach((i) => {
  //       i.classList.toggle("swiper-container");
  //       i.classList.toggle("products_items");
  //       let wrapper = i.querySelector(".s-batteries__items");
  //       wrapper.classList.toggle("swiper-wrapper");
  //       let items = wrapper.querySelectorAll(".s-batteries__item");
  //       items.forEach((e) => {
  //         e.classList.toggle("swiper-slide");
  //         console.log("asdasd");
  //       });
  //     });
  //     setSwipper();
  //   }
  // }
  // // productSwipers();
  // mediaQuery.addListener(handleTabletChange);
  // handleTabletChange(mediaQuery);
};

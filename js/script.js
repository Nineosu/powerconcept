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
  
  /*
  searchInput.addEventListener("keydown", (e) => {
    if (searchValue.value > "") {
      searchBlock.classList.add("active");
    } else {
      searchBlock.classList.remove("active");
    }
  });
  */
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
  /*
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
  */
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
  if (document.querySelector(".gallery-top_2-slider")) {
    let galleryTop2 = new Swiper(".gallery-top_2-slider", {
      spaceBetween: 10,
    //   loop: false,
    //   loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: ".mn-brands-next",
        prevEl: ".mn-brands-prev",
      },
      slidesPerView: 'auto',
    //   observer: true,
    //   observeParents: true,
    //   observeSlideChildren: true,
      // watchOverflow: true,
    //   breakpoints: {
    //     320: {
    //       slidesPerView: 1.25,
    //     },
    //     700: {
    //       slidesPerView: 2,
    //     },
    //     1024: {
    //       slidesPerView: 3,
    //     },
    //   },
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
    let galleryTop4 = new Swiper(".products-slider", {
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: ".products-slider-next",
        prevEl: ".products-slider-prev",
      },
      slidesPerView: 4,
    //   observer: true,
    //   observeParents: true,
    //   observeSlideChildren: true,
      // watchOverflow: true,
      // slidesPerColumn: 4,

      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3.5,
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
  if (document.querySelector('.main__bunner-slider')) {
    let mainBunner = new Swiper('.main__bunner-slider', {
        spaceBetween: 10,
        loop: false,
        slidesPerView: 1,

        pagination: {
            el: '.main__bunner-pagination',
            type: 'bullets',
            clickable: true,
        }
      });
  }
  if (document.querySelector('.mn-news_slider')) {
    let newsSlider = new Swiper('.mn-news_slider', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        loop: true,

        scrollbar: {
            el: '.mn-news-scrollbar',
            draggable: true,
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
  });

  const modalType = document.querySelector('.modal__type'),
        modalTypeContent = document.querySelectorAll('.modal__type-content'),
        modalOutput = document.querySelector('.modal__output'),
        modalOutputContent = document.querySelectorAll('.modal__output-content'),
        modalCloseBtns = document.querySelectorAll('.table__modal-close'),
        modalTypeOpen = document.querySelectorAll('.link__battery-type'),
        modalOutputOpen = document.querySelectorAll('.link__output-type');

    modalTypeOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            modalTypeContent.forEach(content => {
                // if (content.getAttribute('battery-type') == btn.getAttribute('battery-type')) {
                    content.classList.add('table__modal-show');
                // }
            });
            modalType.classList.add('table__modal-show');
        });
    });

    modalOutputOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            modalOutputContent.forEach(content => {
                // if (content.getAttribute('output-type') == btn.getAttribute('output-type')) {
                    content.classList.add('table__modal-show');
                // }
            });
            modalOutput.classList.add('table__modal-show');
        });
    });

    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('type')) {
                modalTypeContent.forEach(content => {
                    content.classList.remove('table__modal-show');
                });
                modalType.classList.remove('table__modal-show');
            } else if (btn.classList.contains('output')) {
                modalOutputContent.forEach(content => {
                    content.classList.remove('table__modal-show');
                });
                modalOutput.classList.remove('table__modal-show');
            }
        });
    });

    // Areas more
   const areasMoreBtn = document.querySelector('.mn_areas-more'),
         areasItems = document.querySelectorAll('.mn_areas__item');

   areasMoreBtn.addEventListener('click', () => {
        areasItems.forEach(item => {
            item.classList.remove('mn_items-more');
            areasMoreBtn.style.display = 'none';
        });
   });

    // Clients more
    const clientsMoreBtn = document.querySelector('.mn-client-more'),
         clientsItems = document.querySelectorAll('.mn-client__item');

   clientsMoreBtn.addEventListener('click', () => {
        clientsItems.forEach(item => {
            item.classList.remove('mn_items-more');
            clientsMoreBtn.style.display = 'none';
        });
   });  

  let mapButtons = document.querySelectorAll('.points__item');
  let pointMenu = document.querySelector('.map__points');
  let selectedPoint = document.querySelector('.selected__point');
  let backBtn = document.querySelector('.points__footer-link');
  let selectedPointTitle = document.querySelector('.selected__point .points__item-title');
  let selectedPointText = document.querySelector('.selected__point .points__item-text')
  let pointsBody = document.querySelectorAll('.points__main');
  let openMenuBtns = document.querySelectorAll('.points__header-btn');


  function togglingMenu() {
    pointsBody.forEach(menu => {
        if (menu.classList.contains('pm-700')) {
            menu.classList.remove('pm-700');
        } else {
            menu.classList.add('pm-700');
        }
    });
  }

  function togglingBtns(btns) {
    btns.forEach(btn => {
        if (btn.classList.contains('points__header-more-btn')) {
            btn.classList.remove('points__header-more-btn');
            btn.classList.add('points__header-less-btn');
        } else {
            btn.classList.remove('points__header-less-btn');
            btn.classList.add('points__header-more-btn');
        }
    })
  }

  openMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        togglingBtns(openMenuBtns);
        togglingMenu();
      });
  });

    // Точки на карте
  let placemarks = [];

  mapButtons.forEach(item => {
    let mark = {};
    let strCoords = item.getAttribute('data-map-coords')?.split(',');
    mark[item.getAttribute('data-id-point')] = strCoords ? [Number(strCoords[0]), Number(strCoords[1])] : null;
    placemarks.push(mark);
  });

  function init() {
    // Создание центральной точки
    let map = new ymaps.Map('yandex-map', {
        center: [55.790236237572174,58.94949837657935],
        zoom: 6
    });

    placemarks.forEach(item => {
        let placemark = new ymaps.Placemark(item[Object.keys(item)], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../verstka/img/placemark__ico.svg',
            iconImageSize: [50, 60],
            iconImageOffset: [0, 0]
        });

        map.geoObjects.add(placemark);
    })

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    

    backBtn.addEventListener('click', () => {
        pointMenu.classList.toggle('hidden');
        selectedPoint.classList.toggle('hidden');
        pointsBody.forEach(body => {
            if (body.classList.contains('pm-700')) {
                body.classList.remove('pm-700')
                openMenuBtns.forEach(btn => {
                    btn.classList.remove('points__header-more-btn');
                    btn.classList.add('points__header-less-btn');
                })
            }
        })
    })

    mapButtons.forEach(button => {
        if (pointMenu.classList.contains('hidden')) {
            button.classList.remove('list__item-hover');
        }
        

        button.addEventListener('click', () => {
            if (!pointMenu.classList.contains('hidden')) {
                pointMenu.classList.toggle('hidden');
                selectedPoint.classList.toggle('hidden');
            }
            

            placemarks.forEach(mark => {
                let idPoint = button.getAttribute('data-id-point');
                if (idPoint == Object.keys(mark)) {
                try { 
                    goToPoint(mark[Object.keys(mark)])
                } catch {
                    console.error('Не заданы координаты')
                }
                selectedPointTitle.innerHTML =
                document.querySelector(`.points__item[data-id-point='${idPoint}']`)
                .querySelector('.points__item-title').innerHTML;

                selectedPointText.innerHTML = 
                document.querySelector(`.points__item[data-id-point='${idPoint}']`)
                .querySelector('.points__item-text').innerHTML;
                

                togglingMenu();
                togglingBtns(openMenuBtns);  
                }
            })
            
        });
      })
    
      function goToPoint(coordinates) {
        map.setCenter(coordinates, 15)
      }
  }
  if (document.querySelector('#yandex-map')) {
    ymaps.ready(init);
  }
  
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

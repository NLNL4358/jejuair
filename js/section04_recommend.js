var swiper = new Swiper(".recommendSwiper", {
  slidesPerView: 1, /* 기본을 모바일에 맞춰야 breakpoint를 사용할 수 있다. */
  spaceBetween: 20,
    /* 반응형 swiperjs 만들기위한 기능 breakpoints  (s가붙는것을 주의) !! "ooo 보다 클때의 경우"*/
    breakpoints : {
      768 : {
        slidesPerView: 2, /* 768px보다 클때 */
        spaceBetween: 30,
      },
  
      1024 : {
        slidesPerView: 3, /* 1024px보다 클때 */
        spaceBetween: 20,
      },

      1280 : {
        slidesPerView: 4, /* 1280px보다 클때 */
        spaceBetween: 40,
      }
    },
  loop : true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter : true,
  },


});
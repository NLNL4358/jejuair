$(document).ready(function(e){
  var swiper = new Swiper(".banner_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect : "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
})

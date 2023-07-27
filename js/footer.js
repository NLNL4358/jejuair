$(document).ready(function(){
  let siteMapHead = document.querySelector(".footer_top_list.site_map li:nth-child(1)");
  let siteMap = document.querySelector(".footer_top_list.site_map");

  let footerMobileNav = document.querySelector(".footer_mobile_nav");
  let lastScroll = 0; /* 마지막 스크롤 기록 */

  let fnbImages = document.querySelectorAll(".footer_nav_list");

  $(document).click(function(event){
    if(event.target == siteMapHead){
      $(siteMap).addClass("clicked");
    }
    else{
      $(siteMap).removeClass("clicked");
    }
  });

  for(let i = 0 ; i < fnbImages.length ; i++){
    $(fnbImages[i]).hover(function(e){
      $(this).addClass("hover");
    },
    function(e){
      $(this).removeClass("hover");
    })
  }

  $(window).scroll(function(event){
      //현재의 스크롤 위치
      var st = $(this).scrollTop();

      //스크롤 업다운 판별
      if (st > lastScroll){
        /* 스크롤 다운 */
        footerMobileNav.classList.remove("visible");
      }
      else {
         /* 스크롤 업 */
        footerMobileNav.classList.add("visible");

      }
      // 마지막 스크롤 업데이트
      lastScroll = st;
  });
})
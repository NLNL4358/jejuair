$(document).ready(function(e){
  /* 변수 */
  let mobileHamburger = $(".mobile_hamburger"); //모바일 햄버거
  let mobileNavWrap = $(".mobile_nav_wrap");    //모바일 Nav
  let mobileCloseButton = $(".close_button_wrap button"); //모바일 x버튼
  let mobileSnbListWrap = document.querySelectorAll(".mobile_snb_list_wrap");

  let mobileGnbLi = document.querySelectorAll(".mobile_gnb_li"); /* 모바일 매인 gnb li 배열 */

  let mobileNavMain = $(".mobile_nav_main");  // 모바일 메인 높이 정해주려고 

  let mobileNavMainsHeight = document.querySelector("body").offsetHeight;
  console.log(mobileNavMainsHeight);

  let section01MainHeight = document.querySelector(".section01_main").offsetHeight;

  /* 함수 */
  function openMobileNav(boole){ // true면 open, false close
    if(boole){
      $(mobileNavWrap).addClass("open")
    }

    else{
      $(mobileNavWrap).removeClass("open")
    }
  }


  function mobileGnbLiSelecting(idx){
    for(let i = 0 ; i < mobileGnbLi.length ;i++){
      $(mobileGnbLi[i]).removeClass("selected");
    }
    $(mobileGnbLi[idx]).addClass("selected");
  }

  function mobileSnbListSelecting(idx){
    for(let i = 0 ; i < mobileSnbListWrap.length ; i++){
      $(mobileSnbListWrap[i]).removeClass("selected");
    }
    $(mobileSnbListWrap[idx]).addClass("selected");
  }

  /* 이벤트 */
  $(mobileHamburger).click(function(event){
    openMobileNav(true);
  })
  $(mobileCloseButton).click(function(event){
    openMobileNav(false);
  })

  for(let i = 0 ; i< mobileGnbLi.length ; i++)
  {
    $(mobileGnbLi[i]).click(function(e){
      mobileGnbLiSelecting(i);
      mobileSnbListSelecting(i);
    })
  }

  /* 초기화 */
  $(mobileNavMain).css("height", `${mobileNavMainsHeight-section01MainHeight}px`);
})
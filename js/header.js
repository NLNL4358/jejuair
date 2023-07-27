$(document).ready(function(){
  /* 변수 선언*/
  let gnbList = document.querySelectorAll(".gnb_list");
  let gnbHoverBar = document.querySelector(".gnb_hover_bar");
  let arrangeOfBarMoving;

  let headerSub = document.querySelector(".header_sub");
  let subNav = document.querySelectorAll(".sub_nav");

  let rnbList = document.querySelectorAll(".rnb_list");
  let rnbListImg = document.querySelectorAll(".rnb_list a img");


  let userState = document.querySelectorAll(".mobile_ticket_check_wrap .users_state"); /* section02 */
  let loginBtn = document.querySelector(".login_btn");
  let mobileLoginBtn = document.querySelector(".sign_in_button_wrap button");


  let searchButton = document.querySelector(".search_button"); /* 데스크탑 서치버튼 */
  let mobileSearchButton = document.querySelector(".mobile_search_button"); /* 모바일 서치버튼 */
  let modalSearchBar = document.querySelector(".modal_search_bar");  /* 데스크탑 모달 서치바 */
  let mobileModalSearchBar = document.querySelector(".mobile_modal_search_bar");  /* 모바일 모달 서치바 */
  let searchBarCloseButton = document.querySelector(".search_bar_close_button"); /* 데스크탑 서치 x버튼  */
  let mobileSearchBarCloseButton = document.querySelector(".mobile_search_bar_close_button"); /* 데스크탑 서치 x버튼  */
  /* ================== */



  /* 함수 선언*/

  // hoverBar 움직이는 함수 선언
  function moveGnbHoverBarToList(idx){
    arrangeOfBarMoving = 0;
    for( let i = 0 ; i < idx ; i++){
      arrangeOfBarMoving += gnbList[i].offsetWidth;
    }
    gnbHoverBar.style.width = gnbList[idx].offsetWidth + "px";
    gnbHoverBar.style.left = arrangeOfBarMoving + "px";
  }
  // hoverBar 초기화
  function gnbHoverBarToZero(){
    gnbHoverBar.style.width = "0px";
  } 

  // gnbList가 hover되었을 때, 
  function addClassGnbHover(idx){
    for(let i = 0; i < gnbList.length ; i++){
      gnbList[i].classList.remove("hovered");
    }
    gnbList[idx].classList.add("hovered");
  }
  // gnbList에서 마우스가 나갔을때,
  function removeClassGnbHover(idx){
    gnbList[idx].classList.remove("hovered");
  }


  // 서브 네비게이션 visible
  function rollDownSnb(idx){
    headerSub.classList.add("visible");
    
    const subNavHeight = 5.73 + (+(subNav[idx].dataset.height) * 2.763 ) + "rem";
    // 서브 네이게이션중 gnb가 가리키는 lnb&snb 만 visible
    for(let i = 0 ; i < gnbList.length ; i++){
      subNav[i].classList.remove("visible");
      $(subNav[i]).css("height", "0px");
    }
    subNav[idx].classList.add("visible");
    $(headerSub.querySelector(".visible")).css("height", subNavHeight);
    $(headerSub).css("height", subNavHeight);
  }
  function rollUpSnb(idx){
    for(let i = 0 ; i < gnbList.length ; i++){
      subNav[i].classList.remove("visible");
    }
    headerSub.classList.remove("visible");
    $(".header_sub").css("height", "0px");
  }


  function changeRnbColorOn(idx){
    if( idx == 0){
      $(rnbListImg[idx]).attr("src", "img/icon/mypage_icon_hover.png")
    }
    else if( idx == 1){
      $(rnbListImg[idx]).attr("src", "img/icon/search_icon_hover.png")
    }
  }
  function changeRnbColorOff(idx){
    if( idx == 0){
      $(rnbListImg[idx]).attr("src", "img/icon/mypage_icon.png")
    }
    else if( idx == 1){
      $(rnbListImg[idx]).attr("src", "img/icon/search_icon.png")
    }
  }


  /* login 로직 클릭되면 data-login 확인, visitor면 로그인상태로 변경 -> knownUser면 visitor로 변경*/
  function loginStateChange(){
    if("visitor" == loginBtn.dataset.login){
      loginBtn.dataset.login = "knownUser";
      loginBtn.innerHTML = `<i class="xi-user-o"></i>로그아웃`;
      mobileLoginBtn.innerHTML = `로그아웃`;
    }
    else{
      loginBtn.dataset.login = "visitor";
      loginBtn.innerHTML = `<i class="xi-user-o"></i>로그인`;
      mobileLoginBtn.innerHTML = `로그인`;

    }
  }
  function changeMobileTicketTypeFromLogin(type){
    if(type == "visitor"){
      userState[0].classList.remove("selected");
      userState[1].classList.add("selected");
    }
    else{
      userState[0].classList.add("selected");
      userState[1].classList.remove("selected");
    }
  }


  function toggleSearchBar(){
    $(modalSearchBar).toggleClass("visible");
  }
  function toggleMobileSearchBar(){
    $(mobileModalSearchBar).toggleClass("visible");
  }
  /* ====================== */




  /* 이벤트 리스너 등록 */
  for(let i = 0 ; i < gnbList.length ; i++){
    $(gnbList[i]).hover(function(event){
      moveGnbHoverBarToList(i); // hoverBar 움직이는 함수 호출
      addClassGnbHover(i);  // List에 hovered 클래스 추가

      rollDownSnb(i); // snb 네비게이션 visible
    }, function(event){ // 호버가 풀렸을때
      removeClassGnbHover(i); //List에 hovered 클래스 제거
    })
    $(subNav[i]).hover(function(e){},function(e){
      gnbHoverBarToZero();
      rollUpSnb();  // snb 네이게이션 숨기기
    });
  }

  for(let i = 0 ; i< rnbList.length ; i++){
    $(rnbList[i]).hover(function(event){
      changeRnbColorOn(i);
    },
    function(event){
      changeRnbColorOff(i);
    })
  }

  loginBtn.addEventListener("click", function(e){
    loginStateChange();
    changeMobileTicketTypeFromLogin(loginBtn.dataset.login);
  })
  mobileLoginBtn.addEventListener("click", function(e){
    loginStateChange();
    changeMobileTicketTypeFromLogin(loginBtn.dataset.login);
  })

  searchButton.addEventListener("click", function(e){
    toggleSearchBar();
  })
  searchBarCloseButton.addEventListener("click", function(e){
    toggleSearchBar();
  })
  mobileSearchButton.addEventListener("click", function(e){
    toggleMobileSearchBar();
  })
  mobileSearchBarCloseButton.addEventListener("click", function(e){
    toggleMobileSearchBar();
  })
  /* ================== */

  /* 초기화 */
  changeMobileTicketTypeFromLogin(loginBtn.dataset.login);
})
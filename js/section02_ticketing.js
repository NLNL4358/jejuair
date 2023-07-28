$(document).ready(function(){
  /* 변수 선언*/
let quickMenu = document.querySelectorAll(".quick_menu");  /* 퀵메뉴 ( 항공권 예약, 모바일 탑승권, 출도착 조회) */
let quickMenuWrap = document.querySelectorAll(".quick_menu_contents"); /* 퀵메뉴 메인 영역 */
let ticketingType = document.querySelectorAll(".ticketingSelect_wrap .ticketing_type");  /* 티켓 타입 (왕복, 평도, 다구간) */
let changeCityButton = document.querySelector(".ticketingSelect_wrap #change_city"); /* 출발지와 도착지 변경 */

  /* 출발지 */
let departCityContinentList = document.querySelectorAll(".ticketingSelect_wrap .depart_city_select_wrap .continent_list");
let departCityButton = document.querySelector(".ticketingSelect_wrap .depart_city_button"); /* 출발지 버튼*/
let departCitySelectWrap = document.querySelector(".ticketingSelect_wrap .depart_city_select_wrap"); /* 출발지 선택 WRAP */
let departCityCloseButton = document.querySelector(".ticketingSelect_wrap .depart_city_select_name .close_button"); /* 출발지 x버튼 */
let departCityText = document.querySelector(".ticketingSelect_wrap #depart_city_text"); /* 선택된 출발지 지역 */
let departCityStationList = document.querySelectorAll(".ticketingSelect_wrap .depart_city_select_wrap .station_li"); /* 출발지 각 지역 */


  /* 도착지 */
let arriveCityContinentList = document.querySelectorAll(".ticketingSelect_wrap .arrive_city_select_wrap .continent_list");
let arriveCityButton = document.querySelector(".ticketingSelect_wrap .arrive_city_button"); /* 도착지 버튼*/
let arriveCitySelectWrap = document.querySelector(".ticketingSelect_wrap .arrive_city_select_wrap"); /* 도착지 선택 WRAP */
let arriveCityCloseButton = document.querySelector(".ticketingSelect_wrap .arrive_city_select_name .close_button"); /* 도착지 x버튼 */
let arriveCityText = document.querySelector(".ticketingSelect_wrap #arrive_city_text"); /* 도착지 출발지 지역 */
let arriveCityStationList = document.querySelectorAll(".ticketingSelect_wrap .arrive_city_select_wrap .station_li"); /* 도착지 각 지역 */



/* 모바일 탑승권  */
let mobileTicketInputs = document.querySelectorAll(".users_state.not_logined input");
let reservationSearchBtn = document.querySelector(".reservation_search_btn");


/* 헤더가 자꾸 눌려서 안눌리게끔 잠깐 끄는 용도 */
let headerDOM = document.querySelector(".header");



  /* ====== 함수 선언 ======= */
function clickQuickMenu(idx){  /* 퀵메뉴 선택 */
  for(let i = 0 ; i < quickMenu.length ; i++){
    quickMenu[i].classList.remove("selected");
    quickMenuWrap[i].classList.remove("selected");
  }
  quickMenu[idx].classList.add("selected");
  quickMenuWrap[idx].classList.add("selected");
}

function clickTicketingType(idx){ /* 티켓팅 타입 선택 */
  for(let i = 0 ; i < ticketingType.length ; i++){
    ticketingType[i].classList.remove("selected");
  }
  ticketingType[idx].classList.add("selected");
}

function clickReverseStation(){
  /* 출발지 도착지가 모두 selected 되었을 때만 가능하게 */
  if(arriveCityText.classList.contains("selected") && departCityText.classList.contains("selected")){
    const temp = arriveCityText.innerHTML;
    arriveCityText.innerHTML = departCityText.innerHTML;
    departCityText.innerHTML = temp;
  }
}

/* 출발지 함수 */
function clickDepartCityContinentList(idx){ /* 출발지 - 대륙선택 */
  for(let i = 0 ; i < departCityContinentList.length ; i++){
    departCityContinentList[i].classList.remove("selected");
  }
  departCityContinentList[idx].classList.add("selected");
}

function clickDepartCityButton(){
  departCitySelectWrap.classList.add("active");
}
function closeDepartCityWrap(){
  departCitySelectWrap.classList.remove("active");
}

function clickDepartStationList(stationName){
  departCityText.innerHTML = stationName;
}

function departCityTextSelected(){
  $("#depart_city_text").addClass("selected");
}





/* 도착지 함수 */
function clickArriveCityContinentList(idx){ /* 도착지 - 대륙선택 */
  for(let i = 0 ; i < departCityContinentList.length ; i++){
    arriveCityContinentList[i].classList.remove("selected");
  }
  arriveCityContinentList[idx].classList.add("selected");
}

function clickArriveCityButton(){
  arriveCitySelectWrap.classList.add("active");
}
function closeArriveCityWrap(){
  arriveCitySelectWrap.classList.remove("active");
}

function clickArriveStationList(stationName){
  arriveCityText.innerHTML = stationName;
}

function arriveCityTextSelected(){
  $("#arrive_city_text").addClass("selected");
}



function checkReservationSearchButtonIsDisabled(checkBool){
  let checkField = false;
  if(checkBool){
    alert("조회에 필요한 입력을 완료해 주세요.");
  }
  else{
    for(let i = 0 ; i < mobileTicketInputs.length ; i++){
     if($(mobileTicketInputs[i]).val() == ''){
      checkField = true;
     }
    }
    if(checkField){
      alert("입력이 누수된 곳이 있습니다.");
    }
    else{
      alert("[성공]모바일 탑승권 조회로 이동..->");
    }
  }
}
function reservationSearchBtnClassManager(){
  let checkAllInput = true;
  for(let j = 0; j < mobileTicketInputs.length ; j++){
    if(mobileTicketInputs[j].classList.contains("filled")){
    }
    else{
      checkAllInput = false;
      break;
    }
  }
  if(checkAllInput){
    reservationSearchBtn.classList.remove("disabled");
  }
}


/* 헤더 키고 끄기 */
function headerOnOff(turnOff){
  if(turnOff){
    /* 꺼라 */
    $(headerDOM).css({
      "pointerEvents" : "none",
      "zIndex" : "0",
    });
  }
  else{
    /* 켜라 */
    $(headerDOM).css({
      "pointerEvents" : "all",
      "zIndex" : "10"
    });
  }
}


  /* ====== 이벤트 리스너 ====== */
for(let i = 0 ; i < quickMenu.length ; i++){ /* 퀵메뉴 리스너 */
  quickMenu[i].addEventListener("click", function(e){
    clickQuickMenu(i);
    closeDepartCityWrap();
    closeArriveCityWrap();
  });
}

for(let i = 0 ; i < ticketingType.length ; i++){ /* 티켓팅 타입 리스너 */
  ticketingType[i].addEventListener("click", function(e){
    clickTicketingType(i);
  })
}

changeCityButton.addEventListener("click", function(e){
  clickReverseStation();
})

/* 출발지 이벤트 */
for(let i = 0 ; i < departCityContinentList.length ; i++){ /* 출발지 - 대륙선택 리스너 [ 대륙선택, 지역팝업] */
  departCityContinentList[i].addEventListener("mouseover", function(e){
    clickDepartCityContinentList(i);
  })
}

departCityButton.addEventListener("click", function(e){
  headerOnOff(true);
  clickDepartCityButton();
  closeArriveCityWrap();
})

departCityCloseButton.addEventListener("click", function(e){
  headerOnOff(false);
  closeDepartCityWrap();
})

for(let i = 0 ; i < departCityStationList.length ; i++){
  departCityStationList[i].addEventListener("click", function(e){
    headerOnOff(true);
    clickDepartStationList(this.dataset.stationname);
    closeDepartCityWrap();
    departCityTextSelected();
    clickArriveCityButton();
  })
}


/* 도착지 이벤트 */
for(let i = 0 ; i < arriveCityContinentList.length ; i++){ /* 도착지 - 대륙선택 리스너 [ 대륙선택, 지역팝업] */
  arriveCityContinentList[i].addEventListener("mouseover", function(e){
    clickArriveCityContinentList(i);
  })
}

arriveCityButton.addEventListener("click", function(e){
  headerOnOff(true);
  clickArriveCityButton();
  closeDepartCityWrap();
})

arriveCityCloseButton.addEventListener("click", function(e){
  closeArriveCityWrap();
  headerOnOff(false);
})
for(let i = 0 ; i < arriveCityStationList.length ; i++){
  arriveCityStationList[i].addEventListener("click", function(e){
    clickArriveStationList(this.dataset.stationname);
    closeArriveCityWrap();
    arriveCityTextSelected();
    headerOnOff(true);
  })
}

/* 모바일 탑승권 이벤트 */
for(let i = 0 ; i < mobileTicketInputs.length ; i++){
  $(mobileTicketInputs[i]).on("input", function(e){ /* input 입력시 */
    if($(mobileTicketInputs[i]).val() == ""){
      $(mobileTicketInputs[i]).removeClass("filled");
    }
    else{
      $(mobileTicketInputs[i]).addClass("filled");
      reservationSearchBtnClassManager();
    }
  })
}

/* 모바일 탑승권 조회 */
reservationSearchBtn.addEventListener("click", function(e){
  checkReservationSearchButtonIsDisabled(e.target.classList.contains("disabled"));
})






  /* ======= 초기화 ======= */
quickMenu[0].classList.add("selected");
quickMenuWrap[0].classList.add("selected"); 
ticketingType[0].classList.add("selected");
departCityContinentList[0].classList.add("selected");
})



/* swiper */
var swiper = new Swiper(".mobile_ticket_swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
$(document).ready(function(){
/* 출도착 조회 */

let changeCityButtonInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap #change_city"); /* 출발지와 도착지 변경 */

  /* 출발지 */
let departCityContinentListInquiries = document.querySelectorAll(".departure_and_arrival_inquiries_wrap .depart_city_select_wrap .continent_list");
let departCityButtonInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap .depart_city_button"); /* 출발지 버튼*/
let departCitySelectWrapInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap .depart_city_select_wrap"); /* 출발지 선택 WRAP */
let departCityCloseButtonInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap .depart_city_select_name .close_button"); /* 출발지 x버튼 */
let departCityTextInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap #depart_city_text_inquiries"); /* 선택된 출발지 지역 */
let departCityStationListInquiries = document.querySelectorAll(".departure_and_arrival_inquiries_wrap .depart_city_select_wrap .station_li"); /* 출발지 각 지역 */


  /* 도착지 */
let arriveCityContinentListInquiries = document.querySelectorAll(".departure_and_arrival_inquiries_wrap .arrive_city_select_wrap .continent_list");
let arriveCityButtonInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap .arrive_city_button"); /* 도착지 버튼*/
let arriveCitySelectWrapInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap .arrive_city_select_wrap"); /* 도착지 선택 WRAP */
let arriveCityCloseButtonInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap .arrive_city_select_name .close_button"); /* 도착지 x버튼 */
let arriveCityTextInquiries = document.querySelector(".departure_and_arrival_inquiries_wrap #arrive_city_text_inquiries"); /* 도착지 출발지 지역 */
let arriveCityStationListInquiries = document.querySelectorAll(".departure_and_arrival_inquiries_wrap .arrive_city_select_wrap .station_li"); /* 도착지 각 지역 */


/* 구간 조회 & 편명 조회 */
let inquiriesNoticeRadio = document.querySelectorAll(".inquiries_notice_radio_wrap input");
let inquiriesSearchFlight = document.querySelectorAll(".departure_and_arrival_inquiries_wrap .search_flight");



/* 함수 */

/* 출발지 함수 */
function clickDepartCityContinentList(idx){ /* 출발지 - 대륙선택 */
  for(let i = 0 ; i < departCityContinentListInquiries.length ; i++){
    departCityContinentListInquiries[i].classList.remove("selected");
  }
  departCityContinentListInquiries[idx].classList.add("selected");
}

function clickDepartCityButtonInquiries(){
  departCitySelectWrapInquiries.classList.add("active");
}

function closeDepartCityWrapInquiries(){
  departCitySelectWrapInquiries.classList.remove("active");
}

function departCityTextSelectedInquiries(){
  $("#depart_city_text_inquiries").addClass("selected");
}

function clickDepartStationListInquiries(stationName){
  departCityTextInquiries.innerHTML = stationName;
}


/* 도착지 함수 */
function clickArriveCityContinentListInquiries(idx){ /* 도착지 - 대륙선택 */
  for(let i = 0 ; i < departCityContinentListInquiries.length ; i++){
    arriveCityContinentListInquiries[i].classList.remove("selected");
  }
  arriveCityContinentListInquiries[idx].classList.add("selected");
}

function clickArriveCityButtonInquiries(){
  arriveCitySelectWrapInquiries.classList.add("active");
}
function closeArriveCityWrapInquiries(){
  arriveCitySelectWrapInquiries.classList.remove("active");
}

function clickArriveStationListInquiries(stationName){
  arriveCityTextInquiries.innerHTML = stationName;
}

function arriveCityTextSelectedInquiries(){
  $("#arrive_city_text_inquiries").addClass("selected");
}


/* 구간, 편명 on/off */
function changeSearchType(idx){
  for(let i = 0 ; i < inquiriesNoticeRadio.length ; i++){
    inquiriesSearchFlight[i].classList.remove("selected");
  }
  inquiriesSearchFlight[idx].classList.add("selected");
}






/* 이벤트 */

/* 출발지 */
departCityButtonInquiries.addEventListener("click", function(e){
  clickDepartCityButtonInquiries();
  closeArriveCityWrapInquiries();
})

departCityCloseButtonInquiries.addEventListener("click", function(e){
  closeDepartCityWrapInquiries();
})

for(let i = 0 ; i < departCityStationListInquiries.length ; i++){
  departCityStationListInquiries[i].addEventListener("click", function(e){
    clickDepartStationListInquiries(this.dataset.stationname);
    closeDepartCityWrapInquiries();
    departCityTextSelectedInquiries();
    clickArriveCityButtonInquiries();
  })
}

/* 도착지 */

/* 도착지 이벤트 */
for(let i = 0 ; i < arriveCityContinentListInquiries.length ; i++){ /* 도착지 - 대륙선택 리스너 [ 대륙선택, 지역팝업] */
  arriveCityContinentListInquiries[i].addEventListener("mouseover", function(e){
    clickArriveCityContinentListInquiries(i);
  })
}

arriveCityButtonInquiries.addEventListener("click", function(e){
  clickArriveCityButtonInquiries();
  closeDepartCityWrapInquiries();
})

arriveCityCloseButtonInquiries.addEventListener("click", function(e){
  closeArriveCityWrapInquiries();
})
for(let i = 0 ; i < arriveCityStationListInquiries.length ; i++){
  arriveCityStationListInquiries[i].addEventListener("click", function(e){
    clickArriveStationListInquiries(this.dataset.stationname);
    closeArriveCityWrapInquiries();
    arriveCityTextSelectedInquiries();
  })
}

/* 구간 편명 이벤트 */
for(let i = 0 ; i< inquiriesNoticeRadio.length ; i++){
  $(inquiriesNoticeRadio[i]).change(function(event){
    changeSearchType(i);
  })
}




/* 초기화 */
departCityContinentListInquiries[0].classList.add("selected");
inquiriesSearchFlight[0].classList.add("selected");
});
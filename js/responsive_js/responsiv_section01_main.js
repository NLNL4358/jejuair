$(document).ready(function(e){

  /* 변수 */
  let section01Main = $(".section01_main");
  let bannerMain = document.querySelectorAll(".banner_main");

  let docElem = document.documentElement;
  let scrollTop = docElem.scrollTop;

  let uiDatepickerDiv = document.querySelector("#ui-datepicker-div");

  /* 함수 */
  function datePickerMove(margin){
    if(window.innerWidth < 1280){
      $(uiDatepickerDiv).css("marginTop", margin);
    }
    else{
      $(uiDatepickerDiv).css("marginTop", "0px");
    }
  }

  /* 이벤트 */
  window.addEventListener("scroll", function(e){
    datePickerMove(scrollTop = docElem.scrollTop);
  })

  /* 초기화 */
  $(uiDatepickerDiv).css("marginTop", scrollTop);
})
/* 
  1. gap section의 높이를 알아야함
  2. 휠 스크롤 될때 동작할 함수를 생성
  2-1. gap section의 높이보다 높을때(지나칠때) && section05는 지나가면 안됨 
  2-2. 그 차이만큼 gap_section의 wrap에 margin-top 해주어야함 **wrap움직임
  2-3. 구름 png_cloud 는 밑으로 살짝 내려가게끔 margin-top을 스크롤에 0.x 곱해서 어느정도만 내려가게
  2-4. 뒷구름 cloud_back 은 스크롤될때 left 0 에서 -> left -50% 까지 가도록
*/


$(document).ready(function(){
  /* 변수 */
  let docElem = document.documentElement;
  let scrollTop = docElem.scrollTop;
  let gapSectionWrap = document.querySelector(".gap_img_wrap");
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth;
  let gapSectionStartPoint = document.querySelector(".gap_section").offsetTop;

  let sectionFive = document.querySelector(".section05_additional_service");
  let sectionFivesHeight = sectionFive.offsetTop - screenHeight;


  let gapSectionHeight = document.querySelector(".gap_section").offsetHeight; /* gap section의 높이 */
  let leftOnePXPercent = 50 / gapSectionHeight; /* 1px당 left 몇% 움직이는값 */
  let leftPercent ; /* 스크롤이 gap section 에서 된만큼(px) * leftOnePXPercent 해주면 50%까지 감 */
  let cloudBack = document.querySelector(".cloud_back");
  let pngCloud = document.querySelectorAll(".png_cloud");
  let planeWing = document.querySelector(".plane_wing");

  /* 함수 */
  function setScrollTop(){
    scrollTop = docElem.scrollTop;
  }
  // function setMarginToWrap(){  position을 fixed로 사용하여 안쓰게됨 --> 페럴렉스화 시킴
  //   $(gapSectionWrap).css(
  //     "top" , `${scrollTop - gapSectionStartPoint}px`
  //   );
  // }
  function moveBackGround(){
    leftPercent = (scrollTop - gapSectionStartPoint) * leftOnePXPercent;
    $(cloudBack).css(
      "left" , `${-leftPercent}%`
    )
  }
  function moveCloud(){
    for(i = 0 ; i < pngCloud.length ; i++)
    {
      $(pngCloud[i]).css(
        "bottom" , `${-leftPercent}%`
      )
    }
  }
  function movePlane(){
    $(planeWing).css(
      {
      "left" : `${leftPercent * 0.5}%`,
      "bottom" : `${leftPercent * 0.2 - 10}%`
      }
    )
  }

  function resetGapSection(){
    docElem = document.documentElement;
    screenHeight = window.innerHeight;
    gapSectionStartPoint = document.querySelector(".gap_section").offsetTop;
    sectionFivesHeight = sectionFive.offsetTop - screenHeight;
  }

  /* 이벤트 리스너 */
  document.addEventListener("scroll", function(e){
    // resetGapSection();
    setScrollTop();
    if(scrollTop >= gapSectionStartPoint && scrollTop <= sectionFivesHeight)
    {
      //setMarginToWrap();
      moveBackGround();
      moveCloud();
      movePlane();
    }
  })
  window.addEventListener(`resize`, function() { /* 리사이즈 될 때 다시 초기화 필요 */
    resetGapSection();
  });
  
  
  /* 초기화 */
  scrollTop = docElem.scrollTop;
  setScrollTop();
  if(scrollTop >= gapSectionStartPoint && scrollTop <= sectionFivesHeight)
  {
    //setMarginToWrap();
    moveBackGround();
    moveCloud();
    movePlane();
  }
}
)
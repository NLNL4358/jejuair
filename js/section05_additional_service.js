$(document).ready(function(){
  /* 변수 */
  let additionalServiceContents = document.querySelectorAll(".additional_service_contents");

  /* 함수 */
  function additionalServiceContentsHover(idx, isClear){
    for(let i = 0 ; i < additionalServiceContents.length ; i++){
      additionalServiceContents[i].classList.remove("focus");
    }
    if(isClear){return}
    additionalServiceContents[idx].classList.add("focus");
  }
  

  /* 이벤트 리스너 */
  for(let i = 0 ; i < additionalServiceContents.length ; i++){

    $(additionalServiceContents[i]).hover(function(e){
      additionalServiceContentsHover(i, false);
    },function(e){
      additionalServiceContentsHover(i, true);
    }
    )
  }

  /* 초기화 */
})


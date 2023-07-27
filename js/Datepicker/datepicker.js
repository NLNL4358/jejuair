$( function() {
  /* 유동적으로 보이는 달의 갯수를 조절 */
  let numberOfMonthDynamically;

  
  /* 초기화 */
  changeCalenderToMobile();


  $(".datepicker").datepicker({ dateFormat: "yy.mm.dd" }); /* 날자 형식을 년.월.일 로 바꾸기위함 */

  var dateFormat = "yy.mm.dd",  /* 위의 dateFormat과 동일하게 맞춰줌 */
    departDaySelectDatepicker = $(".depart_day_select_datepicker").datepicker({})
    .on( "change", function() {
      setClass( this );
    }),
    flightStationSearchDatepicker = $(".flight_station_search_datepicker").datepicker({})
    .on( "change", function() {
      setClass( this );
    }),
    from = $( "#from" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        // numberOfMonths: 2
        numberOfMonths: numberOfMonthDynamically /* 유동적으로 생성 */
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      // numberOfMonths: 2
      numberOfMonths: numberOfMonthDynamically
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

    /* 추가 출도착 조회*/
    fromInquiries = $( "#from_inquiries" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      // numberOfMonths: 2
      numberOfMonths: numberOfMonthDynamically

    })
    .on( "change", function() {
      toInquiries.datepicker( "option", "minDate", getDate( this ) );
    }),
    toInquiries = $( "#to_inquiries" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      // numberOfMonths: 2
      numberOfMonths: numberOfMonthDynamically

    })
    .on( "change", function() {
      fromInquiries.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      element.classList.add("selected");
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
  
  function setClass( element ) {
    try {
      element.classList.add("filled");
    }
    catch(error){
      alert("캘린더 오류.. 다시시도해주세요.");
    }
    return ;
  }


  /* 이벤트 */
  function changeCalenderToMobile(){
    /* 윈도우 사이즈에 의해 달이 2개에서 1개로 보여야함 */
    if(window.innerWidth < 520) /* 520px 보다 낮으면 */
    {
      console.log("제발");
      /* 유동적으로 1 혹은 2를 정해줌 */
      numberOfMonthDynamically = 1;

      /* resize될때마다 dynamic 하게 변화하도록 직접 datepicker에 넣어주는 문법도 넣어줌 */
      $( "#datepicker" ).datepicker( "option", "numberOfMonths", 1 );
    }
    else{
      numberOfMonthDynamically = 2;
      $( "#datepicker" ).datepicker( "option", "numberOfMonths", 2 );
    }
  }

  /* 함수 */
  window.addEventListener("resize", function(e){
    changeCalenderToMobile();
  })



} );

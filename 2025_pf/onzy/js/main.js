$(function() {
    var prevScrollTop = 0;
  
    document.addEventListener("scroll", function(){
        
        var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장
        
        if (nowScrollTop > prevScrollTop){ $('.header').addClass('active'); } 
        // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
        else { $('.header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
        prevScrollTop < nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장
  
    });
  
  });

// 헤더 메뉴바 스크롤시 변화
$(window).width(function() {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 1;

  $(window).scroll(function(event) {
     didScroll = true;
  });

  setInterval(function() {
     if (didScroll) {
        hasScrolled();
        didScroll = false;
     }
  }, 100);

  function hasScrolled() {
     var st = $(this).scrollTop();

     // Make sure they scroll more than delta
     if (Math.abs(lastScrollTop - st) <= delta)
        return;

     // If they scrolled down and are past the navbar, add class .nav-up.
     // This is necessary so you never see what is "behind" the navbar.
     if (st < 0) {
        $('.mobile-only').removeClass('nav-down').removeClass('nav-up').removeClass('nav-hover-out');
     } else if (st > lastScrollTop && st > 0) {
        // Scroll Down
        $('.mobile-only').removeClass('nav-down').addClass('nav-up').removeClass('nav-hover-out');
     } else {
        // Scroll Up
        $('.mobile-only').removeClass('nav-up').addClass('nav-down').removeClass('nav-hover-out');
     }
     lastScrollTop = st;
  }
});

$(function (){
  $('#sec02 .youtube .slider').slick({
    arrows:false,
    slidesToShow:2,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive: [
      {  
        breakpoint: 768,
        settings: {
           slidesToShow:1,
        } 
      },
    ]
  });
  $('#sec02 .youtube .arrows i.xi-angle-left-thin').on('click', function(){
    $('#sec02 .youtube .slider').slick('slickPrev');
 });
 $('#sec02 .youtube .arrows i.xi-angle-right-thin').on('click', function(){
  $('#sec02 .youtube .slider').slick('slickNext');
});
});

$(function (){
  $('#sec02 .telecast .slider').slick({
    arrows:false,
    slidesToShow:2,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
    pauseOnFocus:false,
    responsive: [
      {  
        breakpoint: 768,
        settings: {
           slidesToShow:1,
        } 
      },
    ]
  });
  $('#sec02 .telecast .arrows i.xi-angle-left-thin').on('click', function(){
    $('#sec02 .telecast .slider').slick('slickPrev');
 });
 $('#sec02 .telecast .arrows i.xi-angle-right-thin').on('click', function(){
  $('#sec02 .telecast .slider').slick('slickNext');
});
});

$(function(){
var contentSlider01=$(".txt_slider").slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed:0,
  //pauseOnHover:false,
  pauseOnFocus:false,
  dots:false,
  speed:10000,
  centerMode: true,
  variableWidth: true,
  cssEase:"linear",
}); 
var contentItem=$(".txt_slider");
contentItem.eq(3).addClass("on")
contentSlider01.on("afterChange", function(event,slick,current){
  contentItem.eq(current+3).addClass("on").siblings().removeClass("on");
});
});


$(function(){
  $('.notice_link').slick({
      arrows:false,
      autoplay:true,
      pauseOnHover:false,
      vertical:true,
  });
 
  $('#notice .slider_option .xi-angle-down').on('click', function(){
      $('.notice_link').slick('slickPrev');
 });
  $('#notice .slider_option .xi-angle-up').on('click', function(){
      $('.notice_link').slick('slickNext');
  });
  $('.notice_link').on("afterChange", function(event,slick,current){
     $("#notice .slider_option span").text( (current+1)+ "/"+slick.slideCount)
 });

  // 	이미지 클릭시 해당 1번 이미지 모달
  $("#notice .01").click(function() {
      $(".modal").show();
      // 해당 이미지 가겨오기
      var imgSrc = $(this).children("img").attr("src");
      var imgAlt = $(this).children("img").attr("alt");
      $(".modalBox img").attr("src", imgSrc);
      $(".modalBox img").attr("alt", imgAlt);
  
      // 해당 이미지 텍스트 가져오기
      // var imgTit =  $(this).children("p").text();
      // $(".modalBox p").text(imgTit);
  
      // 해당 이미지에 alt값을 가져와 제목으로
      $(".modalBox p").text(imgAlt);
  });
  
  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal button").click(function() {
      $(".modal").hide();
  });
  
  //.modal밖에 클릭시 닫힘
  $(".modal").click(function(e) {
      if (e.target.className != "modal") {
          return false;
      } else {
          $(".modal").hide();
      }
  });
  // 	이미지 클릭시 해당 2번 이미지 모달
  $("#notice .02").click(function() {
      $(".modal2").show();
      // 해당 이미지 가겨오기
      var imgSrc = $(this).children("img").attr("src");
      var imgAlt = $(this).children("img").attr("alt");
      $(".modalBox2 img").attr("src", imgSrc);
      $(".modalBox2 img").attr("alt", imgAlt);
  
      // 해당 이미지 텍스트 가져오기
      // var imgTit =  $(this).children("p").text();
      // $(".modalBox p").text(imgTit);
  
      // 해당 이미지에 alt값을 가져와 제목으로
      $(".modalBox2 p").text(imgAlt);
  });
  
  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal2 button").click(function() {
      $(".modal2").hide();
  });
  
  //.modal밖에 클릭시 닫힘
  $(".modal2").click(function(e) {
      if (e.target.className != "modal2") {
          return false;
      } else {
          $(".modal2").hide();
      }
  });
  // 	이미지 클릭시 해당 3번 이미지 모달
  $("#notice .03").click(function() {
      $(".modal3").show();
      // 해당 이미지 가겨오기
      var imgSrc = $(this).children("img").attr("src");
      var imgAlt = $(this).children("img").attr("alt");
      $(".modalBox3 img").attr("src", imgSrc);
      $(".modalBox3 img").attr("alt", imgAlt);
  
      // 해당 이미지 텍스트 가져오기
      // var imgTit =  $(this).children("p").text();
      // $(".modalBox p").text(imgTit);
  
      // 해당 이미지에 alt값을 가져와 제목으로
      $(".modalBox3 p").text(imgAlt);
  });
  
  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal3 button").click(function() {
      $(".modal3").hide();
  });
  
  //.modal밖에 클릭시 닫힘
  $(".modal3").click(function(e) {
      if (e.target.className != "modal3") {
          return false;
      } else {
          $(".modal3").hide();
      }
  });
  // 	이미지 클릭시 해당 4번 이미지 모달
  $("#notice .04").click(function() {
      $(".modal4").show();
      // 해당 이미지 가겨오기
      var imgSrc = $(this).children("img").attr("src");
      var imgAlt = $(this).children("img").attr("alt");
      $(".modalBox4 img").attr("src", imgSrc);
      $(".modalBox4 img").attr("alt", imgAlt);
  
      // 해당 이미지 텍스트 가져오기
      // var imgTit =  $(this).children("p").text();
      // $(".modalBox p").text(imgTit);
  
      // 해당 이미지에 alt값을 가져와 제목으로
      $(".modalBox4 p").text(imgAlt);
  });
  
  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal4 button").click(function() {
      $(".modal4").hide();
  });
  
  //.modal밖에 클릭시 닫힘
  $(".modal4").click(function(e) {
      if (e.target.className != "modal4") {
          return false;
      } else {
          $(".modal4").hide();
      }
  });

   // 이미지 클릭시 해당 5번 이미지 모달
      $("#notice .05").click(function() {
          $(".modal5").show();
          // 해당 이미지 가겨오기
          var imgSrc = $(this).children("img").attr("src");
          var imgAlt = $(this).children("img").attr("alt");
          $(".modalBox5 img").attr("src", imgSrc);
          $(".modalBox5 img").attr("alt", imgAlt);
      
          // 해당 이미지 텍스트 가져오기
          // var imgTit =  $(this).children("p").text();
          // $(".modalBox p").text(imgTit);
      
          // 해당 이미지에 alt값을 가져와 제목으로
          $(".modalBox5 p").text(imgAlt);
      });
      
      //.modal안에 button을 클릭하면 .modal닫기
      $(".modal5 button").click(function() {
          $(".modal5").hide();
      });
      
      //.modal밖에 클릭시 닫힘
      $(".modal5").click(function(e) {
          if (e.target.className != "modal5") {
              return false;
          } else {
              $(".modal5").hide();
          }
      });

           // 이미지 클릭시 해당 5번 이미지 모달
      $("#notice .05").click(function() {
          $(".modal5").show();
          // 해당 이미지 가겨오기
          var imgSrc = $(this).children("img").attr("src");
          var imgAlt = $(this).children("img").attr("alt");
          $(".modalBox5 img").attr("src", imgSrc);
          $(".modalBox5 img").attr("alt", imgAlt);
      
          // 해당 이미지 텍스트 가져오기
          // var imgTit =  $(this).children("p").text();
          // $(".modalBox p").text(imgTit);
      
          // 해당 이미지에 alt값을 가져와 제목으로
          $(".modalBox5 p").text(imgAlt);
      });
      
      //.modal안에 button을 클릭하면 .modal닫기
      $(".modal5 button").click(function() {
          $(".modal5").hide();
      });
      
      //.modal밖에 클릭시 닫힘
      $(".modal5").click(function(e) {
          if (e.target.className != "modal5") {
              return false;
          } else {
              $(".modal5").hide();
          }
      });

   // 이미지 클릭시 해당 6번 이미지 모달
   $("#notice .06").click(function() {
      $(".modal6").show();
      // 해당 이미지 가겨오기
      var imgSrc = $(this).children("img").attr("src");
      var imgAlt = $(this).children("img").attr("alt");
      $(".modalBox6 img").attr("src", imgSrc);
      $(".modalBox6 img").attr("alt", imgAlt);
  
      // 해당 이미지 텍스트 가져오기
      // var imgTit =  $(this).children("p").text();
      // $(".modalBox p").text(imgTit);
  
      // 해당 이미지에 alt값을 가져와 제목으로
      $(".modalBox6 p").text(imgAlt);
  });
  
  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal6 button").click(function() {
      $(".modal6").hide();
  });
  
  //.modal밖에 클릭시 닫힘
  $(".modal6").click(function(e) {
      if (e.target.className != "modal6") {
          return false;
      } else {
          $(".modal6").hide();
      }
  });

       // 이미지 클릭시 해당 7번 이미지 모달
       $("#notice .07").click(function() {
          $(".modal7").show();
          // 해당 이미지 가겨오기
          var imgSrc = $(this).children("img").attr("src");
          var imgAlt = $(this).children("img").attr("alt");
          $(".modalBox6 img").attr("src", imgSrc);
          $(".modalBox6 img").attr("alt", imgAlt);
      
          // 해당 이미지 텍스트 가져오기
          // var imgTit =  $(this).children("p").text();
          // $(".modalBox p").text(imgTit);
      
          // 해당 이미지에 alt값을 가져와 제목으로
          $(".modalBox7 p").text(imgAlt);
      });
      
      //.modal안에 button을 클릭하면 .modal닫기
      $(".modal7 button").click(function() {
          $(".modal7").hide();
      });
      
      //.modal밖에 클릭시 닫힘
      $(".modal7").click(function(e) {
          if (e.target.className != "modal7") {
              return false;
          } else {
              $(".modal7").hide();
          }
      });


});
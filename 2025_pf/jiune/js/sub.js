/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
  $(window).resize(ActiveOnVisible__initOffset);
  ActiveOnVisible__initOffset();

  $(window).scroll(ActiveOnVisible__checkAndActive);
  ActiveOnVisible__checkAndActive();
};

function ActiveOnVisible__initOffset() {
  $('.active-on-visible').each(function(index, node) {
      var $node = $(node);

      var offsetTop = $node.offset().top;
      $node.attr('data-active-on-visible-offsetTop', offsetTop);

      if ( !$node.attr('data-active-on-visible-diff-y') ) {
          $node.attr('data-active-on-visible-diff-y', '0');
      }

      if ( !$node.attr('data-active-on-visible-delay') ) {
          $node.attr('data-active-on-visible-delay', '0');
      }
  });

  ActiveOnVisible__checkAndActive();
};

function ActiveOnVisible__checkAndActive() { 
  $('.active-on-visible:not(.actived)').each(function(index, node) {
      var $node = $(node);

      var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
      var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
      var delay = parseInt($node.attr('data-active-on-visible-delay'));

      var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

      if ( $(window).scrollTop() + $(window).height() + diffY > offsetTop ) {
          $node.addClass('actived');

          setTimeout(function() {
              $node.addClass('active');
              if ( window[callbackFuncName] ) {
                  window[callbackFuncName]($node);
              }
          }, delay);
      }
  });
};

$(function() {
  ActiveOnVisible__init();
})
/* 발견되면 활성화시키는 라이브러리 끝 */
function Circle__run() {
  $(".second.circle").each(function(index, node) {
      var perNum = $(node).attr('circleProgress');
      
      $(this).circleProgress({
          value: perNum / 200,
          size: 200,
          startAngle: 300,
          thickness: 20,
          fill: {
              gradient: ["#df0505", "#df0505"],
              gradientAngle: Math.PI / 2
          },
          animation: {
              duration: 2200,
              easing: "swing"
          },
          lineCap: "butt",
  
      }).on('circle-animation-progress', function (event, progress) {
          $(this).find('.circle-percent').html('<i>약 </i>' + Math.round(perNum * progress) + '<i>%</i>');
      });
  });
  $('#circle').circleProgress({
    size: 1000
});
}

$(function() {
    $('.about03 .sec_01 .slider').slick({
        dots: true,
        arrows:false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 7,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        responsive: [ // 반응형 웹 구현 옵션
        {  
          breakpoint: 960, //화면 사이즈 960px
          settings: {
            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
            slidesToShow: 7,
            slidesToScroll: 7,
          } 
        },
        { 
          breakpoint: 768, //화면 사이즈 768px
          settings: {	
            //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
            slidesToShow: 3,
            slidesToScroll: 3,
          } 
        }
      ]
    });
});

$(function() {
  $('.eq>.container>.f_wrap .slider').slick({
      arrows:false,
      infinite: true,
      slidesToShow: 3,
      autoplay:true,
      autoplaySpeed:2000,
      pauseOnHover:false,
      pauseOnFocus:false,
      responsive: [ // 반응형 웹 구현 옵션
      { 
        breakpoint: 768, //화면 사이즈 768px
        settings: {	
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        } 
      }
    ]
    
  });
  $('.eq .arrows i.xi-angle-left-thin').on('click', function(){
    $('.eq .slider').slick('slickPrev');
 });
 $('.eq .arrows i.xi-angle-right-thin').on('click', function(){
  $('.eq .slider').slick('slickNext');
});
});
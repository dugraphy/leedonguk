$(function(){
    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        // console.log(sct);
        if(sct>0) {
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on')
        };
    });

    

    $('.mopen').on('click', function(){
        $('.gnb').toggleClass('on');
      });





      var Rsd = $('#section01>.container');

      var slickOptions = {
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:true,
         autoplaySpeed:2000,
         centerMode:true,
         dots:false,
         arrows:false
      };
      
      $(window).on('load resize', function() {
         if($(window).width() > 768) {
            Rsd.slick('unslick');
         }else{
            Rsd.not('.slick-initialized').slick(slickOptions);
         }
      });


      $('.element figure').on('click', function(){
        $('.element').toggleClass('on');
      });
      


    
      $(".sub_slide").slick({
          arrows:false,
          pauseOnHover:false,
          infinite: true,
          slidesToShow: 1,

     });

     $(".sub_slide").eq(0).slick("slickPlay");
     $("#section03 li").on("click", function(){
         let idx=$(this).index();
         $(this).addClass("on").siblings().removeClass("on");
         $(".sub_slide").eq(idx).addClass("on").siblings().removeClass("on");
         $(".sub_slide").eq(idx).slick("slickPlay").siblings().slick("slickPause")
     });




    $('.notice_link').slick({
         arrows:false,
         autoplay:true,
         pauseOnHover:false,
         vertical:true,
     });
    
     $('#notice i.xi-angle-left-thin').on('click', function(){
         $('.notice_link').slick('slickPrev');
     });
     $('#notice i.xi-angle-right-thin').on('click', function(){
         $('.notice_link').slick('slickNext');
     });
     $('.notice_link').on("afterChange", function(event,slick,current){
        $("#notice .slider_option span").text( (current+1)+ "/"+slick.slideCount)
    
    });

});


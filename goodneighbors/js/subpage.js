$(function(){
    //----------------------------------------
    
    
    $('.step01>li>a').on('click', function(){
       if($(window).width() < 769) {
       
       $(this).next().slideToggle();
       $(this).parent().siblings().find('.step02').slideUp();
       }
     
     });
    
     
     $(window).on('resize', function(){
      $('.step02').removeAttr('style')
    })
     

    

    
    $('.tab_menu>li').on('click', function(){
      var $this= $(this);
      var idx=$(this).index();
      $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on');
      $this.addClass('on').siblings().removeClass('on');
  })
    
    
    //----------------------------------------
    });
    
    
    
    
    
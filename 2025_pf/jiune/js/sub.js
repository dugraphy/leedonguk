$(function() {
const ctx = document.getElementById('donutChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['2%', '98%'],
        datasets: [{
            data: [2, 98],
            backgroundColor: ['red', '#e0e0e0'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                display: false
            }
        }
    }
  });
});

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
  $('.eq .arrows i.left').on('click', function(){
    $('.eq .slider').slick('slickPrev');
 });
 $('.eq .arrows i.right').on('click', function(){
  $('.eq .slider').slick('slickNext');
});
});
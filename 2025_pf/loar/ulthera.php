<? include ("../../inc/common.php"); //doctype 및 html 선언 ?>
</head>

<body>
<? include ("../../inc/b_header.php"); //header ?>
<div>
    <div class="ulthera sub_laser" id="pc_img">
        <img src="/images/sub/laser/ulthera_01.jpg">
        <a href="http://merz.co.kr/brand/ulthera#certificate" target="_blank"><img src="/images/sub/laser/ulthera_02.jpg"></a>
        <img src="/images/sub/laser/ulthera_03.jpg">
        <video muted loop autoplay playsinline style="display: block; width: 1150px; margin: 0 auto; padding: 100px 0;">
            <source src="/images/sub/laser/ulthera_video.mp4"/>
        </video>
        <img src="/images/sub/laser/ulthera_04.jpg">
        <a href="https://loarclinic.com/sub/event/08_lifting.php"><img src="/images/sub/laser/ulthera_05.jpg"></a>
    </div>
    <div class="ulthera sub_laser" id="mobile_img">
        <img src="/images/sub/laser/ulthera_mo_01.jpg">
        <a href="http://merz.co.kr/brand/ulthera#certificate" target="_blank"><img src="/images/sub/laser/ulthera_mo_02.jpg"></a>
        <img src="/images/sub/laser/ulthera_mo_03.jpg">
        <video muted loop autoplay playsinline style="display: block; width: 90%; margin: 0 auto; padding: 50px 0;">
            <source src="/images/sub/laser/ulthera_video.mp4"/>
        </video>
        <img src="/images/sub/laser/ulthera_mo_04.jpg">
        <a href="https://loarclinic.com/sub/event/08_lifting.php"><img src="/images/sub/laser/ulthera_mo_05.jpg"></a>
    </div>
    <style>
        .sub_laser img { width: 100%; max-width: 1903px;}
        #pc_img { display: block;}
        #mobile_img { display: none;}
        .pc_br {display: block;}
        .mo_br {display: none;}
        @media (max-width:768px){
            #pc_img {display: none;}
            #mobile_img {display: block;}
            .pc_br {display: none;}
            .mo_br {display: block;}
        }
    </style>

    <!-- 주의사항 -->
    <section id="caution">
        <div class="wrapper">
            <p class="text01">시술 후 주의사항</p>
            <span class="line"></span>
            <p class="text02">탄탄해진 라인을 보다 오래도록 유지하기 위한 시술 전후 지켜 주셔야 할 주의사항을 안내해 드립니다.</p>
            <div class="box">
                <p>시술 후 일시적으로 붉음증, 부기, 멍 등이 나타날 수 있습니다.</p>
                <p>시술 부위가 자극을 받을 정도로 누르거나 만지는 것은 자제해주세요. </p>
                <p>시술 후 일주일 정도 음주, 사우나, 과격한 운동은 피부에 열과 자극을<br class="pc_br">유발할 수 있어 삼가하시는 것이 좋습니다. </p>
                <p>피부가 일시적으로 건조해질 수 있으니 충분한 보습을 해주세요. </p>
            </div>
        </div>
    </section>
<!-- 진료 클리닉 서브 공통 -->
<? include ("../../inc/clinic_bottom_banner.php"); //clinic_bottom_banner ?>
</div>

<!-- 하단 공통 - 진료시간 -->
<? include ("../../inc/bottom_info.php"); //bottom_info ?>
<!-- 하단 공통 - 지도 -->
<? include ("../../inc/map.php"); //map ?>

<? include ("../../inc/footer.php"); //footer ?>

</body>
</html>
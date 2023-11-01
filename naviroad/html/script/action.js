//gnb
$(document).ready(function(){
            $('.gnb li, .lnb li').mouseover(function(){
                $(this).find('.lnb').stop().slideDown(300);
            })
            $('.gnb li, .lnb li').mouseleave(function(){
                $(this).find('.lnb').stop().slideUp(300);
            })
            
            })






//gnb_mobile

$(document).ready(function(){
        // $('.gnb_mobile_wrap').hide()             -> css에서 display none 줬기 때문에 js에서 지웠음
    
    
    $('.btn_hamberg').click(function(){
        $(this).stop().toggleClass('close');
        $('.btn_sns').toggle();
        $('.gnb_mobile_wrap').stop().fadeToggle();
        $('.gnb_mobile').stop().toggleClass('slide_left');
        $(this).stop().toggleClass('dontmove');
        $('.sns_box').removeClass('motion');
        $('.lnb').stop().slideUp(200)
        
        
//      $('.gnb_mobile_wrap').find('.overlay').click(function(){
//          $('.gnb_mobile_wrap').fadeOut();  
//          $('.gnb_mobile').removeClass('slide_left')  -> 밑에 오버레이 누르면 모바일랩 들어가게 하는 것과 같은 js 이어서 적은 것.
//        })
        
        $('.overlay').click(function(){
            $('.btn_hamberg').removeClass('close');
            $('.gnb_mobile_wrap').fadeOut();
            $('.gnb_mobile').removeClass('slide_left');
            $('.btn_hamberg').removeClass('close');
            $('.btn_hamberg').removeClass('dontmove');
            $('.btn_sns').show();
            $('.lnb').stop().slideUp(200)
        })
        
    })
    
    $('.gnb_mo li').click(function(){
        $('.lnb').stop().slideUp(200);     //클릭하면 lnb모두 접힘. 그 후 토글.
        $(this).find('.lnb').stop().slideToggle(200);
    })
    
    
    $('.btn_sns').click(function(){
        $('.sns_box').toggleClass('motion');
        $('.btn_sns').stop().toggleClass('dontmove');
        $('.btn_hamberg').toggle();
        $('.gnb_mobile_wrap').fadeOut();
        $('.gnb_mobile').removeClass('slide_left');
        $('.btn_hamberg').removeClass('dontmove');
        $('.btn_sns').toggleClass('fly');
    })
    
})









//var위치에 따라 지역변수가 되기도 하고 전역변수가 되기도 함. 전역변수일 경우 전체 영역에서 쓸 수 있음.
//지역변수는 일정 부분에서 씀. 한 지역(부분)에서만 쓸 수 있어서 지역변수


//속성 불러와서 적용시키기

$(document).ready(function(){
    $('.picture').each(function(){                      //each : 반복문
        var park = $(this).find('img').attr('alt');
        $(this).find('h3').text(park)
        
    })
   
})


$(document).ready(function(){
    
    var pathUrl = window.location.pathname;
    var thisUrl = pathUrl.substring(0,9);
    
    console.log(window.location.href)
    console.log(thisUrl)
    
})






//snb li에 active 클래스 알아서 부여하는 스크립트    ->  이거 밑에 active 붙은 애한테 원 위치 잡는 스크립트 줘야 제대로 실행됨.

$(document).ready(function(){
    
    $(".snb li [href]").each(function(){    //누른 링크주소와 현재 페이지 주소가 같으면
        if (window.location.href.indexOf(this.href) != -1){     // 여기서 this는 a 태그 뜻함.
            $(this).parent('li').addClass('active');  
        }
    });
})


//snb 원(circle) 위치 자동으로 잡기

$(document).ready(function(){
    if($('.circle').index() > 0) {
        var activePosition = $('.active').position().left;    // active가 붙은애의 위치의 왼쪽에서 떨어진 만큼의 값을 구해라.
        var liW = $('.active').width();         // active 클래스가 붙은 애의 width를 구해라
        var liWHalf = liW/2;                    // active 클래스 붙은애의 width의 절반값.
        var circleW = $('.circle').width();     // circle의 값이 바뀔 것을 대비해 circle의 너비를 구한다.
        var circleHalf = circleW/2;             // circle 너비의 절반값.
        $('.circle').css({left: liWHalf-circleHalf+activePosition})                // 50은 circle의 반지름
        
        $('.snb li').mouseover(function(){
            var snbPo = $(this).position().left;
            var snbW = $(this).width() 
            var snbWhalf = snbW/2
            $('.circle').stop().animate({left:snbPo+snbWhalf-circleHalf}, 800, 'easeOutBounce')
        })
        
        $('.snb li').mouseleave(function(){
            $('.circle').stop().animate({left: liWHalf-circleHalf+activePosition}, 800,'easeOutBounce')
        })
    }  
    
})


/*$(document).ready(function(){
    var liLength = $('.snb > ul > li').length;
    
    var liNanugi3 = liLength%3;
    
    if (liNanugi3 == 1)
        {
            $('.snb > ul > li:nth-child(1)').css({width:'100%'});
        }
                                                 
    else if (liNanugi3 == 2)
            {
                $('.snb > ul > li:nth-child(1)').css({width:'49.75%'});
                 $('.snb > ul > li:nth-child(2)').css({width:'49.75%'});
            }
})*/




////함수 만들어보기 = 명령어 = 프로그램
//
//function birth(){
//    var RBD = prompt('우리 렌의 생년월일은?','');
//    var Dap = 19951103;
//   
//    if(RBD == Dap){                      //if문
//       alert('정답입니다~');
//       }
//    else {
//        alert('땡땡땡');
//        birth();                //함수 안에 그 함수를 다시 불러오는 것 = 재귀함수
//    }
//}
//
//
//







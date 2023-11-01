/*
$(window).resize(function(){
    if( $(window).width() <= 1200 ) {
        alert('전체화면으로 보세요.')
    }
})


*/

$(document).ready(function(){

    $('#modal').hide();
    $('.detail').hide();
    
    $('.send_pu').hide();           //메일전송관련메세지창
     
    $('.gnb li').mouseover(function(){
        var GnbLiIndex = $('.gnb li').index(this);
        
        $(this).stop().animate({scale: '1.7', opacity:'1'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex-4).stop().animate({scale: '1', opacity:'0.3'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex-3).stop().animate({scale: '1', opacity:'0.3'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex-2).stop().animate({scale: '1', opacity:'0.3'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex-1).stop().animate({scale: '1.3', opacity:'0.6'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex+1).stop().animate({scale: '1.3', opacity:'0.6'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex+3).stop().animate({scale: '1', opacity:'0.3'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex+2).stop().animate({scale: '1', opacity:'0.3'},400,'easeOutQuint');
        $('.gnb li').eq(GnbLiIndex+4).stop().animate({scale: '1', opacity:'0.3'},400,'easeOutQuint');

    })

     $('.gnb li').mouseout(function(){
        $('.gnb li').stop().animate({scale: '1.0', opacity:'1'},100);
    
     })
  
    $('.gnb li').click(function(){
        var GLiIndex = $('.gnb li').index(this);
        var go_to = $(this).text();
        $('#'+go_to).addClass('left_lo');
        $('#'+go_to).siblings().removeClass('left_lo');



        if(GLiIndex == 0) {
            $('#Layer_1 path').attr('d','M272,256C416,167,379,0,379,0H0v1080h379c0,0,37-167-107-256s-108-143-80-172s105-71,105-114s-77-79-105-108 S128,345,272,256z');
        }
        if(GLiIndex == 1) {
            $('#Layer_1 path').attr('d','M272,256C416,0,0,0,100,0H0v1080h379c0,0,37-300-107-256s-150-143-80-172s105-71,105-114s-77-79-0-108 S128,345,272,256z');
        }
        if(GLiIndex == 2) {
            $('#Layer_1 path').attr('d','M272,256C416,0,100,0,50,0H0v1080h379c0,0,37-300-107-256s-0-143-80-172s105-71,50-114s-77-79-0-108 S128,345,272,256z');
        }
        if(GLiIndex == 3) {
            $('#Layer_1 path').attr('d','M272,256C416,0,0,200,0,0H0v1080h379c0,0,37-300-107-256s-150-143-80-172s105-71,105-114s-77-79-0-108 S128,345,272,256z');
        }
        if(GLiIndex == 4) {
            $('#Layer_1 path').attr('d','M272,256C416,0,379,0,379,0H0v1080h379c0,0,37-167-107-256s-0-143-80-172s105-71,105-114s-77-79-0-108 S128,345,272,256z');
        }
 
        
    })
    
    
    $('.work_list ul').mouseover(function(){
        $(this).find('.ex').fadeIn(500);
    })
    
     $('.work_list ul').mouseleave(function(){
        $(this).find('.ex').fadeOut(500);
    })
    
    $('.btn_detail').click(function(){
        var km = $(this).parents('.ex').next('.detail').html();
        $('#modal').fadeIn(500);
        $('#modal .cont').html(km)
        
    })
    
    $('.btn_close, .gnb li').click(function(){
        $('#modal').fadeOut(500);
        $('.detail').fadeOut(300);
    })
     
})



$(document).ready(function(){
    var webLeft= $('.webpage01').position().left;
    var landingLeft= $('.webpage08').position().left;
    console.log(landingLeft)
    var baLeft = $('.banner').position().left;
    var puLeft = $('.popup').position().left;
    
    $('.pin01').click(function(){
        $('.mywork').animate({scrollLeft: webLeft},300);
        
        return false;
    })
    $('.pin02').click(function(){
        $('.mywork').animate({scrollLeft: landingLeft+'px'},300);
        
        return false;
    })
    $('.pin03').click(function(){
        $('.mywork').animate({scrollLeft: baLeft+'px'},300);
        
        return false;
    })
    $('.pin04').click(function(){
        $('.mywork').animate({scrollLeft: puLeft+50+'px'},300);
        
        return false;
    })
     $(".mywork").mousewheel(function(event, delta) {
            var myworkLeft = this.scrollLeft;
         if( myworkLeft >= 0 && myworkLeft < landingLeft - 400) {
           $('.pin01').css({transform:'scale(1.2)'})
         }
         else {
             $('.pin01').css({transform:'scale(1.0)'})
         }
         
         if(myworkLeft >= landingLeft - 400 && myworkLeft < baLeft - 400) {
             $('.pin02').css({transform:'scale(1.2)'})
         }
         else {
             $('.pin02').css({transform:'scale(1.0)'})
         }
         if(myworkLeft >= baLeft - 400 && myworkLeft < puLeft - 400) {
             $('.pin03').css({transform:'scale(1.2)'})
         }
         else {
             $('.pin03').css({transform:'scale(1.0)'})
         }
         if(myworkLeft >= puLeft - 400) {
             $('.pin04').css({transform:'scale(1.2)'})
         }
         else {
             $('.pin04').css({transform:'scale(1.0)'})
         }
     })
    
    $('#WORKS > span').click(function(){
        $(this).css({transform:'scale(1.2)'});
        $(this).siblings('span').css({transform:'scale(1.0)'})
    })
    
})


$(document).ready(function(){
    
    $('.btn_detail').click(function(){
        
        for(var k = $('.opinion li').attr("data-text"); k < 4; k++) {
            console.log(k)
            var textValue = $('.opinion li').eq(k).find('p').text();
            console.log(textValue)
            for (var i = 0; i < textValue.length; i++) {
                var txt = textValue.charAt(i);
                console.log(txt)
                $('.opinion li').eq(k).append('<span>'+txt+'</span>').find('p').remove();
                $('.opinion li').eq(k).find('span').eq(i).delay(i*20).animate({opacity:'1'},1);
                }

        }
   
    })

})



$(function() {
       $(".mywork").mousewheel(function(event, delta) {
           this.scrollLeft -= (delta * 80);
           var myworkLeft = this.scrollLeft;
           event.preventDefault();
           if (myworkLeft >= $('.banner').position().left+1000) {
               $('.banner09').addClass('action');
           }
           else {
               $('.banner09').removeClass('action');
           }
       });
});



$(document).ready(function(){
    $('.gohome').click(function(){
        $('#HOME').find('span.flip').addClass('ani');
    })
    $('.gohome').siblings().click(function(){
        $('#HOME').find('span.flip').removeClass('ani');
    })
})








function validate() {
    /*   var re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;*/
       // 이메일이 적합한지 검사할 정규식

        var naMe = document.getElementById("input-name");   
        var mailAd = document.getElementById("input-email");
        var phoneNum = document.getElementById("input-subject")     
        var textCont = document.getElementById("input-message")
//        function closeM() {
//            $('.send_pu').fadeOut("fast");
//        }

       
        if(naMe.value=="") {
           alert("이름을 입력해 주세요");
           naMe.focus();
           return false;
        }
       
       
        if(mailAd.value=="") {
           alert("이메일 주소를 입력해 주세요");
           mailAd.focus();
           return false;
        }

        if(phoneNum.value=="") {
           alert("전화번호를 입력해 주세요");
           phoneNum.focus();
           return false;
        }
    

        if(textCont.value=="") {
           alert("내용을 입력해 주세요");
           textCont.focus();
           return false;
        }
    
        else {
            $('.send_pu').css({display:'block'})
//            $('.send_pu').fadeIn('fast');
//            setTimeout(closeM,3000);
            form.submit();
        }   
//    closeM();
    
   } 
    







$(document).ready(function(){
    
    window.onload = function(){
        setTimeout(function(){
            scrollTo(0,0);
        })
    }
     
    $('.gnb li').mouseover(function(){
        $(this).find('.lnb').stop().slideDown(300);
    });
    $('.gnb li').mouseleave(function(){
        $('.lnb').stop().slideUp(300);
    });
    
    
    $('#popup_img button.close').click(function(){
        $('#popup_img').hide();
    })
    

    

})


$(document).ready(function(){

    var docuH = $(document).height();
    var winH = $(window).height();
    var winW = $(window).width();
    
    var scrT = $(this).scrollTop()
     
       $(window).scroll(function(){
           
           var scrT = $(this).scrollTop();

            $('.scrollbar').css({width: scrT*winW/(docuH-winH)})

           
               if($(this).scrollTop() > 100) {
                $('header').addClass('action');
            }
       
             else {
             $('header').removeClass('action')
            }
       
       
       
      //컨텐츠 패럴렉스
       
        $('section').each(function(){
            var SectionTop = $(this).offset().top;
            
             if(scrT >= SectionTop - winH/1.2) {
                 $(this).stop().animate({opacity:'1', marginTop:'0'},500)
            }
            
             else {
                 $(this).stop().animate({opacity:'0', marginTop:'0'},500)
             }
            if(scrT >= SectionTop - winH/1.2) {
                $('#section02').stop().animate({opacity:'1',marginTop:'0'})
            }
        })  
           
           
        //비주얼 점차 투명해지게
        
        /*$('#visual').css({opacity:1-scrT/500, top:-scrT/10})           
        $('#visual').css('opacity','1')           
           */
           

   })
       
})






$(document).ready(function(){
    $('.ad_wrap #video_ad_01').hide();
    
    $('.ad_wrap .show_video').click(function(){
        
        var youtubeSrc = $(this).attr('data-video')
        
        $('.ad_wrap #video_ad_01').show();
        $('.ad_wrap #video_ad_01 iframe').attr('src',youtubeSrc);
        return false; 
    })
    
    
  
    $('.ad_wrap #video_ad_01 button').click(function(){
        $(this).parent().hide();
        $('.ad_wrap #video_ad_01 iframe').attr('src','');
    })
    
    
})







$(document).ready(function(){
    var liW = $('.family_wrap ul li').outerWidth();
 
    $(".family_left").click(function(){
        $(".family_wrap ul").animate({marginLeft:liW-40+'px'}, function(){
            $('.family_wrap li:last').prependTo('.family_wrap ul');
            $(".family_wrap ul").css({marginLeft:'20px'})
        });
     });

    $('.family_right').click(function(){
        $('.family_wrap ul').animate({marginLeft:-liW-40+'px'}, function(){
            $('.family_wrap li:first').appendTo('.family_wrap ul'); 
            $('.family_wrap ul').css({marginLeft:'20px'})
        }); 
    });
})



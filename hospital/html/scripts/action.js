$(document).ready(function(){
    
    
    
    $('.gnb li').mouseover(function(){
        $('.lnb').stop().slideDown(200);
    })
    $('.lnb').mouseleave(function(){
        $('.lnb').stop().slideUp(200);
    });
    $('.top_set').mouseover(function(){
        $('.lnb').stop().slideUp(200);
    })
    
    $('.lnb_wrap ul').mouseover(function(){
        var ulWrapIndex = $(this).index();
        
        $('.gnb li a').removeClass('col_ch');
        $('.gnb li').eq(ulWrapIndex).find('a').addClass('col_ch');        
        
    });
    
    $('.lnb_wrap ul').mouseleave(function(){
        $('.gnb li a').addClass('col_ch');   
        
    });
     
    $('button.pic').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
        $('.img_map_jy').fadeIn(400).addClass('action');
        $('.map_jy').fadeOut(100).removeClass('action');
    })
    $('button.daum').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
        $('.map_jy').fadeIn(400).addClass('action');
        $('.img_map_jy').fadeOut(100).removeClass('action');
    })
    
    
    
    
    /*sub02_02 slider*/
    
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    $('.swiper-slide img').click(function(){
        var imgName = $(this).attr('src');
        $('.show_box img').attr('src',imgName)
        
        
    })
    
    /*slide end*/
    
    /*sub04_01*/
    
    $('div.treat').hide();
    $('div.treat').eq(0).show()
    
    $('ul.treat li').click(function(){
        var treatClick = $(this).index();

        $('div.treat').hide();
        $(this).addClass('treat_click').siblings().removeClass('treat_click');
        $('div.treat').eq(treatClick).show();
    })
    

    
    /*sub05_01*/
    
    $('.page_num li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    
    
    
    $('button.complete').click(function(){
        var result = confirm('글을 게시하시겠습니까?')
        
        if(result) {
            location.replace('sub06_01.html')
        }
        
        else {
        }
        
    })
 
    
    
    
})
$(document).ready(function(){
    
    
    $('h1').click(function(){
        $('.section_wrap').animate({left:'50%', opacity:'1'},1500);
        $('.section_wrap').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'-100px', opactiy:'0'},500);
        $('.sub_title').html('');
        $('.lnb').slideUp(500);
         return false;
    })
    
    
    
    $('.lnb').hide();
    
    var subtitle
    $('.profile').click(function(){
        
        subtitle= $(this).find('a').text();

        $('.section_wrap').animate({left:'-100%', opacity:'0'},1500);
        $('#profile_page').animate({left:'50%', opacity:'1'},1500);
        $('.sub_title').html(subtitle+'<span><i class="fas fa-chevron-down"></i></span>');
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        

        
      return false; 
    })
    
    
    $('.sub_title').click(function(){
        $('.lnb').stop().slideToggle(500);
        $('.sub_title span i').toggleClass('action');
    })
    
//        $('.sub_title').click(function(){
//            $('.lnb').stop().slideUp(500);
//            $('.sub_title').html(subtitle+'<span><i class="fas fa-chevron-down"></i></span>');
//        });

    
    
    $('.notice').click(function(){
        
        subtitle= $(this).find('a').text();

        $('.section_wrap').animate({left:'-100%', opacity:'0'},1500);
        $('#notice_page').animate({left:'50%', opacity:'1'},1500);
        $('.sub_title').html(subtitle+'<span><i class="fas fa-chevron-down"></i></span>');
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        

        
      return false; 
    })
    
    
     $('.video').click(function(){
        
        subtitle= $(this).find('a').text();

        $('.section_wrap').animate({left:'-100%', opacity:'0'},1500);
        $('#video_page').animate({left:'50%', opacity:'1'},1500);
        $('.sub_title').html(subtitle+'<span><i class="fas fa-chevron-down"></i></span>');
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        

        
      return false; 
    })
    
    
    $('.discography').click(function(){
        
        subtitle= $(this).find('a').text();

        $('.section_wrap').animate({left:'-100%', opacity:'0'},1500);
        $('#disco_page').animate({left:'50%', opacity:'1'},1500);
        $('.sub_title').html(subtitle+'<span><i class="fas fa-chevron-down"></i></span>');
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        

        
      return false; 
    })
    
     $('.schedule').click(function(){
        
        subtitle= $(this).find('a').text();

        $('.section_wrap').animate({left:'-100%', opacity:'0'},1500);
        $('#sche_page').animate({left:'50%', opacity:'1'},1500);
        $('.sub_title').html(subtitle+'<span><i class="fas fa-chevron-down"></i></span>');
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        

        
      return false; 
    })
    
    
    $('.gallery').click(function(){
        
        subtitle= $(this).find('a').text();

        $('.section_wrap').animate({left:'-100%', opacity:'0'},1500);
        $('#gallery_page').animate({left:'50%', opacity:'1'},1500);
        $('.sub_title').html(subtitle+'<span><i class="fas fa-chevron-down"></i></span>');
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        

        
      return false; 
    })
    
    
    
    
    
    
    
    
    
     $('.sub_profile').click(function(){
        $('#profile_page').animate({left:'50%', opacity:'1'},1500);
        $('#profile_page').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        $('.lnb').slideUp(500);
         $('.sub_title').html('PROFILE'+'<span><i class="fas fa-chevron-down"></i></span>');
    })
    
    
    
    $('.sub_notice').click(function(){
        $('#notice_page').animate({left:'50%', opacity:'1'},1500);
        $('#notice_page').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        $('.lnb').slideUp(500);
         $('.sub_title').html('NOTICE'+'<span><i class="fas fa-chevron-down"></i></span>');
    })
    
    
    $('.sub_video').click(function(){
        $('#video_page').animate({left:'50%', opacity:'1'},1500);
        $('#video_page').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        $('.lnb').slideUp(500);
         $('.sub_title').html('VIDEO'+'<span><i class="fas fa-chevron-down"></i></span>');
    })
    
    $('.sub_disco').click(function(){
        $('#disco_page').animate({left:'50%', opacity:'1'},1500);
        $('#disco_page').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        $('.lnb').slideUp(500);
         $('.sub_title').html('DISCOGRAPHY'+'<span><i class="fas fa-chevron-down"></i></span>');
    })
    
    
    $('.sub_sche').click(function(){
        $('#sche_page').animate({left:'50%', opacity:'1'},1500);
        $('#sche_page').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        $('.lnb').slideUp(500);
         $('.sub_title').html('SCHEDULE'+'<span><i class="fas fa-chevron-down"></i></span>');
    })
    
    
    $('.sub_gallery').click(function(){
        $('#gallery_page').animate({left:'50%', opacity:'1'},1500);
        $('#gallery_page').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'0', opactiy:'1'},500);
        $('.lnb').slideUp(500);
         $('.sub_title').html('GALLERY'+'<span><i class="fas fa-chevron-down"></i></span>');
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $('.btn_close').click(function(){
        
        
        $('.section_wrap').animate({left:'50%', opacity:'1'},1500);
        $('.section_wrap').siblings().animate({left:'150%', opacity:'0'},1500);
        $('.sub_gnb').animate({marginTop:'-100px', opactiy:'0'},500);
        $('.lnb').slideUp(500);
    })
    
    
    
    
    $('.sub_title').html('');
    
})
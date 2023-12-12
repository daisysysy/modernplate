$(function(){
    
    var $ani=null;
    var $windowHeight=null;
    var $scrollTop=null;

    $windowHeight=$(window).height()-$(window).height()/50;

    $(window).resize(function(){
        $windowHeight=$(window).height()-$(window).height()/50;
    })


    $(".animation").each(function(index){
        $(window).scroll(function(){
            $scrollTop=$(window).scrollTop();
            $ani=$(".animation").eq(index).offset().top
    
            if($scrollTop+$windowHeight>$ani){
                $(".animation").addClass("active")
            }else{
                $(".animation").removeClass("active")
            }
        })
    })
    
})
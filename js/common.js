$(document).ready(function(){
    $(".hamburger").click(function(){
        $("#mobile-nav").addClass("active");
    })
    $(".m-close").click(function(){
        $("#mobile-nav").removeClass("active");
    })





    $(".arrow").click(function(){
        if($(this).parent().find(".m-drop-down").is(":hidden")){
            $(".m-drop-down").slideUp();
            $(this).parent().find(".m-drop-down").stop().slideDown();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right");
            $(this).removeClass("fa-angle-right").addClass("fa-angle-down");
        }else{
            $(".m-drop-down").slideUp();
            $(".arrow").removeClass("fa-angle-down").addClass("fa-angle-right");
        }
    })







    $(".more").click(function(){
        $(".best-bottom").addClass("active")
        $(".more").addClass("active")
        $(".fold").addClass("active");
    })
    $(".fold").click(function(){
        $(".best-bottom").removeClass("active")
        $(".fold").removeClass("active")
        $(".more").removeClass("active");
    })
    

    





   


    $(window).scroll(function(){
        var $scrollTop=$(window).scrollTop();
        if($scrollTop>750){
            $(".desk-nav-wrap").addClass("active")
        }else{
            $(".desk-nav-wrap").removeClass("active")
        }
    })







    $(".menu").each(function(index){
        $(this).children("a").mouseenter(function(){
            $(".drop-down").hide();
            $(this).parent().find(".drop-down").show();
            $(".full-back").show();
        })
        $("#desk-nav").mouseleave(function(){
            $(".drop-down").hide();
            $(".full-back").hide();
        })
        $(".menu>a:last-child").mouseenter(function(){
            $(".full-back").hide();
        })
        

    })









})
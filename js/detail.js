$(function(){

    var sWidth=0;
    var slideCount=1;
    var slideLength=0;
    var slidePosition=0;
    var $slider=$(".product-slider");
    var $slide=$slider.children(".product-slide");
    slideLength=$slide.length;

    var $page=$(".pagenation");
    var $pageDot=$page.children(".dot");
    var dotCount=0;

    var x_pos,x;
    var xDif;
    var drag=false;

    var timeCount;
    var $time=0;



    function init(){
        var slider_wrap=$(".product-image").width();
        sWidth=slider_wrap/slideCount;
        $slide.css({"width":sWidth})
        slideLength=$slide.length;
        $slider.css({width:sWidth*slideLength})
    }
    init();


    function slideEvent(){

        function slideMove(){
            $slider.stop().animate({
                left:-sWidth*slidePosition
            })
        }



        function page(){
            $pageDot.removeClass("active");
            $pageDot.eq(slidePosition).addClass("active");
        }



        function nextPlay(){
            if(slidePosition==slideLength-slideCount){
                slidePosition=slideLength-slideCount;
            }else{
                slidePosition++;
            }
            slideMove();
            page();
        }


        function prevPlay(){
            if(slidePosition<=0){
                slidePosition=0;
            }else{
                slidePosition--;
            }
            slideMove();
            page();
        }


        $(".pagenation .dot").each(function(index){
            $(this).click(function(){
                slidePosition=index;

                slideMove();
                page();
            })
        })




        $slider.on("mousedown touchstart",function(event){
            drag=true;
            if(event.type==="touchstart"){
                x_pos=event.touched[0].screenX;
            }else{
                x_pos=event.pageX;
            }
            timeCount=setInterval(function(){$time++;},10);
            if(event.type==="mousedown"){
                return false;
            }
        })


        $slider.on("mouseup touchend",function(event){
            drag=false;
            if(Math.abs(xDif)>20){
                if(xDif<-20){
                    prevPlay();
                }else{
                    nextPlay();
                }
                xDif=0;
            }

            clearInterval(timeCount);
            if($time>10){
                $("a").click(function(){
                    return false;
                })
            }else{
                $("a").click(function(){
                    var $href=$(this).attr("href");
                    window.open($href,"_self");
                })
            }
            $time=0;
        })


        
        $slider.on("mousemove touchmove",function(event){
            if(drag){
                if(event.type=="touchmove"){
                    xDif=parseInt(x_pos-event.touches[0].screenX);
                }else{
                    xDif=parseInt(x_pos-event.pageX);
                }
            }
            return false;
        })

    }
    slideEvent();




    $(window).scroll(function(){
        var $scrollTop=$(window).scrollTop();
        if($scrollTop>300){
            $(".m-fix").addClass("active")
        }else{
            $(".m-fix").removeClass("active")
        }
    })
})
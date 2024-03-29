$(function(){




    // 상품 메인 이미지 슬라이드

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



    $(window).resize(function(){
        init();
        $(".product-slider").stop().animate({
            left:-sWidth*slidePosition
        },0);
    });




    // 모바일 하단 구매 메뉴 사라지고 나타나게


    $(window).scroll(function(){
        var $scrollTop=$(window).scrollTop();
        if($scrollTop>300){
            $(".m-fix").addClass("active")
        }else{
            $(".m-fix").removeClass("active")
        }
    })




    $(".m-fix a").click(function(){
        $(".m-fix-page").addClass("active");
        // 버튼을 고정하고 싶을 때
/*         $("html,body").css({overflow:"hidden"});
        $("main").off();
        return false; */
        $(".m-fix").hide();
        return false;
    })
    $(".f-close").click(function(){
        $(".m-fix-page").removeClass("active");
        $(".m-fix").show();
    })


 /*    var score=0;
    $(".fa-minus").click(function(){
        score--;
        if(score<=1){
            score=1;
        }
        $(".desk-table div").text(score)
    })
    $(".fa-plus").click(function(){
        score++;
        if(score>999){
            score=999;
        }
        $(".desk-table div").text(score)
    }) */




    // Number()는 문자를 숫자로 변환?

    var total;
    var num=0;
    
    // 데스크탑 - 버튼 동작
    $(".d-minus").click(function(){
        num=Number($("#math").val());
        $("#math").val(num-1);
        clc(num+1)
        $(".d-number").text(total)
        return false;
    })
    // 데스크탑 + 버튼 동작
    $(".d-plus").click(function(){
        num=Number($("#math").val());
        $("#math").val(num+1);
        clc(num+1)
        $(".d-number").text(total)
        return false;
    })
    // 데스크탑 숫자 입력 동작
    $("#math").change(function(){
        num=Number($("#math").val());
        $("#math").val(num);
        clc(num)
        $(".d-number").text(total)
    })


    // 모바일 숫자 입력 동작
    $("#f-math").change(function(){
        num=Number($("#f-math").val());
        $("#f-math").val(num);
        clc(num)
        $(".f-number").text(total)
    })
    // 모바일 - 버튼 동작
    $(".f-minus").click(function(){
        num=Number($("#f-math").val());
        $("#f-math").val(num-1);
        clc(num+1)
        $(".f-number").text(total)
        return false;
    })
    // 모바일 + 버튼 동작
    $(".f-plus").click(function(){
        num=Number($("#f-math").val());
        $("#f-math").val(num+1);
        clc(num+1)
        $(".f-number").text(total)
        return false;
    })
    
    // 합계 함수
/*     $("#math").change(function(){
        num=$(this).val();
        clc(num)
        $(".d-number").text(total)
    }) */
    function clc(price){
        total=price*46900;
        return total;
    }




    // 탭 동작

    $(".tab-list a").click(function(){
        $(this.hash).show();
    })







    // 상단 탭 메뉴 스크롤 고정
    $(window).scroll(function(){
        var $scrollTop=$(window).scrollTop();
        if($scrollTop>1500){
            $(".tab-list").addClass("active")
        }else{
            $(".tab-list").removeClass("active")
        }
    })




    // 리뷰 동작
    $(".review-title").click(function(){
        if($(".review-content-td").is(":hidden")){
            $(".review-content-td").show();
        }else{
            $(".review-content-td").hide();
        }
    })

    // qna 동작
    $(".qna-title").click(function(){
        if($(".qna-content").is(":hidden")){
            $(".qna-content").show();
        }else{
            $(".qna-content").hide();
        }
    })















})
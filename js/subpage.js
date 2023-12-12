$(function(){


    $(".like-x").click(function(){
        $(this).hide();
        $(this).parent().find(".like-o").show();
    })

    $(".like-o").click(function(){
        $(this).hide();
        $(this).parent().find(".like-x").show();
    })





   /*  function chn_sltColor(){
        var border = $(".sort").css("border");
        $(".sort").css("border",border);				
    } */

   
})
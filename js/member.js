$(document).ready(function(){

    var $place=[];
    $(".place").each(function(index){
        $place[index]=$(this).attr("placeholder")
        $(this).focus(function(){
            $(this).attr("placeholder","");
        })
        $(this).blur(function(){
            $(this).attr("placeholder",$place[index]);
        })
    })






    $("input[name=boxall").click(function(){
        if($(this).is(":checked")){
            $("input[type=checkbox]").prop("checked",true)
        }else{
            $("input[type=checkbox]").prop("checked",false)
        }
    })


    $(".agree").click(function(){
        var checkLength=$(".agree").length;
        var check=$(".agree input:checked").length;

        if(check==checkLength){
            $("input[name=boxall").prop("checked",true)
        }else{
            $("input[name=boxall").prop("checked",false)
        }
    })




})
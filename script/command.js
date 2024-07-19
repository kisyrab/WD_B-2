$(function(){

////메뉴 +서브비지

$(".main > li , .sub_bg").hover(function(){
    $(".sub , .sub_bg").stop().slideDown();
},function(){
    $(".sub , .sub_bg").stop().slideUp();

}) 

////슬라이드탑이동

setInterval(function(){
    $(".top_move").animate({top : "-300px"},500 , function(){
        $(".top_move").append($(".top_move li").eq(0))
        $(".top_move").css({top : "0"});
    })

}, 2500)



////팝업

$(".p_click").click(function(){
    $(".pop , .modal").show();
})

$(".button").click(function(){
    $(".pop , .modal").hide();
})


}) //j
$(document).ready(function(){

    let i = 0;
    let count = $(".banner>li").length;

    let autoSlide = setInterval(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        $(".banner>li").stop().fadeOut();
        $(".banner>li").eq(i).stop().fadeIn();
    }, 4000);

    $(".hamberger").click(function(){
        $(".gnb_sidemenu").stop().animate({"right":"0%"});
    });
    $(".close").click(function(){
        $(".gnb_sidemenu").stop().animate({"right":"-100%"});
    });

    $(".list_aco").click(function(){
        $(this).stop().toggleClass("slide").siblings().slideToggle();
    });
});
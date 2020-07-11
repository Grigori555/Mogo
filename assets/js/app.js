/*Work with jquery*/

$(function() {

    var header = $("#header"),
     introH =$("#intro").innerHeight(), // сохраняем высоту id intro
    scrollOffset = 0;
    
    $(window).on("scroll",function(){

        scrollOffset = $(this).scrollTop();
            if( scrollOffset >= introH ){
                header.addClass("fixed");

            } else{
                header.removeClass("fixed");
            }
    
    });
});
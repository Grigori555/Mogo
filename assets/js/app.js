/*Work with jquery*/

$(function() {

    var header = $("#header"),
     introH =$("#intro").innerHeight(), // сохраняем высоту id intro
    scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);
    
    $(window).on("scroll",function(){

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    
    });



    function checkScroll(scrollOffset){
        
        if( scrollOffset >= introH ){
            header.addClass("fixed");

        } else{
            header.removeClass("fixed");
        }
    }
});



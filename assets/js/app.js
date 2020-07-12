/*Work with jquery*/

$(function() {

    var header = $("#header"),
     introH =$("#intro").innerHeight(), // сохраняем высоту id intro
    scrollOffset = $(window).scrollTop();


    /* Fixed Header */ 
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

/*Smooth  Плавный scroll*/


    $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        var blockId =$(this).data("scroll"),
        blockOffset =   $(blockId).offset().top;
        $(blockId);

       $("html, body").animate({
            scrollTop: blockOffset
       }, 500);

    });








});



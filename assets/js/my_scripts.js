/*Work with native JS*/

/* accordion  What we do */

let accordItem = document.querySelectorAll(".accordion__item");


accordItem.forEach(function(index){
    

            index.addEventListener("click",()=>{
            index.classList.toggle("active");

                }               );
                        
    

});

/*Header fixed and active*/

const header = document.querySelector(".header");

window.addEventListener("scroll", function(){
if(pageYOffset>=820){
    header.classList.add("active");
    header.classList.add("fixed");

}else if(pageYOffset<820){
    header.classList.remove("active");
    header.classList.remove("fixed");

}


})







   
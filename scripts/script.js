
let accordItem = document.querySelectorAll(".accordion__item");


accordItem.forEach(function(index){
    

            index.addEventListener("click",()=>{
            index.classList.toggle("active");

                }               );
                        
    

});





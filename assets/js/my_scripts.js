/*Work with native JS*/

/*constants*/
let accordItem = document.querySelectorAll(".accordion__item");
const header = document.querySelector(".header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const headArrTop = document.querySelector(".header__arrow-top");
const about = document.getElementById("about");
const navLinks = document.querySelectorAll(".nav__link");

/* accordion  What we do */




accordItem.forEach(function(index){
    

            index.addEventListener("click",()=>{
            index.classList.toggle("active");

                }               );
                        
    

});

/*Header fixed and active*/


openMenu();
window.addEventListener("scroll", openMenu);

function openMenu(){
    if(pageYOffset>=about.offsetTop){
        header.classList.add("active");
        header.classList.add("fixed");
        headArrTop.style.visibility ="visible";
    
    }else if(pageYOffset<about.offsetTop){
        header.classList.remove("active");
        header.classList.remove("fixed");
    
    }
    }

/* nav-toggle active with 770 or lower size display*/
/*click*/



navToggle.addEventListener("click",()=>{
    navToggle.classList.toggle("active");
    nav.classList.toggle("active");
    

});
/*Smooth scroll*/
/* the button of fast scroll on top*/

window.addEventListener("scroll",()=>{
    if(pageYOffset>=700){
        headArrTop.style.display = "block";
        headArrTop.style.visibility ="visible";
    } else{
        headArrTop.style.display = "none";
    }
});
const page =document.getElementById("page");
headArrTop.addEventListener("click",(e)=>{
    e.preventDefault();

    page.scrollIntoView({
        block: "start", 
        behavior: "smooth"
    });
});




/*nav*/
for(let navLink of navLinks){
    navLink.addEventListener("click",function(e){
        e.preventDefault();
        const id =navLink.getAttribute("href");
            document.querySelector(id).scrollIntoView({
                behavior: "smooth",
                block:"start"
            });
    });
};


























   
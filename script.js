 let toggle=document.querySelector("#header .toggle-button");
 let collapse=document.querySelectorAll("#header .collapse");

 toggle.addEventListener( 'click', function(){
 collapse.forEach(col=>col.classList.toggle("collapse-toggle"));
}) 

//with masonry
new Masonry("#posts .grid", {
    itemSelector:'.grid-item',
    gutter:20
});


//swiper library initialization
new Swiper('.swiper-container',{
    direction:'horizontal',
    loop:true,
    slidesPerView:5,
    autoplay:{
        delay:5000
    },
    //responsive break points
    breakpoints:{
        '@0':{
            slidesPerView:2
        },
        '@1.00':{
            slidesPerView:3
        },
        '@1.25':{
            slidesPerView:4
    },
'@1.50':{
    slidesPerView:5
}
    

}
})

//sticky nav
window.onscroll= function(){myFunction()};

//get current value
let navbar=document.getElementById("header");

//get navbar position
let sticky=navbar.offsetTop;

//sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
navbar.classList.add("sticky");
    }else{
navbar.classList.remove("sticky");
    }
}



//dark mode
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()  => {
document.body.classList.toggle('dark');
});
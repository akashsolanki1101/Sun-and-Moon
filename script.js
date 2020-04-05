const sun = document.querySelector(".Sun");
const moon = document.querySelector(".Moon");
const main = document.querySelector(".Main");

setInterval(function(){
    sun.classList.add("Sun_animation");
    moon.classList.remove("Moon_animation")
},1000);

setInterval(function(){
    sun.classList.remove("Sun_animation")
    moon.classList.add("Moon_animation")
},2000)

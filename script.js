const sun = document.querySelector(".Sun");
const moon = document.querySelector(".Moon");
const main = document.querySelector(".Main");

function swinging(){
    sun.classList.add("Sun_animation");
        setTimeout(function(){
            sun.classList.remove("Sun_animation")
            setTimeout(function(){
                moon.classList.add("Moon_animation")
                setTimeout(function(){
                    moon.classList.remove("Moon_animation")
            },900)
            },500)
        },900)
}

swinging();
    
setInterval(swinging,2800);    


let slides = [...document.getElementsByClassName("slide")];
console.log(slides);
let back_ar = document.getElementById("left_ar");
let next_ar = document.getElementById("right_ar");
let cur_index = 0;
next_ar.addEventListener("click", function (){
    if(cur_index <  slides.length-1){
        slides[cur_index].style.left="-100%";
        cur_index++;
        slides[cur_index].style.left="0%";
    }    
})
back_ar.addEventListener("click", function (){
    if(cur_index > 0){
        slides[cur_index].style.left="100%";
        cur_index--;
        slides[cur_index].style.left="0%";
    }
})

const header = document.querySelector("header");

window.addEventListener("sroll" , function(){
    header.classList.toggle("sticky", window.scrollY > 70);
});
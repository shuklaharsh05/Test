var navbar = document.querySelector(".navbar")
var header = document.querySelector(".nav")
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if (scroll_position < 300) {
        header.style.backgroundColor= 'transparent';
        header.style.color='#fff';

    } else {
        header.style.backgroundColor='#da2d28';  
        header.style.color='#000';
        header.style.zIndex='100';
    }
})
'use strict'
const nav = document.querySelector("#navMain");
//Nav Responsive
document.addEventListener('scroll', ()=>{
    if(scrollY == 0) {
        nav.classList.remove('navTopOn');
        nav.classList.add('navTopOff');
    } else {
        nav.classList.remove('navTopOff');
        nav.classList.add('navTopOn');
    }
});

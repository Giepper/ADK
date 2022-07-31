const header = document.querySelector('header');
const navBtn = document.querySelector('navBtn');
var rect = header.getBoundingClientRect()

function scrollBackground(){
    header.classList.add('onScrollProperty');
    navBtn.classList.add('onScrollProperty');
}

addEventListener('scroll', scrollBackground, {once : true})
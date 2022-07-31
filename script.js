const header = document.querySelector('header');
const navBtn = document.querySelector('navBtn');
const middleHeader = document.querySelector('.middleHeader');
const modalMenu = document.querySelector('.modalMenu');
const navBtnModal = document.querySelectorAll('.navBtnModal');

addEventListener('scroll', ()=>{
    header.classList.add('onScrollProperty');
    navBtn.classList.add('onScrollProperty');
}, {once : true});

middleHeader.addEventListener('click', ()=>{
    modalMenu.style.setProperty('display','block');
});

for(let x=0; x<navBtnModal.length;x++){
    navBtnModal[x].addEventListener('click', ()=>{
        modalMenu.style.setProperty('display','none');
    });
}
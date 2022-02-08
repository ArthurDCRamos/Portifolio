const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const item_menu = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const barra = document.querySelector('.barra');
const barra1 = document.querySelector('.barra1');
const barra2 = document.querySelector('.barra2');
const barra3 = document.querySelector('.barra3');
const tex = document.querySelector('.tex');
const tex2 = document.querySelector('.tex2');
const grid = document.querySelector('.grid');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        header.style.backdropFilter = 'blur(4px)';
    }
    else {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                header.style.backdropFilter = 'blur(4px)';
            }
});

item_menu.forEach(item=>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position >= 400) {
        barra.style.left = '0px';
        barra.style.backgroundColor = 'black';
        grid.style.marginTop = '0';
        grid.style.opacity = '1';
        tex.style.color = 'black';
        barra1.style.right = '-740px';
        barra1.style.backgroundColor = 'black';
    }
    else  {
            barra.style.left = '-30vh';
            barra.style.backgroundColor = 'transparent';
            grid.style.marginTop = '10vh';
            grid.style.opacity = '0';
            tex.style.color = 'transparent';
            barra1.style.right = '-100%';
            barra1.style.backgroundColor = 'transparent';
        }
} );

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position >= 1900){
        tex2.style.color = 'black';
    }
    else{
        tex2.style.color = 'transparent';
    }
});
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position >= 2300){
        tex2.style.color = 'black';
        barra3.style.right = '-1175px';
        barra3.style.backgroundColor = 'black';
        barra2.style.left = '0px';
        barra2.style.backgroundColor = 'black';
    }
    else{
        tex2.style.color = 'transparent';
        barra3.style.right = '-100%';
        barra3.style.backgroundColor = 'transparent';
        barra2.style.left = '-30vh';
        barra2.style.backgroundColor = 'transparent';
        
    }
});

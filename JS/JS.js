const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const item_menu = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const barra = document.querySelector('.barra');
const tex = document.querySelector('.tex');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    else {
                header.style.backgroundColor = 'transparent';
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
    if (scroll_position >= 600) {
        barra.style.left = '0px';
        barra.style.backgroundColor = 'black';
    }
    else {
            barra.style.left = '-30vh';
            barra.style.backgroundColor = 'transparent';
        }
} );

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position >= 600) {
        tex.style.color = 'black';
        tex.style.margin = '0 auto 0 30vh';
    }
    else {
            tex.style.color = 'transparent';
            tex.style.margin = '0 auto 0 20vh';
        }
} );
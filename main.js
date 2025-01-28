let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    menu.classList.remove('active');
}


let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () =>{
    menu.classList.toggle('active');
    search.classList.remove('active');
}
//hide menu and searc box on scroll
window.onscroll = () =>{
    menu.classList.remove('active');
    search.classList.remove('active');

}

// Header
let header = document.querySelector('header');

window.addEventListener ('scroll', () =>{
    header.classList.toggle('Shadow' ,window.scrollY >0);

});

// swiper 

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
  
 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    
  });

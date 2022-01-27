let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
}

document.querySelector('#search-icon').onclick = () =>{
	document.querySelector('#search-form').classList.toggle('active')
}

document.querySelector('#close').onclick = () =>{
	document.querySelector('#search-form').classList.remove	('active')
}

 var swiper = new Swiper(".home-slider", {
        spaceBetween: 20,		
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      });


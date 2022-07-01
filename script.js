var swiper = new Swiper('.costumer-slider', {

	direction: 'vertical',
	mousewheelControl: true,
	slidesPerView: 2,
	breakpoints: {
		1440: {
			direction: 'vertical',
			slidesPerView: 2,
			spaceBetween: 20,
		},
		425: {
			slidesPerView: 1,
			direction: 'horizontal',
		},},	
		// freeMode: true,
		// freeModeSticky: true
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});




	let dropdowns = document.querySelectorAll('.services_card');
	dropdowns.forEach(dropdown => {dropdown.addEventListener('click',function(e){
		let label = this.querySelector('.button_services_card')
		if(e.path.includes(this.querySelector('.services_body_card'))){

		}
		this.classList.toggle('active')

	})})



	var thumbs = new Swiper ('.gallery-thumbs', {
		slidesPerView: 3,
		spaceBetween: 10,
		centeredSlides: true, 
		// loop: true,
		slideToClickedSlide: true,
		breakpoints: {

			425: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			375: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			360: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			300: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			
	}
	});

	var slider = new Swiper ('.gallery-slider', {
		slidesPerView: 1,
		centeredSlides: true,
		// loop: true,
		// loopedSlides: 1, 
	});

	slider.controller.control = thumbs;
	thumbs.controller.control = slider;

	
// БУРГЕР

let burger = document.querySelector(".burger");

let navMenu = document.querySelector(".nav_menu");

burger.addEventListener('click', function() {
        navMenu.classList.toggle("active");
    });


// БУРГЕР
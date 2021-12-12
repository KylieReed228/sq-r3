import { Swiper, Navigation } from 'swiper'
Swiper.use([ Navigation, ])


document.addEventListener('DOMContentLoaded', () => {

	// Slider

	const swiper = new Swiper('.reviews-slider', {
		slidesPerView: 'auto',
		loop: true,
		spaceBetween: 30,
		navigation: {
			nextEl: '.reviews-slider__button_next',
			prevEl: '.reviews-slider__button_prev',
		},
	})

	// Adaptive menu
	
	let navBtn =  document.querySelector('.nav-btn')
	let nav = document.querySelector('.nav')
	let body = document.querySelector('body')

	navBtn.addEventListener('click', function(){
		navBtn.classList.toggle('active')
		nav.classList.toggle('active')
		body.classList.toggle('lock')
	})

	// Search 

	let searchImg = document.querySelector('.header__search-img')
	let searchInput = document.querySelector('.header__search-input')
	
	searchImg.addEventListener('click', function(){
		searchInput.classList.toggle('active')
	})

})



// Initializing the Hero Area Slider
initializingTheHeroSlider()
function initializingTheHeroSlider() {
	const glide = new Glide('#hero-slide', {
		loop: true,
		type: 'carousel',
		animationTimingFunc: 'cubic-bezier(0.59, 0.52, 0.29, 0.99)',
		animationDuration: 800,
		autoplay: 3000,
	})
	glide.mount()
}
initializingTheProductSlider()
function initializingTheProductSlider() {
	const glide = new Glide('#latest-product-slider', {
		type: 'carousel',
		loop: true,
		gap: 10,
		animationTimingFunc: 'cubic-bezier(0.59, 0.52, 0.29, 0.99)',
		animationDuration: 800,
		perView: 4,
		autoplay: 3000,
		breakpoints: {
			1000: {
				perView: 4,
			},
			768: {
				perView: 3,
				gap: 40,
			},
			565: {
				perView: 2,
			},
			321: {
				perView: 1,
			},
		},
	})
	glide.mount()
}
initializingTheReviewSlider()
function initializingTheReviewSlider() {
	const glide = new Glide('#review-slider', {
		type: 'carousel',
		loop: true,
		gap: 10,
		animationTimingFunc: 'linear',
		animationDuration: 800,
		perView: 1,
		autoplay: 3000,
	})
	glide.mount()
}
initializingTheNewsSlider()
function initializingTheNewsSlider() {
	const glide = new Glide('#news-slider', {
		type: 'carousel',
		loop: true,
		gap: 30,
		animationTimingFunc: 'cubic-bezier(0.54, 0.09, 0.44, 1)',
		animationDuration: 800,
		perView: 3,
		autoplay: 3000,
		gap: 15,
		breakpoints: {
			1000: {
				perView: 3,
			},
			768: {
				perView: 2,
			},
			565: {
				perView: 1,
			},
			321: {
				perView: 1,
			},
		},
	})
	glide.mount()
}

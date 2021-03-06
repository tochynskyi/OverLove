// VALIDATION MOBILE //
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_mobile');

	let footerArrows = document.querySelectorAll('.footer__arrow'); 
	console.log(footerArrows);
		for (let i = 0; i < footerArrows.length; i++) {
			const footerArrow = footerArrows[i];
			let subList = document.querySelectorAll('.footer__sub-list'); 
			footerArrow.addEventListener("click", function (e) {
				footerArrow.parentElement.classList.toggle('_active');
			});
		}
} else {
	document.body.classList.add('_PC');
}
// VALIDATION MOBILE //

// MENU BURGER //
document.querySelector(".menu-icon").addEventListener("click", function () {
	document.querySelector(".menu-icon").classList.toggle("active");
	document.querySelector(".header").classList.toggle("header__bg");
	document.querySelector(".menu__body").classList.toggle("active");
	document.getElementById('overflow').classList.toggle("overflow");
})
// for (i = 0; i < burgerLinks.length; i++) {
// 	burgerLinks[i].addEventListener("click", function () {
// 		burgerIcon.classList.remove("active");
// 		burgerBody.classList.remove("active");
// 		document.getElementById('overflow').classList.remove("overflow");
// 	})
// }
// MENU BURGER //

// SWIPER SLIDER //
new Swiper('.slider', {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},
	speed: 800,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},

	keyboard: {
		enabled: true,
		onlyInViewPort: true,
		pageUpDown: true
	},
	slidesPerView: 'auto',
	spaceBetween: 40,
	

	breakpoints: {
		767: {
			freeMode: true,
			spaceBetween: 40,
		},
		500: {
			spaceBetween: 20,
		},
		320: {
			freeMode: false,
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
});

new Swiper('.carusel-slider', {
	speed: 500,
	keyboard: {
		enabled: true,
		onlyInViewPort: true,
		pageUpDown: true
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
// SWIPER SLIDER //


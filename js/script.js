"use strict";

//Header button
let headerbutton = document.querySelector('.menu-header__circle');
let icon = document.querySelector(".menu-header__icon");
let menu = document.querySelector('.menu-header__menu');
let links = document.querySelectorAll('.menu-header__link');
headerbutton.addEventListener('click', function(){
	icon.classList.toggle('active');
	menu.classList.toggle('activeheader');
});
for(let link of links){
	link.addEventListener('click', function(){
		icon.classList.remove('active');
		menu.classList.remove('activeheader');
	});
}
//Slider projectblock
let swiper = document.querySelector('.projectblock__swiper');
const slider = 
	new Swiper('.projectblock__content',{
		freeMode:true,
		slidesPerGroup:1,
		centeredSlides: true,//521
		});
;
slider.disable();
document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 768){
  	slider.enable();
  }
});
window.onresize = function(){
	if (window.innerWidth < 768){
		slider.enable();
	} else {
		slider.disable();
		swiper.style = "transform: translate3d(0px,0px,0px);"
	}
}
//Contactblock
let inputs = document.querySelectorAll('.contactblock__input');
let labels = document.querySelectorAll('.contactblock__label');
let tel = document.querySelector('#tel');

for(let i = 0; i<=2; i++){
	inputs[i].addEventListener('click', function(){
			labels[i].classList.add("hiddenlabel");
			
	});
	inputs[i].addEventListener('blur', function(){
		if(inputs[i].value === ""){
			labels[i].classList.remove("hiddenlabel");
		}
	});
	inputs[i].addEventListener('input', function(){
		labels[i].classList.add("hiddenlabel");
	});
};
tel.addEventListener('keydown',function(event){
	if(!checkPhoneKey(event.key)){
		event.preventDefault();
	}
});
function checkPhoneKey(key) {
  return (key >= '0' && key <= '9') || key == '+' || key == '(' || key == ')' || key == '-' ||
    key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace';
}
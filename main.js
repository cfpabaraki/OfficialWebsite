//Nav Icons Scripts
let navIcon = document.querySelector(".nav-icon");
let nav = document.querySelector("nav");
navIcon.addEventListener("click", () => {
	nav.classList.toggle("nav-active");
});
//Slide Scripts
let ordNum = document.querySelector(".ord-num");
let homeInfo = document.querySelectorAll(".home-info");
let homeInfoLen = homeInfo.length;
let slideArrow = document.querySelector(".fa-chevron-right");
let slidePoints = document.querySelectorAll(".slide-points span");
let num = 0;
let slideCounter = 1;
function homeCounter() {
	let ordNumCount = setInterval(() => {
		num += 900;
		if (num >= 25000) {
			clearInterval(ordNumCount);
			num = 25000;
		}
		ordNum.innerHTML = num.toLocaleString();
	}, 50);
}
function slideAct() {
	for (let x = 0; x < homeInfoLen; x++) {
		homeInfo[x].classList.remove("home-info-active");
		slidePoints[x].classList.remove("point-active");
	}
	homeInfo[slideCounter].classList.add("home-info-active");
	slidePoints[slideCounter].classList.add("point-active");
	slideCounter += 1;
	if (slideCounter >= homeInfoLen) {
		homeCounter();
		slideCounter = 0;
	}

}
slideArrow.addEventListener("click", () => {
	setTimeout(slideAct, 80);
});
//Nav Animation And Scrool Script Script
let navbar = document.querySelector(".nav");
let toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
	if (window.scrollY > 100) {
		navbar.classList.add("nav-pad");
	} else {
		navbar.classList.remove("nav-pad");
	}
	if (window.scrollY > 300) {
		toTop.classList.remove("to-top-active");
	} else {
		toTop.classList.add("to-top-active");
	}
});
toTop.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
	});
});
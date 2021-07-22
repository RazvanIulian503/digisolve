
// Back To Top Button Function 

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

// Show Back To Top Button
function scrollFunction() {
	if (window.pageYOffset > 400) {
		backToTopButton.style.display = "block";
	}
	else {
		backToTopButton.style.display = "none";
	}
}

// Back To Top Function
backToTopButton.addEventListener("click", backToTop);

function backToTop() {
	window.scrollTo(0, 0);
}

// Packages Slider

const slide = document.querySelector(".slide");
const upArrow = document.querySelector(".fa-chevron-up");
const downArrow = document.querySelector(".fa-chevron-down");

let x = 0;

upArrow.onclick = () => {
	if(x > "-600") {
	x = x - 300;
	slide.style.top = x + "px";
	}
}
downArrow.onclick = () => {
	if(x < 0) {
	x = x + 300;
	slide.style.top = x + "px";
	}
}


// Menu Sidebar 


function openMenu() {
	document.querySelector(".menu-sidebar").style.display = "block";
}

window.addEventListener('mouseup', function(event) {
	let box = document.querySelector('.menu-sidebar');
	if (event.target != box && event.target.parentNode != box) {
		box.style.display = 'none'
	}
});
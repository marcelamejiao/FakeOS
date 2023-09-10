let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("yoga-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Initialise function

export const init = () => {
	const previousButton = document.querySelector("#previousButton");
	previousButton.addEventListener("click", (e) => {
		plusSlides(-1);
	});

	const nextButton = document.querySelector("#nextButton");
	nextButton.addEventListener("click", (e) => {
		plusSlides(1);
	});
}

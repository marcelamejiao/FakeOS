let slideIndex = 1;

// Next/previous controls
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const showSlides = (n) => {
  const slides = document.getElementsByClassName("yoga-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (const slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}

// Initialise function
export const init = () => {
  showSlides(slideIndex);

	const previousButton = document.querySelector("#previousButton");
	previousButton.addEventListener("click", (e) => {
		plusSlides(-1);
	});

	const nextButton = document.querySelector("#nextButton");
	nextButton.addEventListener("click", (e) => {
		plusSlides(1);
	});
}

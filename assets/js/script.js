import { init } from "./gratitude.js";

// Get the current time
const updateTime = () => {
	const time = new Date();
	const hoursMinutesTime = time.getHours() + ":" + time.getMinutes();

	const currentTime = document.querySelector("#currentTime");
	currentTime.textContent = hoursMinutesTime;
};
// To update the time immediately the function is executed first
updateTime();
// Updates the time every second
setInterval(updateTime, 1000);


// Get the modals
const yogaModal = document.querySelector("#yogaModal");
const gratitudeModal = document.querySelector("#gratitudeModal");
const musicModal = document.querySelector("#musicModal");

// Get the buttons that opens the modals
const openButtonYoga = document.querySelector("#openButtonYoga");
const openButtonGratitude = document.querySelector("#openButtonGratitude");
const openButtonMusic = document.querySelector("#openButtonMusic");

// When the user clicks the apps, open the modals
openButtonYoga.addEventListener("click", (event) => {
	yogaModal.classList.remove("modal--hidden");
});

openButtonGratitude.addEventListener("click", (event) => {
	gratitudeModal.classList.remove("modal--hidden");
});

openButtonMusic.addEventListener("click", (event) => {
	musicModal.classList.remove("modal--hidden");
});

// Get the button that closes the modal
const appCloseButtons = document.querySelectorAll(".close");

// When the user click the menu "back and home" buttons, close the modal
appCloseButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		yogaModal.classList.add("modal--hidden");
		gratitudeModal.classList.add("modal--hidden");
		musicModal.classList.add("modal--hidden");
	});
});

init();
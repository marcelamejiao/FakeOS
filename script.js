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


// Get the modal
const modal = document.querySelector("#myModal");

// Get the button that opens the modal
const appOpenButtons = document.querySelectorAll(".modal-open-button");

// Get the button that closes the modal
const appCloseButtons = document.querySelectorAll(".close");

// When the user clicks the app, open the modal 
appOpenButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		modal.classList.remove("modal--hidden");
	});
});

// When the user click the menu "back and home" buttons, close the modal
appCloseButtons.forEach((button) => {
	button.addEventListener("click", (event) => {
		modal.classList.add("modal--hidden");
	});
});


//Today's Affirmation functions

function saveAffirmation(event) {
  event.preventDefault();
  const todaysAffirmation = document.getElementById("todaysAffirmation").value;
  const date = new Date;
  const actualDate = date.toLocaleDateString();

  const todaysAffirmationObject = {
    todaysAffirmation, actualDate
  };

  let currentAffirmations = [];

  if (window.sessionStorage.getItem("affirmations")) {
    currentAffirmations = JSON.parse(window.sessionStorage.getItem("affirmations"));
  }

  currentAffirmations.push(todaysAffirmationObject);
  window.sessionStorage.setItem("affirmations", JSON.stringify(currentAffirmations));

  renderAffirmations();
}

function renderAffirmations() {
  let currentAffirmations = [];

  if (window.sessionStorage.getItem("affirmations")) {
    currentAffirmations = JSON.parse(window.sessionStorage.getItem("affirmations"));
  }

  let listAffirmations = [];

  for (let i = 0; i < currentAffirmations.length; i++) {
    const currentAffirmation = currentAffirmations[i];
    let listAffirmation = "";
    listAffirmation += '<p class="affirmation">'
    listAffirmation += currentAffirmation.actualDate;
    listAffirmation += ' - ';
    listAffirmation += currentAffirmation.todaysAffirmation;
    listAffirmation += '</p>'
    listAffirmations.push(listAffirmation);
  }
  
  document.getElementById("affirmations").innerHTML = listAffirmations.join('');

}


// Initialise function

export const init = () => {
	renderAffirmations();
	const gratitudeForm = document.querySelector("#gratitudeForm");
	gratitudeForm.addEventListener("submit", (e) => {
		e.preventDefault();
		return saveAffirmation(e);
	})
}


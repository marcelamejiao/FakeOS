//Today's Affirmation functions

const saveAffirmation = (event) => {
  const todaysAffirmation = document.getElementById("todaysAffirmation").value;
  const date = new Date();
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

  // Clear the text area after saving the affirmation
  document.getElementById("todaysAffirmation").value = '';

  renderAffirmations();
}

const renderAffirmations = () => {
  let currentAffirmations = [];

  if (window.sessionStorage.getItem("affirmations")) {
    currentAffirmations = JSON.parse(window.sessionStorage.getItem("affirmations"));
    
    // Sort the affirmations from most recent to the oldest
    currentAffirmations = currentAffirmations.reverse();
  }

  const listAffirmations = currentAffirmations.map((currentAffirmation) => {
    let listAffirmation = "";
    listAffirmation += '<p class="affirmation">';
    listAffirmation += currentAffirmation.actualDate;
    listAffirmation += ' - ';
    listAffirmation += currentAffirmation.todaysAffirmation;
    listAffirmation += '</p>';

    return listAffirmation;
  });
  
  document.getElementById("affirmations").innerHTML = listAffirmations.join('');
}

// Initialise function

export const init = () => {
	renderAffirmations();
	const gratitudeForm = document.querySelector("#gratitudeForm");
	gratitudeForm.addEventListener("submit", (e) => {
		e.preventDefault();
		return saveAffirmation(e);
	});
}

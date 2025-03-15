function TutorEntry(firstName, lastName, pronouns, age, subject, ratings, description, id) {
  let ratingStars = "";

  for (i = 0; i < ratings; i++) {
    ratingStars += `<img src="./img/star.png">`;
  }

  const randomPfp = PFPS[Math.floor(Math.random() * PFPS.length)];

  return {
    markup: `
    <div class="tutorEntry">
        <img class="profilePicture" src="img/profilePictures/option${randomPfp}.png"/>
        <div class="tutorInfo">
          <h1>${firstName} ${lastName}</h1>
          <h2>Pronouns: ${pronouns}</h2>
          <h2>Age: ${age}</h2>
          <p>Subject: ${subject}</p>
          <div class="stars">
            ${ratingStars}
          </div>
        </div>
        <p class="description">${description}</p>
        <div class="actions">
          <button id="bookButton" class="bookButton" data="${id}">Book</button>
        </div>
    </div>
  `,

    identifier: id,
  };
}


// let tutors = [TutorEntry("Tim", "Apple", "He/Him", 18, "Math", 3, "Please Bring fortnite back to the app store", 0),
//   TutorEntry("Tim", "Apple", "He/Him", 18, "Math", 5, "Please Bring fortnite back to the app store", 1),
//   TutorEntry("Tim", "Apple", "He/Him", 18, "Math", 1, "Please Bring fortnite back to the app store", 2),
// ];

let allTutors = [];

function recreateTutors(tutors) {
  let tutorEntryList = document.querySelector("#tutors > div");
  tutorEntryList.innerHTML = "";

  for (i = 0; i < tutors.length; i++) {
    tutorEntryList.innerHTML += tutors[i].markup;
  }


  tutorEntryList.addEventListener("click", (event) => {
    if (event.target instanceof HTMLButtonElement) {
      location.href = `/bookSession.html?tutorID=${parseInt(event.target.attributes.getNamedItem("data").textContent)}`;
    }
  });

}

function createTutorEntry(tutor) {
  return TutorEntry(tutor.firstName, tutor.lastName, tutor.pronouns, tutor.age, tutor.subject, tutor.rating, tutor.description, tutor.tutorID);
}
/**
 * 
 * @param {(tutor: Tutor) => boolean} filter 
 */
function filterTutors(filter) {
  recreateTutors(allTutors.filter(filter).map(createTutorEntry));
}

window.addEventListener("load", async (event) => {
  allTutors = await api.getTutors();
  recreateTutors(allTutors.map(createTutorEntry));
});

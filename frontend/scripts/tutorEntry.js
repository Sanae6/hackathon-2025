function TutorEntry(firstName, lastName, pronouns, age, subject, ratings, description, id) {
  let ratingStars = "";

  for (i = 0; i < ratings; i++) {
    ratingStars += `<img src="./img/star.png">`;
  }

  return {
    markup: `
    <div class="tutorEntry">
        <img class="profilePicture" src="https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0="/>
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
          <button class="bookButton">Book</button>
        </div>
    </div>
  `,

  identifier: id,
};
}

let tutors = [TutorEntry("Tim", "Apple", "He/Him", 18, "Math", 3, "Please Bring fortnite back to the app store", 0),
  TutorEntry("Tim", "Apple", "He/Him", 18, "Math", 5, "Please Bring fortnite back to the app store", 1),
  TutorEntry("Tim", "Apple", "He/Him", 18, "Math", 1, "Please Bring fortnite back to the app store", 2),
];


window.addEventListener("load", (event) => {
  let tutorEntryList = document.querySelector("#tutors > div");
  tutorEntryList.innerHTML = "";
  
  for (i = 0; i < tutors.length; i++) {
    tutorEntryList.innerHTML += tutors[i].markup;
  }
});

document.querySelector("#tutors > div").addEventListener("click", (event) => {
  if (event.target instanceof HTMLButtonElement) {
    bookingTutorId = getInfoFromStorage();
    console.log(bookingTutorId);
    
  }
});
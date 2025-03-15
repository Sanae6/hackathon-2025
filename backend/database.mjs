import {writeFileSync, readFileSync, existsSync} from "fs";

const databaseFilename = "database.json";
/**
 * @type {DatabaseSchema}
 */
let database = {
  tutors: [],
  users: [],
  bookings: [],
  nextTutorID: 0,
  nextUserID: 0,
  nextBookingID: 0,
};

if (existsSync(databaseFilename))
  database = JSON.parse(readFileSync(databaseFilename, "utf-8"));
save();

function save() {
  writeFileSync(databaseFilename, JSON.stringify(database, null, 2), "utf-8");
}

/**
 * @param {number} id
 * @returns {Tutor | undefined}
 */

//Getting Objects from database Fuctions
export function getTutorById(id) {
  const numId = Number(id);
  return database.tutors.find(tutor => tutor.tutorID === numId);
}
export function getTutorByName(firstName, lastName){
  return database.tutors.find((tutor => tutor.firstName === firstName && tutor.lastName === lastName))
}
export function getUser(id) {
  const numId = Number(id);
  return database.users.find(user => user.userID === numId);
}

export function getBooking(id) {
  const numId = Number(id);
  return database.bookings.find(booking => booking.id === numId);
  save();
}


// Tutor Functions
export function updateTutorPronouns(id, pronouns) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.pronouns = pronouns;
  save();
}
export function updateTutorRating(id, rating) {
  const tutor = getTutotr(id);
  if (tutor !== undefined)
    tutor.rating = rating;
  save();
}
export function updateTutorGPA(id, gpa) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.gpa = gpa;
  save();
}
export function updateTutorDescription(id, description) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.description = description;
  save();
}
export function updateTutorAvailability(id, availability0 ) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.availability = availability;
  save();
}
export function updateTutorSubject(id, subject){
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.subject = subject;
  save();
}
export function createTutor(firstName, lastName, age, gpa, subject, pronouns) {
  const tutor = {firstName, lastName, age, gpa, subject, pronouns, description: "", availability: "", rating: undefined, tutorID: database.nextTutorID ++};
  database.tutors.push(tutor);
  save();
}

// User Functions
export function createUser(firstName, lastName, pronouns) {
  const user = {firstName, lastName, pronouns, userID: database.nextUserID ++};
  database.users.push(user);
  save();
}
export function updateUserPronouns(id, pronouns) {
  const user = getUser(id);
  if (user !== undefined)
    user.pronouns = pronouns;
  save();
}


// Booking Functions
export function cancelBooking(id) {
  const booking = getBooking(id);
  const index = database.bookings.indexOf(booking);
  if (index !== -1){
    database.bookings.splice(index, 1);
    save();
  }
}
export function addBooking(date, time, tutorID) {
  const booking = {id: nextBookingID++, date, time, tutorID};
  database.booking.push(booking);
  save();
}
export function addUsertoBooking(id, userID) {
  const booking = getBooking(id);
  if (booking !== undefined)
    booking.listOfUsers.push(userID);
  save();
}
export function removeUserfromBooking(id, userID) {
  const booking = getBooking(id);
  const index = booking.listOfUsers.indexOf(userID);
  if (booking !== undefined) {
    if (index !== -1) {
      booking.listOfUsers.splice(index, 1);
      save();
    }
  }   
}
export function changeTimeBooking(id, date, time) {
  const booking = getBooking(id);
  if (booking !== undefined) {
    booking.date = date;
    booking.time = time;
  }
  save();
}



export default undefined;

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
export function getTutor(id) {
  const numId = Number(id);
  return database.tutors.find(tutor => tutor.tutorID === numId);
}
export function getUser(id) {
  const numId = Number(id);
  return database.users.find(user => user.userID === numId);
}

export function updateTutorPronouns(id, pronouns) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.pronouns = pronouns;
}

export function updateTutorRating(id, rating) {
  const tutor = getTutotr(id);
  if (tutor !== undefined)
    tutor.rating = rating;
}

export function updateTutorGPA(id, gpa) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.gpa = gpa;
}

export function updateTutorDescription(id, description) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.description = description;
}

export function updateTutorAvailability(id, availability0 ) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.availability = availability;
}

export function updateTutorSubject(id, subject){
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.subject = subject;
}

export function createTutor(firstName, lastName, age, gpa, subject, pronouns) {
  const tutor = {firstName, lastName, age, gpa, subject, pronouns, description: "", availability: "", rating: undefined, tutorID: database.nextTutorID ++};
  database.tutors.push(tutor);
  save();
}


export function createUser(firstName, lastName, pronouns) {
  const user = {firstName, lastName, pronouns, userID: database.nextUserID ++};
  database.users.push(user);
  save();
}

export function updateUserPronouns(id, pronouns) {
  const user = getUser(id);
  if (user !== undefined)
    user.pronouns = pronouns;
}

export default undefined;

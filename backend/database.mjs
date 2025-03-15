import {writeFileSync, readFileSync, existsSync} from "fs";

const databaseFilename = "database.json";
/**
 * @type {DatabaseSchema}
 */
const database = {
  tutors: [],
  users: [],
  bookings: [],
};

if (existsSync(databaseFilename))
  database = readFileSync(databaseFilename, "utf-8");

function save() {
  writeFileSync(databaseFilename, JSON.stringify(database), "utf-8");
}

/**
 * @param {number} id
 * @returns {Tutor}
 */
export function getTutor(id) {
  return database.tutors.find(tutor => tutor.tutorID === id);
}

export function updateTutorPronouns(id, pronouns) {
  const tutor = database.tutors.find(tutor => tutor.tutorID === id);
  if (tutor !== undefined)
    tutor.pronouns = pronouns;
}

export default undefined;

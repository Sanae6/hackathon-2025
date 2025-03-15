import {writeFileSync, readFileSync, existsSync} from "fs";

const databaseFilename = "database.json";
/**
 * @type {DatabaseSchema}
 */
let database = {
  tutors: [],
  users: [],
  bookings: [],
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

export function updateTutorPronouns(id, pronouns) {
  const tutor = getTutor(id);
  if (tutor !== undefined)
    tutor.pronouns = pronouns;
}

export default undefined;

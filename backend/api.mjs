import express from "express";
import bodyParser from "body-parser";
import * as database from "./database.mjs";

const router = express.Router();

router.use(bodyParser.json())

router.get("/test/:testAwesome", (req, res) => {
  res.send({
    hello: "world",

    ...req.params
  });
})

router.get("/tutors/:tutorId", (req, res) => {
  console.log(req.params.tutorId);
  const tutor = database.getTutor(req.params.tutorId);

  res.send(tutor);
})

/*
{ "newPronouns": "ja/nice" }
 */

router.post("/tutors/:tutorId/wokeness", (req, res) => {
  database.updateTutorPronouns(req.params.tutorId, req.body.newPronouns);

  res.sendStatus(200);
})

router.post("/tutors/:tutorId/availability", (req, res) => {
  database.updateTutorAvailability(req.params.tutorId, req.body.newAvailability);

  res.sendStatus(200);
})

router.post("/tutors/createTutor", (req, res) => {
  const {firstName, lastName, age, gpa, subject, pronouns} = req.body;
  database.createTutor(firstName, lastName, age, gpa, subject, pronouns);

  res.sendStatus(200);
})

router.post("/users/createUsers", (req, res) => {
  const {firstName, lastName, pronouns} = req.body;
  database.createUser(firstName, lastName, pronouns);

  res.sendStatus(200);
})

router.post("/users/:userID/workenessPt2", (req, res) => {
  database.updateUserPronouns(req.params.userID, req.body.newPronouns);

  res.sendStatus(200);
})

export default router;

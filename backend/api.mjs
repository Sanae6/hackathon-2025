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
  const tutor = database.getTutorById(req.params.tutorId);

  res.send(tutor);
})

router.get("/tutors/login", (req, res) => {
  const tutor = database.getTutorByName(req.query.firstName, req.query.lastName);

  res.send(tutor);
})

router.get("/users/login", (req, res) => {
  const user = database.getUserByName(req.query.firstName, req.query.lastName);

  res.send(user);
})

router.get("/users/:userId", (req, res) => {
  console.log(req.params.userrId);
  const user = database.getUser(req.params.userId);

  res.send(user);
})

router.get("")

/*
{ "newPronouns": "ja/nice" }
 */

router.post("/tutors/:tutorId/wokeness", (req, res) => {
  database.updateTutorPronouns(req.params.tutorId, req.body.newPronouns);

  res.sendStatus(200);
})

router.post("/tutors/:tutorId/rating", (req, res) => {
  database.updateTutorRating(req.params.tutorId, req.body.newRating);

  res.sendStatus(200);
})

router.post("/tutors/:tutorId/gpa", (req, res) => {
  database.updateTutorGPA(req.params.tutorId, req.body.newGPA);

  res.sendStatus(200);
})

router.post("/tutors/:tutorId/bio", (req, res) => {
  database.updateTutorDescription(req.params.tutorId, req.body.newBio);

  res.sendStatus(200);
})

router.post("/tutors/:tutorId/availability", (req, res) => {
  database.updateTutorAvailability(req.params.tutorId, req.body.newAvailability);

  res.sendStatus(200);
})

router.post("/tutors/:tutorId/subject", (req, res) => {
  database.updateTutorSubject(req.params.tutorId, req.body.newSubject);

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


router.post("/bookings/:bookingID/cancelled", (req, res) => {
  database.cancelBooking(req.params.bookingID);

  res.sendStatus(200);
})

router.post("/bookings/createBooking", (req, res) => {
  const {date, time, tutorID} = req.body;
  database.addBooking(date, time, tutorID);

  res.sendStatus(200);
})

router.post("/bookings/:bookingID/bookings/:userID", (req, res) => {
  database.addUsertoBooking(req.params.bookingID, req.params.userID);

  res.sendStatus(200);
})

router.post("/bookings/:bookingID/bookings/:userID", (req,res) => {
  database.removeUserfromBooking(req.params.bookingID, req.params.userID);

  res.sendStatus(200);
})

router.post("/bookings/:bookingID/changeTime", (req, res) => {
  database.changeTimeBooking(req.params.bookingID, req.body.date, req.body.time)

  res.sendStatus(200);
})

export default router;

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

export default router;

import express from "express";
import bodyParser from "body-parser";
import database from "./database";

const router = express.Router();

router.use(bodyParser.json())

router.get("/test", (req, res) => {
  res.send({
    hello: "world"
  });
})

export default router;

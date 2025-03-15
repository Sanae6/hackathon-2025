import express from "express";
import api from "./api.mjs";
const app = express();

api.use("/static", express.static("../frontend"));

app.use("/api", api);


app.listen(8080);

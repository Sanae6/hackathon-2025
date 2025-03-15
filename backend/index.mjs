import express from "express";
import path from "path";
import api from "./api.mjs";
const app = express();

app.get("/*", (req, _, next) => {
  console.log(req.path);
  next();
});

const frontendPath = path.join(import.meta.dirname, "..", "frontend");
console.log("wowowow", frontendPath);
app.use(express.static(frontendPath, { index: ["index.html"] }));

app.use("/api", api);


app.listen(8080);

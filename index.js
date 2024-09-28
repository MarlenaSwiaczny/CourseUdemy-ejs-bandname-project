import express from "express";
import bodyParser from "body-parser";
import noun from "./noun.js";
import adj from "./adj.js";

const app = express();
const port = 3000;

const bandName = {
  randAdj: "",
  randNoun: "",
}

function randomName() {
  var randomAdjIndex = Math.floor(Math.random()*adj.length);
  var randomNounIndex = Math.floor(Math.random()*noun.length);
  bandName.randAdj = `${adj[randomAdjIndex].toUpperCase()}`;
  bandName.randNoun = `${noun[randomNounIndex].toUpperCase()}`;
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  randomName();
  res.render("index.ejs", bandName);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

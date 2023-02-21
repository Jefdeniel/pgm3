// import statements
import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import { create } from "express-handlebars";

// ------------------ Express setup ------------------ //

// create an instance of express
const app = express();

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// ------------------ Handlebars setup ------------------ //

// create an instance of the handlebars engine
const hbs = create({
  extname: "hbs",
  // defaultLayout: "main",
  // layoutsDir: path.resolve("src", "views", "layouts"),
  // partialsDir: path.resolve("src", "views", "partials"),
});

// register the handlebars engine with express
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.resolve("src", "views"));

// ------------------ Routes ------------------ //

// GET route to serve the index.html file
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/trex", (req, res) => {
  res.sendFile(path.resolve("src", "views", "bronto.html"));
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});

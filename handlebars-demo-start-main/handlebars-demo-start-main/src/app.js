// import statements
import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import { create } from "express-handlebars";
import { SOURCE_PATH } from "./constants.js";

// ------------------ EXPRESS SETUP ------------------ //

// create an instance of express
const app = express();

// serve static files from the public folder
// they can be accessed from the root of the site (e.g. /assets/images/dino_07.png) 🦕
app.use(express.static("public"));

// ------------------ HANDLEBAR SETUP ------------------ //

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
app.set("views", path.join(SOURCE_PATH, "views"));

// ------------------ ROUTES ------------------ //

// GET route to serve the index.html file
app.get("/", (req, res) => {
  const data = {
    firstname: "jef",
    person: {
      firstname: "John",
      lastname: "Doe",
      age: 25,
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
      },
      brothers: ["Bob", "Steve", "Joe"],
    },
    partner: {
      firstname: "Jane",
      lastname: "Doe",
    },

    friends: [
      {
        firstname: "t-rex",
        age: 1000000000,
        image: "/assets/images/dino_01.png",
      },
      {
        firstname: "bronto",
        age: 1000000000,
        image: "/assets/images/dino_02.png",
      },
    ],
  };
  res.render("home", data);
});

app.get("/trex", (req, res) => {
  res.sendFile(path.resolve("src", "views", "bronto.html"));
});

// start the server, listen on port defined in .env file
app.listen(process.env.PORT, () => {
  // callback function that is called when the server starts
  console.log(`Application is listening to port ${process.env.PORT}.`);
});

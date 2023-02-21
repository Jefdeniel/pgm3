// 1. Import statements
import express from "express";
// om vanuit views de index.html toe te voegen, je hebt het pad nodig voor je homepage te definen. Je moet werken met absolute paden dus dit is de oplossing
import path from "path";

// 2. create express app (eerst port declareren, dan app, dan pas de functies)
const app = express();

// Serve static files
app.use(express.static("public"));

// 3. Define a route handler for the default home page
const port = 3000;

// GET method route
app.get("/", (req, res) => {
  const indexHTML = path.resolve("src", "views", "index.html");
  console.log(indexHTML);
  res.sendFile(indexHTML);
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("src", "views", "index.html"));
});

// 4. Start the app
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
});

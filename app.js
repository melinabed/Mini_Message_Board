const express = require("express");
const path = require("path");
const routerMessage = require("./routes/messageRoute");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", routerMessage);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use((req, res, next) => {
  res.status(404).render("error");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Fix theme: doesn't save theme when adding a new message
// theme with classes may work better
// Add error handling and error page !!!
// Apply error messages when name/ message input are empty
// Maybe add controllers to clean up routes
// Maybe a way to save messages after server restart?
// Deploy.

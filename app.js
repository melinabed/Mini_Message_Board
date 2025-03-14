const express = require("express");
const path = require("path");
const routerMessage = require("./routes/messageRoute");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", routerMessage);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

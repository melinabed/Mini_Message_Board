const { Router } = require("express");

const router = Router();

const messages = [
  { text: "Hi there", user: "Amando", added: new Date() },
  { text: "Hi World", user: "Charles", added: new Date() },
];

// Gets default address with sample messages
router.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

//Renders Form
router.get("/new", (req, res) => {
  res.render("form");
});

// Add a new message
router.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const username = req.body.username;

  console.log(req.body);

  messages.push({ text: messageText, user: username, added: new Date() });
  res.redirect("/");
});

module.exports = router;

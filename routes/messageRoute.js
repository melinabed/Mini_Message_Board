const { Router } = require("express");
const { formatDistanceToNow } = require("date-fns");

const router = Router();

function timeAgo(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: timeAgo(new Date() - 1000),
  },
  {
    text: "Hi World",
    user: "Charles",
    added: timeAgo(new Date() - 1000 * 60 * 4),
  },
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

  messages.push({
    text: messageText,
    user: username,
    added: timeAgo(new Date()),
  });
  res.redirect("/");
});

module.exports = router;

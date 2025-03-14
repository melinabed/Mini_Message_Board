const { Router } = require("express");
const { formatDistanceToNow } = require("date-fns");

const router = Router();

// Helper function to format date relative to the current time
function timeAgo(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

// Sample messages
const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(2025, 1, 24),
  },
  {
    text: "Hi World",
    user: "Charles",
    added: new Date(Date.now() - 1000 * 60 * 4),
  },
];

// Gets default address with sample messages
router.get("/", (req, res) => {
  const updatedMessages = messages.map((message) => ({
    ...message,
    added: timeAgo(new Date(message.added)),
  }));
  res.render("index", { messages: updatedMessages });
});

// Renders Form
router.get("/new", (req, res) => {
  res.render("form");
});

// Add a new message
router.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const username = req.body.username;

  // Add the new message with the current relative time
  messages.push({
    text: messageText,
    user: username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;

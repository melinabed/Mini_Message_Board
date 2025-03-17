const { Router } = require("express");
const { formatDistanceToNow } = require("date-fns");
const fs = require("fs");
const path = require("path");

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

// File path to store messages
const messagesFilePath = path.join(__dirname, "messages.json");

// Save messages to a file
function saveMessages() {
  fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2));
}

// Load messages from a file
function loadMessages() {
  if (fs.existsSync(messagesFilePath)) {
    const storedMessages = fs.readFileSync(messagesFilePath);
    messages.length = 0;
    messages.push(...JSON.parse(storedMessages));
  }
}

// Load messages when the server starts
loadMessages();

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

// Save messages whenever a new message is added
router.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const username = req.body.username;

  if (!messageText || !username) {
    return res.status(400).send("Username and message text are required.");
  }

  // Add the new message with the current relative time
  messages.push({
    text: messageText,
    user: username,
    added: new Date(),
  });

  // Save messages to a file
  saveMessages();

  res.redirect("/");
});

module.exports = router;

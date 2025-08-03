const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const users = [
  {
    userId: "u001",
    name: "Alice Johnson",
    referralCode: "alice2025",
    donations: 1200,
  },
  {
    userId: "u002",
    name: "Bob Patel",
    referralCode: "bob2025",
    donations: 950,
  },
  {
    userId: "u003",
    name: "Charlie Wang",
    referralCode: "charlie2025",
    donations: 780,
  },
  {
    userId: "u004",
    name: "Diana Singh",
    referralCode: "diana2025",
    donations: 1800,
  },
  {
    userId: "u005",
    name: "Ethan Kim",
    referralCode: "ethan2025",
    donations: 2200,
  },
  {
    userId: "u006",
    name: "Fatima Rahman",
    referralCode: "fatima2025",
    donations: 3100,
  },
  {
    userId: "u007",
    name: "George Liu",
    referralCode: "george2025",
    donations: 2700,
  },
  {
    userId: "u008",
    name: "Harpreet Kaur",
    referralCode: "harpreet2025",
    donations: 1450,
  },
  {
    userId: "u009",
    name: "Isaac Thomas",
    referralCode: "isaac2025",
    donations: 3600,
  },
  {
    userId: "u010",
    name: "Julia Mendes",
    referralCode: "julia2025",
    donations: 4200,
  },
  {
    userId: "u011",
    name: "Kiran Desai",
    referralCode: "kiran2025",
    donations: 5000,
  },
  {
    userId: "u012",
    name: "Liam D'Souza",
    referralCode: "liam2025",
    donations: 6100,
  },
];

app.get("/user/:userId", (req, res) => {
  const user = users.find((u) => u.userId === req.params.userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.get("/leaderboard", (req, res) => {
  const sortedUsers = [...users].sort((a, b) => b.donations - a.donations);
  const topTenUsers = sortedUsers.slice(0, 10); // Get only top 10
  res.json(topTenUsers);
});

exports.api = functions.https.onRequest(app);

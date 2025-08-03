# 🎯 Intern Portal – Donation Dashboard

A minimal web application that simulates a donation tracking system for interns using referral codes. Built with **HTML**, **CSS**, **JavaScript**, and **Firebase Functions**.

---

## 🚀 Features

### 📌 Frontend (HTML/CSS/JS)

- 🧑 Dummy **Login Page** (no real authentication)
- 📊 **Dashboard** showing:
  - Intern's name (Login using `u001`, `u002`, ..., `u012` as the usernames)
  - Referral code
  - Total donations raised
  - Rewards/unlockables (static)
- 🏆 **Leaderboard Page** (dummy data)

### 📌 Backend (Firebase Functions)

- 🔁 Dummy **REST API** using Express.js
- Returns static user info:
  - Intern name
  - Referral code
  - Donation amount

---

## 🛠 Tech Stack

| Layer    | Technology                |
| -------- | ------------------------- |
| Frontend | HTML, CSS, JavaScript     |
| Backend  | Node.js, Express.js       |
| Hosting  | Firebase Hosting          |
| Styling  | Google Fonts + Custom CSS |

---

## 🧱 Folder Structure

```
project-root/
├── public/           # Frontend files
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
├── functions/        # Firebase Functions (backend)
│   └── index.js
├── .firebaserc
├── firebase.json
└── README.md
```

---

## 📦 Setup Instructions

### ✅ Prerequisites

- [Node.js](https://nodejs.org)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- Firebase account & project created

---

### 🔧 Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/Ritushree12/she-can-foundation-intern.git
cd she-can-foundation-intern

# 2. Install backend dependencies (inside Firebase Functions folder)
cd functions
npm install

# 3. Start the local emulator to test backend APIs
firebase emulators:start

# 4. Open a new terminal tab/window and go back to the root project folder
cd ..

# 5. Serve the frontend locally (from /public)
firebase serve

```

---

## 🚀 Deployment

```bash
# Deploy backend (functions)
firebase deploy --only functions

# Deploy frontend (hosting)
firebase deploy --only hosting
```

---

## 🌐 Live Demo

🔗 [Click here to view the deployed website](https://she-can-foundation-intern.web.app)

> No authentication required. Anyone with the link can access the dashboard.

---

---

## 🧪 Demo Instructions

To test the Intern Portal:

- 🧑 Visit the [Live Site](https://she-can-foundation-intern.web.app)
- 🔐 Use one of the following dummy user IDs on the login page:

  ```
  u001, u002, u003, ..., u012
  ```

- ✅ No password or authentication is needed
- 📊 The dashboard and leaderboard will display simulated data

---

## 🙋 Author

**Ritushree L**  
🔗 [GitHub](https://github.com/Ritushree12)  
📧 rithusri2000@gmail.com

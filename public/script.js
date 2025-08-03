const BASE_API_URL =
  "https://us-central1-she-can-foundation-intern.cloudfunctions.net/api";

function login() {
  const loader = document.getElementById("loader");
  loader.style.display = "block";

  const userId = document.getElementById("name-input").value.trim();

  if (userId === "") {
    alert("Please enter your userID.");
    return;
  }

  fetch(`${BASE_API_URL}/user/${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("User not found.");
      }
      return response.json();
    })
    .then((user) => {
      // Fill dashboard data
      document.getElementById("intern-name").textContent = user.name;
      document.getElementById("referral-code").textContent = user.referralCode;
      document.getElementById("donation-amount").textContent = user.donations;

      // Show dashboard and leaderboard
      loader.style.display = "none";
      document.getElementById("login-page").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      document.getElementById("leaderboard").style.display = "block";
      document.getElementsByTagName("header")[0].style.display = "flex";

      loadLeaderboard();
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert(error.message);
      loader.style.display = "none";
    });
}
function loadLeaderboard() {
  fetch(`${BASE_API_URL}/leaderboard`)
    .then((res) => res.json())
    .then((users) => {
      const userList = document.querySelector(".user-list");
      userList.innerHTML = "";

      // Header row
      const header = document.createElement("li");
      header.innerHTML = `
        <strong>Rank</strong>
        <strong>Name</strong>
        <strong>Donations</strong>
        <strong>Badge</strong>
      `;
      userList.appendChild(header);

      // User rows
      users.forEach((user, index) => {
        let badge = "-";
        if (user.donations >= 5000) {
          badge = "&#11088; Gold"; // ⭐
        } else if (user.donations >= 2000) {
          badge = "&#127881; Silver"; // 🎉
        } else if (user.donations >= 500) {
          badge = "&#127873; Bronze"; // 🎁
        }

        const li = document.createElement("li");
        li.innerHTML = `
          <span>${index + 1}</span>
          <span>${user.name}</span>
          <span>₹${user.donations}</span>
          <span>${badge}</span>
        `;
        userList.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Failed to load leaderboard:", error);
    });
}

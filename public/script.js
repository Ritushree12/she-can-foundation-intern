const BASE_API_URL =
  "https://us-central1-she-can-foundation-intern.cloudfunctions.net/api";

function login() {
  const loader = document.getElementById("loader");

  const userId = document.getElementById("name-input").value.trim();

  if (userId === "") {
    checkError("Enter a valid user ID");
    return;
  }
  loader.style.display = "block";
  document.getElementById("loginButton").disabled = true;

  fetch(`${BASE_API_URL}/user/${userId}`)
    .then((response) =>
      response.json().then((data) => ({ ok: response.ok, data }))
    )
    .then(({ ok, data }) => {
      if (!ok) {
        checkError(data.errorMessage || "Unknown error");
        loader.style.display = "none";
        document.getElementById("loginButton").disabled = false;

        return;
      }

      document.getElementById("intern-name").textContent = data.name;
      document.getElementById("referral-code").textContent = data.referralCode;
      document.getElementById("donation-amount").textContent = data.donations;

      loader.style.display = "none";
      document.getElementById("loginButton").disabled = false;
      document.getElementById("login-page").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      document.getElementById("leaderboard").style.display = "block";
      document.getElementsByTagName("header")[0].style.display = "flex";

      loadLeaderboard();
    })
    .catch((error) => {
      console.error("Network error:", error);
      alert("Network error or backend not reachable.");
      loader.style.display = "none";
      document.getElementById("loginButton").disabled = false;
    });
}
function loadLeaderboard() {
  fetch(`${BASE_API_URL}/leaderboard`)
    .then((res) => res.json())
    .then((users) => {
      const userList = document.querySelector(".user-list");
      userList.innerHTML = "";

      const header = document.createElement("li");
      header.innerHTML = `
        <strong>Rank</strong>
        <strong>Name</strong>
        <strong>Donations</strong>
        <strong>Badge</strong>
      `;
      userList.appendChild(header);

      users.forEach((user, index) => {
        let badge = "-";
        if (user.donations >= 5000) {
          badge = "🥇 Gold";
        } else if (user.donations >= 2000) {
          badge = "🥈 Silver";
        } else if (user.donations >= 500) {
          badge = "🥉 Bronze";
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

document
  .getElementById("name-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      login();
    }
  });

function checkError(msg) {
  if (msg) {
    document.getElementById("error-msg").style.display = "block";
    document.getElementById("name-input").style.border = "1px solid red";

    document.getElementById("error-msg").textContent = msg;
  } else {
    document.getElementById("error-msg").style.display = "none";
  }
}

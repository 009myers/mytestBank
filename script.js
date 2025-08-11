
  // Demo credentials (replace or fetch securely in real apps)
  const demoUsers = {
    "admin": "Choiceschanges@bellsouth.net",
    "becuUser": "100989"
  };

  document.getElementById("loginBtn").addEventListener("click", function() {
    const userId = document.getElementById("userId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (demoUsers[userId] && demoUsers[userId] === password) {
      alert("✅ Login successful!");
      // Redirect or show user dashboard here
    } else {
      alert("❌ Invalid User ID or Password.");
    }
  });

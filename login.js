document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Username dan Password harus diisi!");
    return;
  }

  alert("Login berhasil!\nSelamat datang, " + username);

  window.location.href = "welcome.html";
});
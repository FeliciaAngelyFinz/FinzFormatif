document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  if (password !== confirmPassword) {
    alert("Password dan Konfirmasi Password tidak sama!");
    return;
  }

  alert("Registrasi berhasil!\nSelamat datang, " + username);

  window.location.href = "home.html";
});

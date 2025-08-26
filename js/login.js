let pickEmail = document.getElementById("email");
let pickPassword = document.getElementById("password");

function login() {
  let email = pickEmail.value;
  let password = pickPassword.value;

  window.location.href = "telaNotas/Notas.html";
}

let form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  login();
});
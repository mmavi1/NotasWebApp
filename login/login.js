   const form = document.getElementById("loginForm");
form.addEventListener("submit", function(event){
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (email ===""|| senha ==="") {
    alert("Por favor,preencha todos os campos!");
  } else {
    window.location.href = "../../notas/listas.html";
  }
});

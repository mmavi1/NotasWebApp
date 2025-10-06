function validarCadastro() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmar = document.getElementById("confirmarSenha").value;

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return false;
  }

  const erros = [];
  if (senha.length < 8) {
    erros.push("A senha deve ter pelo menos 8 caracteres.");
  }
  if (!/[A-Z]/.test(senha)) {
    erros.push("A senha deve ter pelo menos uma letra maiúscula.");
  }
  if (!/[a-z]/.test(senha)) {
    erros.push("A senha deve ter pelo menos uma letra minúscula.");
  }
  if (!/[^A-Za-z0-9]/.test(senha)) {
    erros.push("A senha deve ter pelo menos um caractere especial.");
  }

  if (erros.length > 0) {
    alert(erros.join("\n"));
    return false;
  }

  localStorage.setItem("usuarioNome", nome);
  localStorage.setItem("usuarioEmail", email);
  localStorage.setItem("usuarioSenha", senha);

  alert("Conta criada com sucesso!\nBem-vindo, " + nome);
  window.location.href = "index.html";
  return true;
      }

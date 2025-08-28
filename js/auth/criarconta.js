 function validarCadastro() {
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const confirmar = document.getElementById("confirmarSenha").value;

      if (senha !== confirmar) {
        alert("As senhas não coincidem!");
        return false;
      }

      localStorage.setItem("usuarioNome", nome);
      localStorage.setItem("usuarioEmail", email);
      localStorage.setItem("usuarioSenha", senha);

      alert("Conta criada com sucesso!\nBem-vindo, " + nome);

      window.location.href = "index.html";
      return false;
    }
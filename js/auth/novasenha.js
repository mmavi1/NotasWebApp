const novaSenhaForm = document.getElementById('novaSenhaForm');

    novaSenhaForm.addEventListener('submit', function(e){
      e.preventDefault();

      const email = document.getElementById('email').value;
      const novaSenha = document.getElementById('novaSenha').value;
      const confirmar = document.getElementById('confirmarSenha').value;

      if(novaSenha !== confirmar){
        alert("As senhas não coincidem!");
        return;
      }

      localStorage.setItem("usuarioEmail", email);
      localStorage.setItem("usuarioSenha", novaSenha);

      alert("Senha redefinida com sucesso!");
      window.location.href = "index.html";
    });
    
    
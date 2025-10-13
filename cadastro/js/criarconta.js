const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const continuarBotao = document.getElementById('botao');

const passwordInput = document.getElementById('password');
const confirmaInput = document.getElementById('confirmarSenha');

const items = {
  especial: document.getElementById('item-especial'),
  maiuscula: document.getElementById('item-maiuscula'),
  numero: document.getElementById('item-numero'),
  tamanho: document.getElementById('item-tamanho'),
  match: document.getElementById('item-match')
};



continuarBotao.addEventListener('click', function (event) {
  console.log("Clicou no botão");
  let estadoSenha = todosItensOk();
  event.preventDefault();
  const nome = nomeInput.value;
  const email = emailInput.value;
  const senha = passwordInput.value;
  const dados = {
    nome: nome,
    email: email,
    password: senha
  }
  
  if (estadoSenha && validateEmail(email) && nome.length > 0) {
    cadastrar(dados);
  } else {
    alert("Por favor, verifique os dados inseridos.");
  }

}
);
function cadastrar(usuario) {
  const urlFinal = urlServidor + "/auth/register";

  fetch(urlFinal, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }
      console.log(usuario);
      return response.json();
    })
    .then(data => {
      console.log("Usuário cadastrado:", data);
      window.location.href = "../../index.html";
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Ocorreu um erro ao cadastrar.");
    });
}



function validar(){
  const s = passwordInput.value;
  const regras = {
    especial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(s),
    maiuscula: /[A-ZÀ-Ý]/.test(s),
    numero: /\d/.test(s),
    tamanho: s.length >= 8,
    match: s.length > 0 && s === confirmaInput.value
  };

  setState(items.especial, regras.especial);
  setState(items.maiuscula, regras.maiuscula);
  setState(items.numero, regras.numero);
  setState(items.tamanho, regras.tamanho);
  setState(items.match, regras.match);

  // for (let i = 0; i < Object.keys(items).length; i++){
  //   console.log(Object.values(items)[i].classList.contains('ok'));
  // }

}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function todosItensOk() {
  return Object.values(items).every(item => item.classList.contains('ok'));
}


function setState(el, ok){
  if(ok){
    el.classList.remove('fail');
    el.classList.add('ok');
    el.querySelector('.symbol').textContent = '✓';


  } else {
    el.classList.remove('ok');
    el.classList.add('fail');
    el.querySelector('.symbol').textContent = '✗';



  
  }
}

passwordInput.addEventListener('input', validar);
confirmaInput.addEventListener('input', validar);
validar();
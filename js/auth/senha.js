const senhaInput = document.getElementById('senha');
const confirmaInput = document.getElementById('confirmarSenha');
const cadastrarBtn = document.getElementById('cadastrar');

const items = {
  especial: document.getElementById('item-especial'),
  maiuscula: document.getElementById('item-maiuscula'),
  numero: document.getElementById('item-numero'),
  tamanho: document.getElementById('item-tamanho'),
  match: document.getElementById('item-match')
};

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

function validar(){
  const s = senhaInput.value;
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


}

senhaInput.addEventListener('input', validar);
confirmaInput.addEventListener('input', validar);
validar();
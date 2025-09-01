let titulos = JSON.parse(localStorage.getItem("titulos")) || [];

function salvarTitulos() {
  localStorage.setItem("titulos", JSON.stringify(titulos));
}

function criarTitulo() {
  const nome = prompt("Digite o Título");
  if (!nome) return;

  if (titulos.includes(nome)) {
    alert("Este título já existe!");
    return;
  }
  titulos.push(nome);
  salvarTitulos();
  renderizarTitulo();
}


function excluirTitulo(nome) {
  if (confirm(`Deseja excluir "${nome}"?`)) {
    titulos = titulos.filter(t => t !== nome);
    localStorage.removeItem(`bloco_${nome}`);
    salvarTitulos();
    renderizarTitulo();

  }
}

function renderizarTitulo() {
  const area = document.getElementById("areaTitulos");
  area.innerHTML = "";

  titulos.forEach(nome => {
    const div = document.createElement("div");
    div.classList.add("bloco");

    const link = document.createElement("a");
    link.textContent = nome;
    link.href = `bloco.html?titulo=${encodeURIComponent(nome)}`;
    link.classList.add("titulo-link");

    const descricao = document.createElement("a");
    descricao.textContent = localStorage.getItem(`bloco_${nome}`)
    descricao.classList.add("descricao-link")

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.classList.add("btn-excluir");
    btnExcluir.onclick = () => excluirTitulo(nome);

    div.appendChild(link);
    div.appendChild(descricao);
    div.appendChild(btnExcluir);
    area.appendChild(div);

  });
}
renderizarTitulo();
document.getElementById("btnCriar").addEventListener("click", criarTitulo);
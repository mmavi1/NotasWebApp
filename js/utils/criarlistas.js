const url = "https://68c0af890b196b9ce1c4d908.mockapi.io/";
const endpoint = url + "items";

const area = document.getElementById("areaTitulos");
area.innerHTML = "";

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


function excluirLocalStorageTitulo(nome) {
  if (confirm(`Deseja excluir "${nome}"?`)) {
    titulos = titulos.filter(t => t !== nome);
    localStorage.removeItem(`bloco_${nome}`);
    salvarTitulos();
    renderizarTitulo();
  }
}


function excluirApiItem(id, descricao) {
  if (confirm(`Deseja excluir "${descricao}" da API?`)) {
    fetch(endpoint + "/" + id, { method: "DELETE" })
      .then(response => {
        if (!response.ok) throw new Error("Erro ao excluir");
        renderizarTitulo();
      })
      .catch(error => console.error(error));
  }
}


function renderizarTitulo() {
  area.innerHTML = ""; 
 
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na requisição: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("bloco");

        const link = document.createElement("a");
        link.textContent = item.descricao;
        link.href = `bloco.html?titulo=${encodeURIComponent(item.descricao)}`;
        link.classList.add("titulo-link");

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.onclick = () => excluirApiItem(item.id, item.descricao);

        div.appendChild(link);
        div.appendChild(btnExcluir);
        area.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Erro:", error);
    });
}

renderizarTitulo();



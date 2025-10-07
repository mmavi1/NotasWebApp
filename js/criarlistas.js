const url = "https://notas-api-qvzz.onrender.com";
const endpointItems = url + "/usuarios";

const area = document.getElementById("areaTitulos");

function criarItem() {
  const novoItem = document.getElementById("conteudo").value; // melhor usar .value se for <input> ou <textarea>
  console.log(novoItem);

  const novoUsuario = {
    "descricao": novoItem,
    "nome": novoItem, // <<< adicionando o nome para aparecer na tela
    "dataLimite": "2025-09-23T00:25:34.663Z",
    "usuarioId": 1
  };

  fetch(endpointItems, {
    method: "POST",
    headers: {
      "Content-Type": "application/json" // indicando que está enviando JSON
    },
    body: JSON.stringify(novoUsuario)
  })
    .then(response => {
      if (!response.ok) throw new Error("Erro ao salvar");
      return response.json();
    })
    .then(() => renderizarTitulo())
    .catch(error => console.error(error));
}

function excluirApiItem(id, descricao) {
  if (confirm(`Deseja excluir "${descricao}" da API?`)) {
    let urlFinal = endpointItems + "/" + id;

    fetch(urlFinal, { method: "DELETE" })
      .then(response => {
        if (!response.ok) throw new Error("Erro ao excluir");
        renderizarTitulo();
      })
      .catch(error => console.error(error));
  }
}

function renderizarTitulo() {
  area.innerHTML = ""; // <<< limpa antes de renderizar novamente

  fetch(endpointItems)
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

        // Mostrando o nome (se existir) ou a descrição
        const link = document.createElement("a");
        link.textContent = item.nome || item.descricao;
        link.href = `bloco.html?titulo=${encodeURIComponent(item.nome || item.descricao)}`;
        link.classList.add("titulo-link");

        const btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("btn-excluir");
        btnExcluir.onclick = () => excluirApiItem(item.id, item.nome || item.descricao);

        div.appendChild(link);
        div.appendChild(btnExcluir);
        area.appendChild(div);
      });
    })
    .catch(error => console.error("Erro:", error));
}

renderizarTitulo();

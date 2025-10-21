const url = "https://notas-api-qvzz.onrender.com";
const endpointItems = url + "/itens";
const params = new URLSearchParams(window.location.search);
const titulo = params.get('titulo');
const tituloElem = document.getElementById('tituloLista');
if (titulo) tituloElem.textContent = ` 📌  ${titulo}`;

const textAreaElements = document.getElementById('conteudo');

function salvar() {
  const descricaoDigitada = document.getElementById("conteudo").value;
  criarItem(descricaoDigitada);
}

function criarItem(descricao) {
  console.log("passou aqui")
  //descobre a hora de agr
  const agr = new Date();

  const novoItem = {
      "descricao": descricao,
      "dataLimite": agr.toISOString(),
      "usuarioId": 46
  };

  fetch(endpointItems, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(novoItem)
  })
      .then(response => {
          if (!response.ok) throw new Error("Erro ao salvar");
          return response.json();
      })
      .then(() => renderizarTitulo())
      .catch(error => console.error(error));
}
function carregar() {
  const texto = localStorage.getItem(`bloco_${titulo}`);
  if (texto) textAreaElements.value = texto;
}
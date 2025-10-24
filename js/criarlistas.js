const url = "https://notas-api-qvzz.onrender.com";
const endpointItems = url + "/itens";

const area = document.getElementById("areaTitulos");

function criarItem() {
    //const itemCriado = document.getElementById("conteudo").value;
    //console.log(itemCriado);

    //descobre a hora de agr
    const agr = new Date();

    const novoItem = {
        "descricao": "bolo",
        "dataLimite": agr.toDateString(),
        "usuarioId": 48
    };

    fetch(endpointItems, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemCriado)
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
                link.href = `../editar/bloco.html?titulo=${encodeURIComponent(item.nome || item.descricao)}`;
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

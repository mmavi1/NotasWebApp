let blocos = JSON.parse(localStorage.getItem("blocos")) || [];

    function salvarBlocos() {
      localStorage.setItem("blocos", JSON.stringify(blocos));
    }

    function criarBloco(nome = "", texto = "") {
      let bloco = {
        id: Date.now(),
        titulo: nome,
        conteudo: texto
      };
      blocos.push(bloco);
      salvarBlocos();
      renderizar();
    }

    function atualizarBloco(id, campo, valor) {
      let bloco = blocos.find(b => b.id === id);
      if (bloco) {
        bloco[campo] = valor;
        salvarBlocos();
      }
    }

    function excluirBloco(id) {
      blocos = blocos.filter(b => b.id !== id);
      salvarBlocos();
      renderizar();
    }

    function renderizar() {
      let area = document.getElementById("areaBlocos");
      area.innerHTML = "";
      blocos.forEach(bloco => {
        let div = document.createElement("div");
        div.classList.add("bloco");
        div.innerHTML = `
          <input class="titulo-input" type="text" placeholder="Nome do bloco" value="${bloco.titulo}">
          <div class="conteudo" contenteditable="true">${bloco.conteudo}</div>
          <div class="acoes">
            <button onclick="excluirBloco(${bloco.id})" class="btn-excluir">🗑 Excluir</button>
          </div>
        `;

        div.querySelector(".titulo-input").addEventListener("input", (e) => {
          atualizarBloco(bloco.id, "titulo", e.target.value);
        });

        div.querySelector(".conteudo").addEventListener("input", (e) => {
          atualizarBloco(bloco.id, "conteudo", e.target.innerText);
        });

        area.appendChild(div);
      });
    }

    renderizar();
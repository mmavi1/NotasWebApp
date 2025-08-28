    const params = new URLSearchParams(window.location.search);
    const titulo = params.get('titulo');
    const tituloElem = document.getElementById('tituloLista');
    if(titulo) tituloElem.textContent = `📒 ${titulo}`;

    const conteudoElem = document.getElementById('conteudo');

    function salvar() {
      localStorage.setItem(`bloco_${titulo}`, conteudoElem.innerHTML);
      alert("Anotação salva!");
    }

    function carregar() {
      const texto = localStorage.getItem(`bloco_${titulo}`);
      if(texto) conteudoElem.innerHTML = texto;
    }

    carregar();
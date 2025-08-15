## 🖼️ Telas Incluídas

O projeto apresenta **5 interfaces** dispostas lado a lado:

### 1️⃣ Tela de Login
- **Elementos**:
  - Avatar (ícone de perfil)
  - Nome do usuário
  - Campo de e-mail
  - Botão "Entrar"
- **Fluxo**:
  - Primeira tela ao abrir o app
  - Botão "Entrar" leva para a lista principal

---

### 2️⃣ Lista de Itens (Tela Principal)
- **Elementos**:
  - Barra superior com menu, busca e botão de adicionar
  - Lista de categorias (ex.: Tarefas Diárias, Trabalhos Escolares, Lista de Compras)
  - Botão de lixeira flutuante
- **Fluxo**:
  - Permite visualizar todas as categorias
  - Ícones de estrela indicam favoritos

---

### 3️⃣ Confirmação de Exclusão (Modo Escuro)
- **Elementos**:
  - Mesma estrutura da tela de lista, mas com tema escuro
  - Sobreposição (`overlay`) com caixa de confirmação
  - Botões "Sim" e "Não"
- **Fluxo**:
  - Acionado ao clicar para apagar um item

---

### 4️⃣ Exibição de Item
- **Elementos**:
  - Data e hora no canto superior
  - Título em destaque
  - Descrição do item
  - Botões de ação (Editar e Apagar)
- **Fluxo**:
  - Visualizar detalhes de um item específico

---

### 5️⃣ Menu Lateral
- **Elementos**:
  - Avatar (ícone de perfil)
  - Opção de alternar **Modo Escuro** (OFF)
  - Favoritos
  - Botão "Sair"
- **Fluxo**:
  - Acessado pelo ícone de menu na tela principal

---

## 🎨 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica das telas
- **CSS3** – Estilização responsiva, modo claro/escuro, botões e layout
- **Grid Layout** – Organização das telas lado a lado
- **Flexbox** – Alinhamento interno dos elementos

---

## 📋 Características do Protótipo

- Cada interface no pacote/pasta especifico
- Suporte visual a **modo escuro** (exemplo na Tela 3)
- Uso de variáveis CSS para fácil personalização de cores e dimensões
- O Css deve ficar fora do arquivo html num arquivo .css sendo apenas chamado por meta dados no HEAD


// --- Modo Escuro / Claro Persistente --- //

function toggleDark() {

  document.body.classList.toggle('dark');

  // Salva a preferência
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkMode', isDark ? 'on' : 'off');
}

// Aplica automaticamente o modo salvo
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "on") {
    document.body.classList.add("dark");
  }
});


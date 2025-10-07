let url = "https://68b2430aa860fe41fd60a6c1.mockapi.io/";
let endpoint = url + "usuario";

// Fazendo um GET
fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }
    return response.json(); // Converte para JSON
  })
  .then(data => {
    console.log("Resposta da API:", data);
  })
  .catch(error => {
    console.error("Erro:", error);
  });
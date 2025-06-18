class Carro {
  constructor(modelo, ano, cambio, kilometro, combustivel, preco) {
    this.modelo = modelo;
    this.ano = ano;
    this.cambio = cambio;
    this.kilometro = kilometro;
    this.combustivel = combustivel;
    this.preco = preco;
  }
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleAcessibilidade() {
  document.body.classList.toggle("acessibilidade");
}
function buscarCarro() {
  const input = document.getElementById("busca").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const titulo = card.querySelector("h3").textContent.toLowerCase();

    // Exibe o card se o modelo contiver o texto digitado
    if (titulo.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Também ativa a busca ao pressionar Enter
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("busca").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      buscarCarro();
    }
  });
});

function erro() {
  alert("Você já está na página desejada!");
}
function enviarFormulario() {
  alert("Formulário enviado com sucesso!");
}

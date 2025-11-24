const botaoBusca = document.getElementById("botao-busca");
let cardContainer = document.querySelector(".card-container");
let dados = [];

async function iniciarBusca() {
  const resposta = await fetch("data.json");
  dados = await resposta.json();
}

function renderizarCards(cards) {
  cardContainer.innerHTML = "";

  for (let dado of cards) {
    let article = document.createElement("article");
    article.classList.add("card");
    article.innerHTML = `
      <h2>${dado.nome}</h2>
      <p>Ano: ${dado.ano}</p>
      <p>Diretor: ${dado.diretor}</p>
      <p>Gênero: ${dado.genero}</p>
      <a href="${dado.trailer}" target="_blank">Veja o trailer</a>
    `;
    cardContainer.appendChild(article);
  }
}

botaoBusca.addEventListener("click", () => {
  let texto = document.getElementById("busca").value.toLowerCase();

  let filtrados = dados.filter((filme) =>
    filme.nome.toLowerCase().includes(texto)
  );

  renderizarCards(filtrados);
});

iniciarBusca();

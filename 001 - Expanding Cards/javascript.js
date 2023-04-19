
// seleciona todos os elementos com a classe "card"
var cards = document.querySelectorAll(".card");

// adiciona um evento de clique a cada elemento
cards.forEach(function(card) {
  card.addEventListener("click", function() {
    // verifica se o elemento clicado não possui a classe "active"
    if (!this.classList.contains("active")) {
      // remove a classe "active" do elemento que a possui atualmente
      document.querySelector(".card.active").classList.remove("active");
      // adiciona a classe "active" ao elemento clicado
      this.classList.add("active");
    }
  });
});
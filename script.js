// NÃO MEXER
window.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll("main.container-input button:not(#button-voltar2)");
  const botaoVoltar = document.getElementById("button-voltar2");
  const filmes = document.getElementById("container-filmes");
  const filmesContainer = document.getElementById("filmes");
  const cardsFilmes = document.querySelectorAll(".filme-card");

  const botoesFilmes = [
    document.getElementById("filme1"),
    document.getElementById("filme2"),
    document.getElementById("filme3"),
    document.getElementById("filme4"),
    document.getElementById("filme5")
  ];

  const titulosFilmes = [
    document.getElementById("titulo1"),
    document.getElementById("titulo2"),
    document.getElementById("titulo3"),
    document.getElementById("titulo4"),
    document.getElementById("titulo5")
  ];

  const generos = {
    terror: [
      "imagens/terror1.jpeg",
      "imagens/terror2.jpeg",
      "imagens/terror3.jpeg",
      "imagens/terror4.jpeg",
      "imagens/terror5.jpeg"
    ],
    acao: [
      "imagens/ação1.PNG",
      "imagens/ação2.PNG",
      "imagens/ação3.PNG",
      "imagens/ação4.PNG",
      "imagens/ação5.PNG"
    ],
    comedia: [
      "imagens/comedia1.PNG",
      "imagens/comedia2.PNG",
      "imagens/comedia3.PNG", 
      "imagens/comedia4.PNG", 
      "imagens/comedia5.PNG"
    ],
    drama: [
      "imagens/drama1.PNG", 
      "imagens/drama2.PNG", 
      "imagens/drama3.PNG", 
      "imagens/drama4.PNG", 
      "imagens/drama5.PNG"
    ],
    romance: [
      "imagens/romance1.jpeg",
      "imagens/romance2.jpeg",
      "imagens/romance3.jpeg",
      "imagens/romance4.jpeg",
      "imagens/romance5.jpeg"
    ],
    ficcao: [
      "imagens/ficcao1.jpeg",
      "imagens/ficcao2.jpeg",
      "imagens/ficcao3.jpeg",
      "imagens/ficcao4.jpeg",
      "imagens/ficcao5.jpeg"
    ],
    suspense: [
      "imagens/suspense1.jpeg",
      "imagens/suspense2.jpeg",
      "imagens/suspense3.jpeg", 
      "imagens/suspense4.jpeg", 
      "imagens/suspense5.jpeg"
    ],
    infantil: [
      "imagens/infantil1.jpeg", 
      "imagens/infantil2.jpeg", 
      "imagens/infantil3.jpeg", 
      "imagens/infantil4.jpeg", 
      "imagens/infantil5.jpeg"
    ]
  };

  const titulosPorGenero = {
    terror: [
      "Cuidado Com Quem Chama",
      "Sobrenatural",
      "O Homem Do Saco",
      "Megan",
      "Invocação Do Mal"
    ],
    acao: [
      "O Protetor",
      "Gladiador",
      "Missão Impossível",
      "Mad Max",
      "John Wick"
    ],
    comedia: [
      "As Branquelas", 
      "Superbad", 
      "Se Beber, Não Case", 
      "Deadpool", 
      "Gente Grande"
    ],
    drama: [
      "À Espera de um Milagre", 
      "O Quarto de Jack", 
      "A Teoria de Tudo", 
      "O Pianista", 
      "História de um Casamento"
    ],
    romance: [
      "Uma Comédia Nada Romântica",
      "Uma Ideia de Você",
      "Simplesmente Acontece",
      "Como Perder um Homem em 10 Dias",
      "Todo Tempo Que Temos"
    ],
    ficcao: [
      "Interestelar",
      "Vida",
      "Lucy",
      "A Chegada",
      "Chappie"
    ],
    suspense: [
      "Um Lugar Silencioso", 
      "It - A Coisa", 
      "Corra!", 
      "A Autópsia", 
      "O Quarto dos Desejos"
    ],
    infantil: [
      "Moana 2", 
      "Arthur e os Minimoys", 
      "Scooby-Doo", 
      "A Fantástica Fábrica de Chocolate", 
      "Meu Malvado Favorito 4"
    ]
  };

  let primeiraVez = true;
  let categoriaAtual = "";

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const categoria = botao.id;
      const imagens = generos[categoria];
      const titulos = titulosPorGenero[categoria];

      if (primeiraVez) {
        filmes.style.display = "flex";
        filmes.classList.remove("esconder");
        void filmes.offsetWidth; // reinicia a transição
        filmes.classList.add("mostrar");

        botaoVoltar.style.display = "inline-block";
        primeiraVez = false;
        atualizarFilmes(imagens, titulos);
        cardsFilmes.forEach(card => card.classList.add("aparecer-filmes"));
      } else if (categoria !== categoriaAtual) {
        cardsFilmes.forEach(card => {
          card.classList.remove("entrar");
          card.classList.add("sair");
        });

        setTimeout(() => {
          atualizarFilmes(imagens, titulos);
          cardsFilmes.forEach(card => {
            card.classList.remove("sair");
            card.classList.add("entrar");
          });
        }, 250);
      }

      categoriaAtual = categoria;
    });
  });

  botaoVoltar.addEventListener("click", () => {
    filmes.classList.remove("mostrar");
    filmes.classList.add("esconder");

    setTimeout(() => {
      filmes.style.display = "none";
      filmes.classList.remove("esconder");
      botaoVoltar.style.display = "none";
      primeiraVez = true;
      categoriaAtual = "";
    }, 500); // deve coincidir com o transition do CSS
  });

  function atualizarFilmes(imagens, titulos) {
    botoesFilmes.forEach((btn, i) => {
      btn.style.backgroundImage = imagens[i] ? `url('${imagens[i]}')` : "";
    });

    titulosFilmes.forEach((tituloElem, i) => {
      tituloElem.textContent = titulos[i] || "";
    });
  }

  cardsFilmes.forEach(card => {
    card.addEventListener("animationend", () => {
      card.classList.remove("aparecer-filmes", "sair", "entrar");
    });
  });
});
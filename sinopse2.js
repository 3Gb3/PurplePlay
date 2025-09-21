document.addEventListener("DOMContentLoaded", function () {
  const botoesGenero = document.querySelectorAll(".container-input button");
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

  const modal = document.getElementById("janela-modal");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalSinopse = document.getElementById("modal-sinopse");
  const modalDuracao = document.getElementById("modal-duracao");
  const modalTrailer = document.getElementById("modal-trailer");
  const fechar = document.getElementById("fechar");

  const filmesPorGenero = {
    terror: [
    {
      titulo: "Cuidado Com Quem Chama",
      sinopse: "Dois irmãos, ao brincarem com forças ocultas, acabam despertando uma entidade sinistra. O que parecia apenas uma brincadeira sobrenatural se transforma em um pesadelo real, onde cada escolha pode selar seus destinos.",
      duracao: "1h 35min",
      trailer: "https://www.youtube.com/embed/Qt_sbyJbFDE"
    },
    {
      titulo: "Sobrenatural",
      sinopse: "Uma família feliz vê sua vida virar um caos quando o filho entra em um coma misterioso. Ao buscarem respostas, descobrem que ele está preso em uma dimensão cheia de espíritos malignos. Eles terão coragem de enfrentá-los?",
      duracao: "1h 43min",
      trailer: "https://www.youtube.com/embed/yHfaQy2vAG0"
    },
    {
      titulo: "O Homem Do Saco",
      sinopse: "Quando crianças começam a desaparecer em um vilarejo isolado, os moradores suspeitam que a lenda do Homem do Saco seja mais real do que parece. Uma jovem decide investigar — e descobre que algumas histórias não devem ser contadas.",
      duracao: "1h 30min",
      trailer: "https://www.youtube.com/embed/OUgOSjkEOw8"
    },
    {
      titulo: "Megan",
      sinopse: "Criada para proteger uma menina órfã, Megan é uma boneca com inteligência artificial que aprende rápido… demais. O que começa como uma inovação tecnológica se transforma em uma ameaça incontrolável, com consequências trágicas.",
      duracao: "1h 42min",
      trailer: "https://www.youtube.com/embed/PA49bHKCRDc"
    },
    {
      titulo: "Invocação do Mal",
      sinopse: "Baseado em fatos reais, um casal de investigadores paranormais enfrenta uma das maiores forças demoníacas de suas carreiras. Dentro de uma casa assombrada, o mal se esconde onde menos se espera — e nem todos sairão vivos.",
      duracao: "1h 52min",
      trailer: "https://www.youtube.com/embed/GQrrXceHn2E"
    }
  ],
  acao: [
    {
      titulo: "O Protetor",
      sinopse: "Um ex-agente da CIA tenta viver uma vida tranquila, mas quando uma jovem é ameaçada por criminosos, ele volta à ativa. Implacável, ele fará justiça com as próprias mãos — custe o que custar.",
      duracao: "2h 12min",
      trailer: "https://www.youtube.com/embed/ivyPCQwBIAg"
    },
    {
      titulo: "Gladiador",
      sinopse: "Traído pelo imperador e condenado à escravidão, um general romano se torna gladiador. Seu desejo de vingança ecoa em cada combate, enquanto luta para derrubar o império e honrar sua família.",
      duracao: "2h 35min",
      trailer: "https://www.youtube.com/embed/cXg62-t8BWs"
    },
    {
      titulo: "Missão Impossível",
      sinopse: "Ethan Hunt lidera uma equipe secreta em uma missão quase suicida para impedir um ataque global. Cheio de reviravoltas e ação frenética, o impossível é apenas o começo.",
      duracao: "2h 10min",
      trailer: "https://www.youtube.com/embed/hGN2_lzq2w4"
    },
    {
      titulo: "Mad Max",
      sinopse: "Em um mundo pós-apocalíptico, onde água e gasolina valem mais que ouro, Max se une a Furiosa em uma fuga explosiva contra um tirano insano. Velocidade, areia e caos definem essa jornada alucinante.",
      duracao: "2h",
      trailer: "https://www.youtube.com/embed/cNQGfWtaKLI"
    },
    {
      titulo: "John Wick",
      sinopse: "Após perder seu cachorro — último presente de sua esposa falecida — John volta ao submundo dos assassinos. Em busca de vingança, ele mostra por que é o mais temido entre todos os matadores.",
      duracao: "1h 41min",
      trailer: "https://www.youtube.com/embed/hPYz9Yz6ekA"
    }
  ],
  comedia: [
    {
      titulo: "As Branquelas",
      sinopse: "Dois agentes do FBI se disfarçam como socialites ricas para resolver um caso de sequestro. Mas manter o disfarce no mundo da alta sociedade não será nada fácil — e rende muitas situações hilárias.",
      duracao: "1h 49min",
      trailer: "https://www.youtube.com/embed/seoJIPLLWp0"
    },
    {
      titulo: "Superbad",
      sinopse: "Dois amigos nerds querem aproveitar ao máximo a última festa do ensino médio. Entre confusões com bebidas, documentos falsos e policiais excêntricos, a noite se torna inesquecível — e desastrosamente engraçada.",
      duracao: "1h 53min",
      trailer: "https://www.youtube.com/embed/HHCmi9qdvcI"
    },
    {
      titulo: "Se Beber, Não Case",
      sinopse: "Um grupo de amigos acorda em Las Vegas após uma noite de festa... sem lembrar de nada. Com o noivo desaparecido e pistas bizarras pelo caminho, eles têm pouco tempo para juntar as peças do quebra-cabeça.",
      duracao: "1h 40min",
      trailer: "https://www.youtube.com/embed/_PvdlXD1yFY"
    },
    {
      titulo: "Deadpool",
      sinopse: "Um mercenário irreverente passa por um experimento que o transforma em um anti-herói com habilidades extraordinárias. Sarcástico, violento e imprevisível, Deadpool redefine o conceito de herói com muito humor ácido.",
      duracao: "1h 48min",
      trailer: "https://www.youtube.com/embed/Q9X-bAE8KTc"
    },
    {
      titulo: "Gente Grande",
      sinopse: "Cinco amigos de infância se reencontram com suas famílias após décadas. Entre brincadeiras nostálgicas e conflitos familiares, eles redescobrem o valor da amizade e da simplicidade da vida.",
      duracao: "1h 42min",
      trailer: "https://www.youtube.com/embed/HKVve_VSz58"
    }
  ],
  drama: [
    {
      titulo: "À Espera de um Milagre",
      sinopse: "Em uma prisão do sul dos EUA, um guarda desenvolve uma ligação com um detento acusado de assassinato, que parece ter poderes milagrosos. Uma história emocionante sobre fé, injustiça e redenção.",
      duracao: "3h 9min",
      trailer: "https://www.youtube.com/embed/EIc_wJtm6AU"
    },
    {
      titulo: "O Quarto de Jack",
      sinopse: "Após anos vivendo em cativeiro, uma mãe e seu filho conseguem escapar. Mas o verdadeiro desafio começa quando precisam se adaptar a um mundo que o menino nunca conheceu — e que ela não reconhece mais.",
      duracao: "1h 58min",
      trailer: "https://www.youtube.com/embed/Ri_eUI7UI8I"
    },
    {
      titulo: "A Teoria de Tudo",
      sinopse: "Baseado na vida do físico Stephen Hawking, o filme mostra sua genialidade, seu romance com Jane e sua luta contra a ELA. Uma jornada inspiradora sobre amor, superação e o poder do conhecimento.",
      duracao: "2h 3min",
      trailer: "https://www.youtube.com/embed/SbUVNHdPE4w"
    },
    {
      titulo: "O Pianista",
      sinopse: "Durante a Segunda Guerra Mundial, um talentoso pianista judeu tenta sobreviver à ocupação nazista em Varsóvia. Sozinho e escondido, ele encontra força na música enquanto o mundo desmorona ao seu redor.",
      duracao: "2h 30min",
      trailer: "https://www.youtube.com/embed/6NXjPxA_z0Q"
    },
    {
      titulo: "História de um Casamento",
      sinopse: "Um diretor de teatro e uma atriz enfrentam um divórcio doloroso, enquanto tentam preservar o amor e a harmonia pela criação do filho. Um retrato sensível das imperfeições do amor moderno.",
      duracao: "2h 17min",
      trailer: "https://www.youtube.com/embed/ZzSomaJAIMc"
    }
  ],
  romance: [
    {
      titulo: "Uma Comédia Nada Romântica",
      sinopse: "Uma paródia debochada sobre os clichês de comédias românticas. Quando um casal improvável se conhece, tudo o que pode dar errado… dá errado — com muita ironia e boas risadas.",
      duracao: "1h 25min",
      trailer: "https://www.youtube.com/embed/J-r8_0vbzwU"
    },
    {
      titulo: "Uma Ideia de Você",
      sinopse: "Solène, uma mãe de 40 anos, se apaixona por Hayes, um astro do pop 16 anos mais novo. Em meio ao julgamento da mídia e conflitos internos, surge um romance inesperado e transformador.",
      duracao: "1h 57min",
      trailer: "https://www.youtube.com/embed/ZeIGZdfmBhg"
    },
    {
      titulo: "Simplesmente Acontece",
      sinopse: "Rosie e Alex são melhores amigos desde crianças, mas a vida insiste em separá-los. Entre idas, vindas e anos de desencontros, eles precisam descobrir se o amor verdadeiro pode resistir ao tempo.",
      duracao: "1h 42min",
      trailer: "https://www.youtube.com/embed/SLHypJkD2OY"
    },
    {
      titulo: "Como Perder um Homem em 10 Dias",
      sinopse: "Ela quer escrever uma matéria sobre como afastar um homem em 10 dias. Ele aposta que conseguirá fazê-la se apaixonar. O resultado? Uma guerra dos sexos cheia de mentiras e surpresas românticas.",
      duracao: "1h 56min",
      trailer: "https://www.youtube.com/embed/3IDeifYOCvM"
    },
    {
      titulo: "Todo Tempo Que Temos",
      sinopse: "Dois jovens apaixonados descobrem que o tempo juntos é limitado por uma doença terminal. Em vez de tristeza, eles vivem intensamente cada segundo, mostrando que o amor é mais forte que o destino.",
      duracao: "1h 41min",
      trailer: "https://www.youtube.com/embed/ZO2ArP6jic0"
    }
  ],
  ficcao: [
    {
      titulo: "Interestelar",
      sinopse: "A Terra está morrendo, e a esperança da humanidade está entre as estrelas. Um grupo de astronautas embarca em uma missão arriscada através de um buraco de minhoca, em busca de um novo lar para a civilização.",
      duracao: "2h 49min",
      trailer: "https://www.youtube.com/embed/i6avfCqKcQo"
    },
    {
      titulo: "Vida",
      sinopse: "Cientistas a bordo da ISS descobrem um organismo alienígena. O que parecia uma descoberta incrível logo se revela uma ameaça mortal, transformando o espaço em um campo de batalha.",
      duracao: "1h 44min",
      trailer: "https://www.youtube.com/embed/51tt_3pVEUk"
    },
    {
      titulo: "Lucy",
      sinopse: "Após ser forçada a transportar uma substância experimental em seu corpo, Lucy desenvolve habilidades mentais sobre-humanas. À medida que seu cérebro atinge o potencial máximo, a humanidade pode estar prestes a mudar para sempre.",
      duracao: "1h 29min",
      trailer: "https://www.youtube.com/embed/hI8TuEc45zw"
    },
    {
      titulo: "A Chegada",
      sinopse: "Quando misteriosas naves alienígenas pousam na Terra, uma linguista é chamada para decifrar sua linguagem. O que ela descobre vai redefinir nossa compreensão de tempo, linguagem e existência.",
      duracao: "1h 56min",
      trailer: "https://www.youtube.com/embed/rNciXGzYZms"
    },
    {
      titulo: "Chappie",
      sinopse: "Em um futuro violento, um robô policial ganha consciência e precisa aprender o que é ser humano — enquanto é caçado por aqueles que o veem como uma ameaça.",
      duracao: "2h",
      trailer: "https://www.youtube.com/embed/kxO4tUF9vN4"
    }
  ],
  suspense: [
    {
      titulo: "Um Lugar Silencioso",
      sinopse: "Num mundo invadido por criaturas que caçam pelo som, uma família vive em completo silêncio para sobreviver. Um simples barulho pode significar morte — e cada passo é uma escolha entre viver ou morrer.",
      duracao: "1h 30min",
      trailer: "https://www.youtube.com/embed/8W6iMmhVDgE"
    },
    {
      titulo: "It - A Coisa",
      sinopse: "Na pacata cidade de Derry, crianças desaparecem misteriosamente. Um grupo de amigos enfrenta seu maior medo: um palhaço maligno que se alimenta de suas maiores angústias.",
      duracao: "2h 15min",
      trailer: "https://www.youtube.com/embed/dD264ZjfKlk"
    },
    {
      titulo: "Corra!",
      sinopse: "Ao visitar a família da namorada, um jovem negro percebe comportamentos estranhos e perturbadores. Conforme segredos obscuros vêm à tona, ele luta desesperadamente pela própria vida.",
      duracao: "1h 44min",
      trailer: "https://www.youtube.com/embed/mDGV5UucTu8"
    },
    {
      titulo: "A Autópsia",
      sinopse: "Ao realizar a autópsia de uma mulher desconhecida, dois legistas descobrem indícios inexplicáveis e perturbadores. O que parece rotina se torna um mergulho em segredos macabros.",
      duracao: "1h 26min",
      trailer: "https://www.youtube.com/embed/IhRT923aGrM"
    },
    {
      titulo: "O Quarto dos Desejos",
      sinopse: "Um casal descobre um quarto mágico capaz de realizar desejos. Mas cada desejo tem seu preço — e logo percebem que brincar com seus maiores anseios pode ter consequências perigosas.",
      duracao: "1h 40min",
      trailer: "https://www.youtube.com/embed/i5s5Yq8qu08"
    }
  ],
  infantil: [
    {
      titulo: "Moana 2",
      sinopse: "A jovem Moana parte em uma nova jornada pelos mares desconhecidos para salvar sua terra, enfrentando desafios místicos e descobrindo segredos do passado.",
      duracao: "1h 45min",
      trailer: "https://www.youtube.com/embed/DFnAWpQicqo"
    },
    {
      titulo: "Arthur e os Minimoys",
      sinopse: "Arthur descobre um mundo mágico habitado por seres minúsculos. Ao encolher e se unir aos Minimoys, embarca numa missão épica para salvar seu quintal — e sua casa.",
      duracao: "1h 34min",
      trailer: "https://www.youtube.com/embed/wHM5r9s5J-k"
    },
    {
      titulo: "Scooby-Doo",
      sinopse: "Scooby, Salsicha e a Mistério S/A desvendam um caso assustador numa ilha turística. Entre fantasmas e armadilhas, a comida nunca foi tão útil!",
      duracao: "1h 26min",
      trailer: "https://www.youtube.com/embed/9mxz3Ma2DLk"
    },
    {
      titulo: "A Fantástica Fábrica de Chocolate",
      sinopse: "Charlie ganha o convite dos sonhos: visitar a fabulosa fábrica de Willy Wonka. Entre invenções malucas e aventuras doces, ele vai descobrir que a bondade é o grande segredo.",
      duracao: "1h 55min",
      trailer: "https://www.youtube.com/embed/beurNg4DGm0"
    },
    {
      titulo: "Meu Malvado Favorito 4",
      sinopse: "Gru retorna com novos desafios como pai e agente secreto. Com os minions ao lado, ele equilibra missões globais e bagunça doméstica — de forma hilária e emocionante.",
      duracao: "1h 30min",
      trailer: "https://www.youtube.com/embed/seSIJf5mhPE"
    }
  ]
  };

  let filmesAtuais = [];

  function atualizarFilmes(genero) {
  filmesAtuais = filmesPorGenero[genero] || [];

  filmesAtuais.forEach((filme, index) => {
    if (titulosFilmes[index]) {
      
      if (titulosFilmes[index].textContent !== filme.titulo) {
        titulosFilmes[index].textContent = filme.titulo;
      }

      if (botoesFilmes[index].style.display !== "inline-block") {
        botoesFilmes[index].style.display = "inline-block";
      }
    }
  });

  
  for (let i = filmesAtuais.length; i < botoesFilmes.length; i++) {
    botoesFilmes[i].style.display = "none";
  }
}


botoesFilmes.forEach((botao, index) => {
  botao.addEventListener("click", () => {
    const filme = filmesAtuais[index];
    if (!filme) return;

    
    if (modalTitulo.textContent !== filme.titulo) {
      modalTitulo.textContent = filme.titulo;
      modalSinopse.textContent = filme.sinopse;
      modalDuracao.textContent = "Duração: " + filme.duracao;
      modalTrailer.src = filme.trailer;
    }
    const botaoSalvar = document.getElementById("btn-salvar-filme");
botaoSalvar.onclick = () => {
  const user = firebase.auth().currentUser;
  if (!user) {
    alert("Faça login para salvar seus filmes.");
    return;
  }

  const email = user.email;
  const filmeSalvo = {
    titulo: filme.titulo,
    sinopse: filme.sinopse,
    duracao: filme.duracao,
    trailer: filme.trailer
  };

  const timestamp = Date.now();
    firebase.database().ref("meusFilmes/" + email.replace(/\W/g, "") + "/" + timestamp).set(filmeSalvo)
      .then(() => alert("Filme salvo com sucesso!"))
      .catch(err => alert("Erro ao salvar filme: " + err.message));
};

    modal.style.display = "flex";
    document.body.classList.add("modal-aberto");
  });
});

fechar.addEventListener("click", () => {
  modal.style.display = "none";
  modalTrailer.removeAttribute("src");
  document.body.classList.remove("modal-aberto");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalTrailer.removeAttribute("src");
    document.body.classList.remove("modal-aberto");
  }
});

botoesGenero.forEach(botao => {
  botao.addEventListener("click", () => atualizarFilmes(botao.id));
});
});
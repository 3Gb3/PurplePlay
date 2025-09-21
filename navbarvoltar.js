const voltar = document.getElementById("avatar4");
voltar.addEventListener("click", () => {
  setTimeout(() => {
      window.location.href = "login.html";
    }, 1000); // Pode ajustar o tempo se mudar a animação
  }
);
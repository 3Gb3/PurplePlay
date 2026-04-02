const voltar = document.getElementById("avatar4");
if (voltar) {
  voltar.addEventListener("click", async () => {
    sessionStorage.removeItem("purpleplay.auth.session");

    try {
      if (typeof firebase !== "undefined" && firebase.auth) {
        await firebase.auth().signOut();
      }
    } catch (error) {
      console.error("Erro ao encerrar sessao:", error);
    }

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000); // Pode ajustar o tempo se mudar a animação
  });
}
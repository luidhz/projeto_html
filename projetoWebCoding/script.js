const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


// JS da Galeria

  function toggleFavorite(button) {
    // Alternar o estado de favoritado
    button.classList.toggle("favorited");
  
    // Adicionar a classe de animação
    button.classList.add("animate");
  
    // Remover a classe de animação após a conclusão
    setTimeout(() => {
      button.classList.remove("animate");
    }, 500); // Duração da animação em milissegundos (0.5s)
  }
  
  
// Fim do JS da Galeria  
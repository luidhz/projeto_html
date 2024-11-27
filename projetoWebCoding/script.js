const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})


// JS da Galeria
const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const star = image.parentElement.querySelector('.star');
        star.classList.toggle('active');
        // Aqui você pode adicionar a lógica para salvar os favoritos (localStorage, banco de dados, etc.)
    });
});
  
// Fim do JS da Galeria  
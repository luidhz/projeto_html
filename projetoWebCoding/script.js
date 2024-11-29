// JS MENU 3 NAS TELAS
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
// FIM JS MENU 3 NAS TELAS


// DARK MODE
const toggleDarkModeButton = document.getElementById('darkModeToggle');
console.log(toggleDarkModeButton); // Verifique se o botão está sendo selecionado corretamente

// Função para aplicar o modo escuro
function applyDarkMode() {
    // Seleciona os elementos onde o dark mode deve ser aplicado
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    const mainElement = document.querySelector('main');
    if (mainElement) mainElement.classList.add('dark-mode');
}

// Função para remover o modo escuro
function removeDarkMode() {
    // Remove as classes de dark mode
    document.body.classList.remove('dark-mode');
    document.querySelector('header').classList.remove('dark-mode');
    const mainElement = document.querySelector('main');
    if (mainElement) mainElement.classList.remove('dark-mode');
}

// Verifica no localStorage se o usuário já escolheu o modo dark
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada');
    const userPreference = localStorage.getItem('theme');
    
    // Aplica o dark mode com base na preferência do usuário armazenada
    if (userPreference === 'dark') {
        applyDarkMode();
        toggleDarkModeButton.textContent = 'Light Mode';
    } else {
        removeDarkMode();
        toggleDarkModeButton.textContent = 'Dark Mode';
    }
});

// Alterna entre os temas claro e escuro
toggleDarkModeButton.addEventListener('click', () => {
    // Verifica se o dark mode está ativo ou não
    if (document.body.classList.contains('dark-mode')) {
        removeDarkMode();
        toggleDarkModeButton.textContent = 'Modo Escuro';
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkMode();
        toggleDarkModeButton.textContent = 'Modo Claro';
        localStorage.setItem('theme', 'dark');
    }
});
//FIM DARK MODE

// Mostrar/Ocultar Senha 
const campoSenha = document.querySelector("#password"); // Ajustado para corresponder ao ID no HTML
const botaoMostrarSenha = document.querySelector("#botaoMostrarSenha");
const legenda = document.querySelector(".legenda");

botaoMostrarSenha.addEventListener("click", function () {
    const estadoAtualDoCampoDeSenha = campoSenha.getAttribute("type") === "password" ? "text" : "password";

    campoSenha.setAttribute("type", estadoAtualDoCampoDeSenha);

    legenda.innerHTML = estadoAtualDoCampoDeSenha === "password" ? "Mostrar Senha" : "Ocultar Senha";
});

// Seleciona o formulário e os campos necessários
const form = document.getElementById('form-cadastro');
const inputs = form.querySelectorAll('input[required]');

// Função para exibir mensagens de erro
function showError(input, message) {
    const formContent = input.parentElement; // Seleciona o container do campo
    formContent.classList.add('error'); // Adiciona a classe de erro
    const errorMessage = formContent.querySelector('.error-message');
    errorMessage.textContent = message; // Define a mensagem de erro
}

// Função para limpar mensagens de erro
function clearError(input) {
    const formContent = input.parentElement;
    formContent.classList.remove('error'); // Remove a classe de erro
    const errorMessage = formContent.querySelector('.error-message');
    errorMessage.textContent = ''; // Limpa a mensagem de erro
}

// Validação em tempo real
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            clearError(input); // Limpa erro se o campo estiver válido
        } else if (input.validity.valueMissing) {
            showError(input, 'Este campo é obrigatório.');
        } else if (input.type === 'email' && input.validity.typeMismatch) {
            showError(input, 'Por favor, insira um e-mail válido.');
        }
    });
});

// Validação ao enviar o formulário
form.addEventListener('submit', (event) => {
    let isValid = true;

    inputs.forEach(input => {
        if (!input.validity.valid) {
            isValid = false;
            if (input.validity.valueMissing) {
                showError(input, 'Este campo é obrigatório.');
            } else if (input.type === 'email' && input.validity.typeMismatch) {
                showError(input, 'Por favor, insira um e-mail válido.');
            }
        }
    });

    if (!isValid) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, corrija os erros antes de enviar.');
    }
});


// Linguagens













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
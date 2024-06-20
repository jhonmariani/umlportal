// Função para verificar o login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de verificação de login
    if (username === 'aluno' && password === 'senha123') {
        window.location.href = 'portal.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
});

// Função para alternar a exibição do dropdown
function toggleDropdown(event) {
    event.preventDefault();
    const parent = event.target.parentElement;
    parent.classList.toggle('active');
}

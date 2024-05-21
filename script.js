const form = document.getElementById('cadastro-form');
const erroMsg = document.getElementById('erro-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (!nome || !email || !senha || !confirmarSenha) {
        erroMsg.textContent = 'Preencha todos os campos!';
        return;
    }

    if (senha !== confirmarSenha) {
        erroMsg.textContent = 'Senhas não conferem!';
        return;
    }

    
    console.log('Formulário enviado com sucesso!');
});
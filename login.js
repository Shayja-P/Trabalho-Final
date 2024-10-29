document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    mensagem.style.display = 'none';

    if (usuario === '' || senha === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.style.display = 'block';
    } else {
        mensagem.textContent = 'Login realizado com sucesso!';
        mensagem.style.color = 'green';
        mensagem.style.display = 'block';
    }
});

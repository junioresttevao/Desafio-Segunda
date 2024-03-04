const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    // Validação de email e senha
    if (!validarEmail(email)) {
        mostrarError('Email inválido');
        return;    
    }
    if (!validarSenha(senha)) {
        mostrarError('Senha inválida');
        return;
    }

    // Simular envio de dados para o login
    // (substitua por sua API de autenticação)
    simularLogin(email, senha)
      .then(() => {
        //Redireciona para página inicial
        window.location.href = 'index.html';
      })
      .catch((error) => {
        mostrarError(error.messagem);
    }); 
});

function validarEmail(email) {
    const regex = /^((^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

function validarSenha(senha) {
    // Regras de validação de senha (mínimo 8 caracteres, maiúscula, minúscula e números
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    return regex.test(senha);
}

function mostrarError(messagem) {
    const errorElement = document.querySelector('.erro');
    errorElement.textContent = mensagem;
    errorElement.classList.add('ativo');

    setTimeout(() => {
        errorElement.classList.remove('ativo');
    }, 3000);
}

// Simulação de login (substitua por sua API de autenticação)
function simularLogin(email, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'seuemail@email.com' && senha === 'suasenha') {
                resolve();
            } else {
              reject(new Error('Email ou senha incorretos'));
            }
        }, 1000);
    });
}
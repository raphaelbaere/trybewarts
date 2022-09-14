const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const buttonSubmit = document.querySelector('#submit-button');

function validaInformacoes() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value.toString() === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function clicaBotao(evento) {
  evento.preventDefault();
  validaInformacoes();
}

buttonSubmit.addEventListener('click', clicaBotao);

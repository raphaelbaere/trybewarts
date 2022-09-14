const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const buttonSubmit = document.querySelector('#submit-button');
const buttonSend = document.getElementById('submit-btn');
const checkBoxAgree = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const pCounter = document.querySelector('#counter');
buttonSend.disabled = true;
function turnCheck() {
  buttonSend.disabled = !this.checked;
}

function contaCaracteres() {
  const contador = 500 - textArea.value.length;
  pCounter.innerHTML = contador.toString();
}

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

textArea.addEventListener('keyup', contaCaracteres);
textArea.addEventListener('keydown', contaCaracteres);
checkBoxAgree.addEventListener('change', turnCheck);

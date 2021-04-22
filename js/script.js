document.getElementById('botaoEnviar').addEventListener('click', validaFormulario)

var nome = (document.getElementById('nomeDaUsuaria').value);
var email= (document.getElementById('emailDaUsuaria').value);
var validaFormulario

function validaFormulario (){
  if (nome.value != '' && 
  email.value != ''){
  alert('Pronto! Você receberá as novidades por e-mail')
  }
  else {
    alert('Por favor, preencha os campos nome e e-mail')
  }
}
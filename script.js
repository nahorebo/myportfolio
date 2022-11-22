//Consultar Repositorios do Git 
const list = document.querySelector('#list1');

function getApiGitHub() {
  fetch('https://api.github.com/users/nahorebo/repos')
    .then(async res => {

      if (!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        let li = document.createElement('li')
        let a  = document.createElement('a')

        list.innerHTML = `
      <a href="${item.html_url}"> ${item.name.toUpperCase()}</a>
      `
        list.appendChild(a)
      })
    }).catch(e => console.log(e))
}
getApiGitHub()
//finalização do API



//formulario validado
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const cellphone = document.getElementById('cellphone')
const mensagem = document.getElementById('mensagem')
const button = document.getElementById('form-button')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs();
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const cellphoneValue = cellphone.value.trim()
  const mensagemValue = mensagem.value.trim()

  if (usernameValue === '') {
    errorValidation(username, 'É necessário informar seu nome')
  }
  else {
    successValidation(username)
  }

  if (emailValue === '') {
    errorValidation(email, 'É necessário informar seu e-mail')
  }
  else if (emailValue.search(`@`) == -1) {
    errorValidation(email)
  }
  else {
    successValidation(email)
  }

  if (cellphoneValue === '') {
    errorValidation(cellphone, 'É necessário informar seu telefone')
  }
  else {
    successValidation(cellphone)
  }

  if (mensagemValue === '') {
    errorValidation(mensagem, 'É necessário informar uma mensagem')
  }
  else {
    successValidation(mensagem)
  }

}

function errorValidation(input, message) {
  const formOption = input.parentElement;
  const small = formOption.querySelector('small')

  small.innerText = message;
  formOption.className = 'form-option error'
}

function successValidation(input) {
  const formOption = input.parentElement;
  formOption.className = 'form-option success'
}
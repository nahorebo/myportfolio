const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const cellphone = document.getElementById('cellphone')
const mensagem = document.getElementById('mensagem')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkInputs()
})

function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const cellphoneValue = cellphone.value.trim()
    const mensagemValue = mensagem.value.trim()

    if (usernameValue === '') 
    {
        errorValidation(username, 'O campo não pode estar vazio')
    } 
    else {
        successValidation(username)
    }

    if (emailValue === '') 
    {
        errorValidation(email, 'O campo não pode estar vazio')
    } 
    else {
      successValidation(email)
    }

    if (cellphoneValue === '') 
    {
        errorValidation(cellphone, 'O campo não pode estar vazio')
    } 
    else {
      successValidation(cellphone)
    }

    if (mensagemValue === '') 
    {
        errorValidation(mensagem, 'O campo não pode estar vazio')
    } 
    else {
      successValidation(mensagem)
    }

}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')

  small.innerText = message;
  formControl.className = 'form-control error'
}
function successValidation(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}
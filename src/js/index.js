const inputSubmit = document.querySelector('#submit')
const inputEmail = document.querySelector('#input-email')
const messageError = document.querySelector('.error')

inputSubmit.addEventListener('click', function() {
    event.preventDefault();
    if (inputEmail.validity.valid === true) {
        messageError.innerHTML = ''
        inputEmail.style.border = '1px solid var(--blue)'
    } else {
        messageError.innerHTML = 'Please, provide a valid email address'
        inputEmail.style.border = '1px solid var(--red)'
    }
})
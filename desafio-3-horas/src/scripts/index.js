const $form = document.querySelector('.form')
const $name = document.querySelector('.name')
const $email = document.querySelector('.email')
const $password = document.querySelector('.password')
const $confirmPassword = document.querySelector('.confirm-password')

$form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const usernameValue = $name.value.trim()
    const emailValue = $email.value.trim()
    const passwordValue = $password.value.trim()
    const passwordtwoValue = $confirmPassword.value.trim()

    if(usernameValue === '') {
        setErrorFor($name, 'Preencha esse campo')
    } else {
        setSuccessFor($name)
    }

    if(emailValue === '') {
        setErrorFor($email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor($email, 'Email inválido')
    } else {
        setSuccessFor($email)
    }

    if(passwordValue === '') {

        setErrorFor($password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor($password, 'A senha deve ter mais que 8 caracteres')
    } else {
        setSuccessFor($password)
    }

    if(passwordtwoValue === '') {
        setErrorFor($confirmPassword, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor($confirmPassword, 'Senhas não estão iguais')
    } else {
        setSuccessFor($confirmPassword)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'box error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'box success'
}

function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
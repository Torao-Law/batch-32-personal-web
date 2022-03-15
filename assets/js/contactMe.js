const myEmail = "dandisyahrullah.12@gmail.com"

function submitForm() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let telp = document.getElementById('input-telp').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    let sendMail = document.createElement('a')
    sendMail.href = `mailto:${myEmail}?subject=${subject}&body=Hello My Name ${name} ${message}`
    sendMail.click()
}

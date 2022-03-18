// Copy API

const CopyButton = document.getElementById("copyButton");
const username = document.getElementById('username').value;

CopyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(username.value)
    console.log("Username copied!")
})

document.getElementById('registerButton').onclick = function() {
    this.value = "Klaar!";
}

// Register Function --> Data wordt opgehaald uit form en naar backend gestuurd

window.onload=function(){
    const form = document.getElementById('register-form')

    form.addEventListener('submit', registerUser)
}

async function registerUser(event) {
    event.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const aangemaakt = document.getElementById('registerButton')

    aangemaakt.classList.add("aangemaakt")

    const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password
        })
    }).then((res) => res.json())

    console.log(res)
    
}


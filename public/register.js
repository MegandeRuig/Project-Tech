// Register Function

window.onload=function(){
    const form = document.getElementById('register-form')

    form.addEventListener('submit', registerUser)
}

async function registerUser(event) {
    event.preventDefault()
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

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
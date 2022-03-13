// Change function

window.onload=function(){
    const form = document.getElementById('change-form')

    form.addEventListener('submit', change)
}

async function change(event) {
    event.preventDefault()
    const username = document.getElementById('username').value

    const res = await fetch("/change", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username
        })
    }).then((res) => res.json())
};
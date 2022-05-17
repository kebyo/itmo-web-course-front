async function login() {
    const email = document.loginForm.email.value;
    const password = document.loginForm.password.value;


    fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then(response => response.json())
        .then(body => {
            const headers = new Headers();

            headers.set('Authorization', `Bearer ${body.accessToken}`);

            location.replace('../../main.html');
        })
        .catch(e => console.log(e));
}

async function signup() {
    const name = document.signUpForm.name.value;
    const email = document.signUpForm.email.value;
    const password = document.signUpForm.password.value;

    fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    })
        .then(response => response.json())
        .then(body => {
            const headers = new Headers();

            headers.set('Authorization', `Bearer ${body.accessToken}`);

            location.replace('../../main.html');
        })
        .catch(e => console.log(e));
}
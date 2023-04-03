

async function signUp() {

    const userSignUpData =
    {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email:  document.getElementById("email-field").value,
        userName: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }


    var response = await userSignUp(userSignUpData);

    if (response != undefined && response.statusCode == 200) {
        localStorage.setItem('token', response.token)
        window.location.href = "login.html";
    }
    else {

        const toastLiveExample = document.getElementById('liveToast')
        document.getElementById('error-message').innerText = `${response.message}`;

        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

    }


}



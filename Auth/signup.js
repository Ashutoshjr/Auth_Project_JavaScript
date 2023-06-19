

async function signUp() {

    const userSignUpData =
    {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email:  document.getElementById("email-field").value,
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value,
    }


    var response =  await userSignUp(userSignUpData);

    if (response != undefined && response.statusCode == 200) {
        localStorage.setItem('token', response.token)
        window.location.href = "login.html";
    }
}



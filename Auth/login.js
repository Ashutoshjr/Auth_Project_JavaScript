
async function signIn() {

  const userSignInData =
  {
    email: document.getElementById("email-field").value,
    password: document.getElementById("password").value,
  }

  var response = await userLogin(userSignInData);

  if (response != undefined && response.token != "")
  {
    localStorage.setItem('token', response.token)
    window.location.pathname = "/dashboard/dashboard.html"
  } 
  else
  {
    const toastLiveExample = document.getElementById('liveToast')
    document.getElementById('error-message').innerText = `${response.message}`;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()

    document.getElementById("email-field").value = '';
    password: document.getElementById("password").value = '';

  }

}







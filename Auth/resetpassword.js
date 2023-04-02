
async function resetPassword()
{

   
   var resetPasswordDetails = {

    newPassword :  document.getElementById("newpassword").value,
    confirmPassword : document.getElementById("confirmpassword").value,
    email : document.getElementById("email-field").value

   }

  var response = await sendResetPassword(resetPasswordDetails);

  if (response != undefined && response.token != "")
  {

    window.location.pathname = "/Auth/login.html";

  } 
  else
  {
    const toastLiveExample = document.getElementById('liveToast')
    document.getElementById('error-message').innerText = `${response.message} Server unavailable`;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()

    
  }


 
    
}
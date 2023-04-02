
function validateEmail()
{
    
   var emailField =  document.getElementById("email-field");
   var emailLabel =  document.getElementById("email-label");
   var emailError =  document.getElementById("email-error");

   emailField.style.bottom = "45px";

   if(!emailField.value.match(/^[A-Za-z\._\0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
   {
    emailError.innerHTML ="Please enter a valid email";
    emailField.style.borderBottomColor = "red";
    emailError.style.top = "120%";
    return false;
   }

  emailError.innerHTML = "";
  emailField.style.borderBottomColor = "green";
  emailError.style.top = "100%";

  return true;
}


function parseJwt(token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}


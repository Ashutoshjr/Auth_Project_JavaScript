
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


function validateInput(inputId, regex, errorMessage) {
  var input = document.getElementById(inputId);
  var errorSpan = document.getElementById(inputId + "-error");

  if (!regex.test(input.value)) {
    // Display error message
    errorSpan.textContent = errorMessage;
    input.classList.add("invalid");
    return false;
  }

  // Clear error message
  errorSpan.textContent = "";
  input.classList.remove("invalid");
  return true;
}



function validateAndDisplayError(inputId, errorId, validationFunction) {
  var input = document.getElementById(inputId);
  var errorSpan = document.getElementById(errorId);

  var validationResult = validationFunction(input.value);

  if (validationResult !== "Valid") {
    errorSpan.textContent = validationResult;
    input.classList.add("invalid");
  } else {
    errorSpan.textContent = "";
    input.classList.remove("invalid");
  }
}


function validatePassword(password) {
  // Define the password criteria
  var lengthRegex = /^.{8,}$/; // Minimum length of 8 characters
  var uppercaseRegex = /[A-Z]/; // At least one uppercase letter
  var lowercaseRegex = /[a-z]/; // At least one lowercase letter
  var digitRegex = /\d/; // At least one digit
  

  // Perform the validation
  if (!lengthRegex.test(password)) {
    return "Password must be at least 8 characters long.";
  }

  if (!uppercaseRegex.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!lowercaseRegex.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!digitRegex.test(password)) {
    return "Password must contain at least one digit.";
  }

  // Password meets all criteria
  return "Valid";
}

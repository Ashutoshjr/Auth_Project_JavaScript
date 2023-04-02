
var userName = '';
var userId = '';

window.onload = onPageLoad;

async function onPageLoad() {

  var token = localStorage.getItem('token');

  if (token != null) {
    var result = parseJwt(token);
    userName = result.unique_name;

    document.getElementById("userDetailForm").style.display = "block";

    await loadUserData();
  } else {

    await OnLogout();
  }

}


async function loadUserData() {


  var validToken = localStorage.getItem('token');
  if (validToken == null) {
    window.location.pathname = "/Auth/login.html"
  }
  else {

    var userDataByUserName = await getUserByUserName(userName);

    if (userDataByUserName != undefined) {

      document.getElementById("fName").value = userDataByUserName.firstName;
      document.getElementById("lName").value = userDataByUserName.lastName;
      document.getElementById("uName").value = userDataByUserName.userName;
      document.getElementById("email").value = userDataByUserName.email;

      userId = userDataByUserName.id;

    }


  }

}


function OnLogout() {

  localStorage.removeItem('token');
  localStorage.clear();
  window.location.pathname = "";
  window.location.pathname = "/Auth/login.html";

}

async function deleteUser() {

  if (confirm("Are you sure !")) {
    var response = await deleteUserDetail(userId);
    if (response != undefined && response.token != "")
    {
       OnLogout();
    }
  }
}




 function updateUser() {

  var updatedUserData = {
    id: userId,
    firstName: document.getElementById("fName").value,
    lastName: document.getElementById("lName").value,
    userName: document.getElementById("uName").value,
    email: document.getElementById("email").value
  }

  var response =  updateUserDetail(updatedUserData);

  if (response != undefined && response.status == 200) 
  {

    const toastLiveExample = document.getElementById('liveToast')
    document.getElementById('success-message').innerText = `${response.message}`;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
  }
  else{


  }

 
}




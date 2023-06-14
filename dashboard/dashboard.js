
var userName = '';
var userId = '';

window.onload = onPageLoad;



function onPageLoad() {



  const token = localStorage.getItem('token');

  if (token != null) {
    const result = parseJwt(token);
    userName = result.unique_name;

    document.getElementById("userDetailForm").style.display = "block";

    loadUserData();
  } else {

    OnLogout();
  }
}




async function loadUserData() {


  const validToken = localStorage.getItem('token');
  if (!validToken == null) {
    window.location.pathname = "/Auth/login.html"
    return;
  }

  const userDataByUserName = await getUserByUserName(userName);

  if (userDataByUserName != undefined) {

    document.getElementById("fName").value = userDataByUserName.firstName;
    document.getElementById("lName").value = userDataByUserName.lastName;
    document.getElementById("uName").value = userDataByUserName.userName;
    document.getElementById("email").value = userDataByUserName.email;

    userId = userDataByUserName.id;
  }

}


function OnLogout() {

  localStorage.removeItem('token');
  localStorage.clear();
  window.location.pathname = "/Auth/login.html";

}

async function deleteUser() {

  if (confirm("Are you sure !")) {
    var response = await deleteUserDetail(userId);

    if (response && response.statusCode == 200) {
      OnLogout();
    }
  }
}


async function updateUser() {

  const updatedUserData = {
    id: userId,
    firstName: document.getElementById("fName").value,
    lastName: document.getElementById("lName").value,
    userName: document.getElementById("uName").value,
    email: document.getElementById("email").value
  }

  const response = await updateUserDetail(updatedUserData);

  if (response && response.statusCode == 200) {
    const toastLiveExample = document.getElementById('liveToast')
    document.getElementById('success-message').innerText = `${response.message}`;

    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
  }
  else {


  }


}




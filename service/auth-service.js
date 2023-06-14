
const baseUri = 'https://localhost:7063/api/User/';


async function userLogin(userDetails) {

    console.log(userDetails);
    var userResponse = {};

    await fetch(`${baseUri}authenticate`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })
        .then(response =>

            response.json()
        )
        .then((res) => {

            userResponse = res;

        })
        .catch(error =>

            userResponse.message = error.message,
            userResponse.token = ''

        );

    return userResponse;
}


async function userSignUp(userDetails) {

    try {

        var userResponse = {};

        await fetch(`${baseUri}register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    response.json().then(error => {
                        handleError();
                    })
                }
            })
            .then((res) => {
                userResponse = res;
            })
            .catch(error =>
                userResponse = error,
            );

        return userResponse;
    }
    catch (error) {
        console.log('Error in User Sign Up : ', error);
        document.getElementById('errorMessage').textContent = error.message
    }
}


async function getUserByUserName(username) {

    var userResponse = {};

    await fetch(`${baseUri}get-user/${username}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(response => response.json())
        .then((res) => {

            userResponse = res;
        })
        .catch(error =>

            userResponse.message = error.message,
            userResponse.token = ''
        );

    return userResponse;
}


async function updateUserDetail(updateData) {

    var userResponse = {};

    await fetch(`${baseUri}update`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(updateData)
    })
        .then(response => response.json())
        .then((res) => {

            userResponse = res;
        })
        .catch(error =>

            userResponse.message = error.message,
            userResponse.token = ''

        );

    return userResponse;
}


async function deleteUserDetail(id) {

    var userResponse = {};

    await fetch(`${baseUri}delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

    })
        .then(response => response.json())
        .then((res) => {

            userResponse = res

        })
        .catch(error =>

            userResponse.message = error.message,
            userResponse.token = ''
        );

    return userResponse;
}


async function sendResetPassword(emailValue) {

    var userResponse = {};

    await fetch(`${baseUri}reset-password`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailValue)
    })
        .then(response => response.json())
        .then((res) => {

            userResponse = res;
        })
        .catch(error =>

            userResponse.message = error.message,
            userResponse.token = ''
        );

    return userResponse;
}


function handleError() {
    const toastLiveExample = document.getElementById('liveToast');
    document.getElementById('error-message').innerText = error.errors.Password[0];
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    toastBootstrap.show();
}



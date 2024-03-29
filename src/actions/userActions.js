function fetchUsers() {
    return (dispatch) => {
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then((users) => dispatch({type: "ADD_USERS_STATE", users: users}))
    }
}

function createUser(test) {
    let newVar = test
    return (dispatch) => {
        let newUser
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    user: {
                    username: test.username.username,
                    password: test.username.password
                    }
                })
            })
        .then(resp => resp.json())
        .then(data => newUser=data)
        .then((newUser) => dispatch( {type: "SAVE_USER_ID", user: newUser }))
        .then((newUser) => dispatch( {type: "ADD_CREATED_USER_STATE", user: newUser }))
    }
}

function updateUser(test) {
    // debugger
    let newUser
    return (dispatch) => {
        fetch(`http://localhost:3000/users/${test.userID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    user: {
                    username: test.username,
                    description: test.description,
                    user_id: test.userID
                    }
                })
            })
        .then(resp => resp.json())
        .then(data => newUser=data)
        .then((newUser) => dispatch( {type: "UPDATE_USER_INFO", user: newUser }))
        .then((newUser) => dispatch( {type: "UPDATE_USERS_INFO_STATE", user: newUser }))
    }
}

export {createUser, updateUser, fetchUsers};
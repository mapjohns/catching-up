function createUser(test) {
    let newVar = test
    return (dispatch) => {
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
        .then((user) => dispatch( {type: "SAVE_USER_ID", user: user }))
    }
}

function updateUser(test) {
    // debugger
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
        .then((user) => dispatch( {type: "UPDATE_USER_INFO", user: user }))
    }
}

export {createUser, updateUser};
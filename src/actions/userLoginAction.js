export function loginUser(test) {
    let newVar = test
    return (dispatch) => {
        fetch('http://localhost:3000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    user: {
                    username: test.credentials.username,
                    password: test.credentials.password
                    }
                })
            })
        .then(resp => resp.json())
        .then((user) => dispatch( {type: "SAVE_USER_ID", user: user }))
    }
}
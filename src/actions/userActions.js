export function createUser(test) {
    let newVar = test
    return (dispatch) => {
        // dispatch({ type: "RETURNING_USER" });
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    username: test.username.username,
                    password: test.username.password
                })
            })
        .then(resp => resp.json())
        .then((user) => dispatch( {type: "TEST_USER", user: user }))
    }
}
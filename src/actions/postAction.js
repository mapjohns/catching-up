export function createPost(test) {
    let newVar = test
    debugger
    return (dispatch) => {
        fetch('http://localhost:3000/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    post: {
                    message: "TEST",
                    user_id: ""
                    }
                })
            })
        .then(resp => resp.json())
        .then((user) => dispatch( {type: "SAVE_USER_ID", user: user }))
    }
}
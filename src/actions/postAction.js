function createPost(test) {
    let newVar = test
    // debugger
    return (dispatch) => {
        fetch('http://localhost:3000/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    post: {
                    message: test.message,
                    user_id: test.user
                    }
                })
            })
        .then(resp => resp.json())
        .then((post) => dispatch( {type: "ADD_POST_STATE", post: post }))
    }
}

function editPost(test) {
    let newVar = test
    debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${test.post}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    post: {
                    post_id: test.post,
                    message: test.message,
                    user_id: test.user,
                    }
                })
            })
        .then(resp => resp.json())
        .then((post) => dispatch( {type: "UPDATE_POST_STATE", post: post }))
    }
}

export { createPost, editPost };
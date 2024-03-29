function fetchPosts() {
    return (dispatch) => {
        fetch("http://localhost:3000/posts")
        .then(resp => resp.json())
        .then((posts) => dispatch({type: "ADD_POSTS_STATE", posts: posts}))
    }
}

function createPost(post) {
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
                    message: post.message,
                    user_id: post.user
                    }
                })
            })
        .then(resp => resp.json())
        .then((post) => dispatch( {type: "ADD_POST_STATE", post: post }))
    }
}

function editPost(post) {
    // debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${post.post}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    post: {
                    post_id: post.post,
                    message: post.message,
                    user_id: post.user,
                    }
                })
            })
        .then(resp => resp.json())
        .then((post) => dispatch( {type: "UPDATE_POST_STATE", post: post }))
    }
}

function deletePost(test) {
    // debugger
    return (dispatch) => {
        dispatch({ type: "DELETE_POST_STATE", test: test });
        fetch(`http://localhost:3000/posts/${test}`, {
        method: 'DELETE',
    })
    }
}

export {fetchPosts, createPost, editPost, deletePost};
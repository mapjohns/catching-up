function fetchComments() {
    return (dispatch) => {
        fetch("http://localhost:3000/comments")
        .then(resp => resp.json())
        .then((comments) => dispatch({type: "ADD_COMMENTS_STATE", comments: comments}))
    }
}


function createComment(test) {
    let newVar = test
    // debugger
    return (dispatch) => {
        fetch('http://localhost:3000/comments', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    comment: {
                    content: test.content,
                    user_id: test.userID,
                    post_id: test.postID
                    }
                })
            })
        .then(resp => resp.json())
        .then((comment) => dispatch( {type: "ADD_COMMENT_STATE", comment: comment }))
    }
}

function updateComment(test) {
    // debugger
    return (dispatch) => {
        fetch(`http://localhost:3000/comments/${test.commentID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
                body: JSON.stringify({
                    comment: {
                    content: test.content,
                    user_id: test.userID,
                    post_id: test.postID
                    }
                })
            })
        .then(resp => resp.json())
        .then((comment) => dispatch( {type: "UPDATE_COMMENT_STATE", comment: comment }))
    }
    
}

function deleteComment(test) {
    // debugger
    return (dispatch) => {
        dispatch({ type: "DELETE_COMMENT_STATE", test: test });
        fetch(`http://localhost:3000/comments/${test}`, {
        method: 'DELETE',
        })
    }
}

export {fetchComments, createComment, updateComment, deleteComment};
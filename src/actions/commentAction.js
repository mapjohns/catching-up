export function createComment(test) {
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
                    user_id: test.userID[0],
                    post_id: test.postID
                    }
                })
            })
        .then(resp => resp.json())
        .then((comment) => dispatch( {type: "ADD_COMMENT_STATE", comment: comment }))
    }
}
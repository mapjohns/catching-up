export default function manageComments(state = { comments: [] }, action) {
    switch(action.type) {
        case "ADD_COMMENT_STATE":
        // debugger
        const comment = {
            commentID: action.comment.id,
            userID: action.comment.user_id,
            postID: action.comment.post_id,
            content: action.comment.content,
            username: action.comment.user.username
        }
        return {...state, comments: state.comments.concat(comment)};

        case "ADD_COMMENTS_STATE":
            const comments = action.comments.map(comment => ({commentID: comment.id,
                                                              userID: comment.user_id,
                                                              postID: comment.post_id,
                                                              content: comment.content,
                                                              username: comment.user.username
            }))
            // debugger
            return {...state, comments: state.comments.concat(comments)};
        ;
        default:
            return state
    }
}

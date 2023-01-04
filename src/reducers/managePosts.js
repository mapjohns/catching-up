export default function managePosts(state = { posts: [] }, action) {
    switch(action.type) {
        case "ADD_POST_STATE":
        // debugger
            return {...state, posts: state.posts.concat({user: {id: action.post.user_id, username: action.post.user.username}, message: action.post.message})};
        default:
            return state
    }
}

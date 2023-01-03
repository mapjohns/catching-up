
export default function managePosts(state = { posts: [] }, action) {
    switch(action.type) {
        case "ADD_POST":
        // debugger

            return {...state, posts: state.posts.concat(action.message)};
        default:
            return state
    }
}

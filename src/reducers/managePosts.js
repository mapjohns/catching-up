export default function managePosts(state = { posts: [] }, action) {
    switch(action.type) {
        case "ADD_POST_STATE":
            // debugger
            return {...state, posts: state.posts.concat({user: {id: action.post.user_id, 
                                                         username: action.post.user.username}, 
                                                         message: action.post.message, 
                                                         post_id: action.post.id})};
        case "UPDATE_POST_STATE":
            // debugger
            return  {...state, posts: state.posts.map((post) => {if (post.post_id === action.post.id) 
                                                                    {post.message = action.post.message
                                                                        return post}
                                                                    else {
                                                                        return post
                                                                    }
                                                                }
                                                        )
                                                            };
        case "DELETE_POST_STATE":
            // debugger
            return {...state, posts: state.posts.filter((post) => post.post_id !== action.test)};

        case "ADD_POSTS_STATE":
            // debugger
            const posts = action.posts.map(post => ({user: {id: post.user_id, 
                                                  username: post.user.username}, 
                                                  message: post.message, 
                                                  post_id: post.id}))
            return {...state, posts: state.posts.concat(posts)};
        default:
            return state
    }
}

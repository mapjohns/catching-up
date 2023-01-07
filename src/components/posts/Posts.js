import React, { Component } from "react"
import Post from "./Post"
// import CommentsContainer from "../../containers/CommentsContainer"

class Posts extends Component {

    renderPosts = () => this.props.posts.map(post => 
                        <Post match={this.props.match} 
                              key={`post${post.post_id}`} 
                              post={post.message} 
                              username={post.user.username} 
                              postId={post.post_id}/>
                              )

    render() {
        return (
        this.renderPosts()
        )
    }


}

export default Posts
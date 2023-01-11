import React, { Component } from "react"
import Post from "./Post"

class Posts extends Component {

    renderPosts = () => this.props.posts.map(post => 
                        <Post match={this.props.match} 
                              key={`post${post.post_id}`} 
                              post={post.message} 
                              username={post.user.username} 
                              postId={post.post_id}
                              userId={post.user.id}
                              loggedUserID={this.props.loggedUserID}
                              deletePost={this.props.deletePost}/>
                              )

    render() {
        return (
        this.renderPosts()
        )
    }


}

export default Posts
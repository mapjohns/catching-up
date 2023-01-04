import React, { Component } from "react"
import Post from "./Post"

class Posts extends Component {

    renderPosts = () => this.props.posts.map(post => <Post key={post.user} post={post.message} username={post.user.username} />)

    render() {
        // debugger
        return (
        this.renderPosts()
        )
    }


}

export default Posts
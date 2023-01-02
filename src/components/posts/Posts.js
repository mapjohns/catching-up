import React, { Component } from "react"
import Post from "./Post"

class Posts extends Component {

    renderPosts = () => this.props.posts.map(post => <Post key={post} post={post} />)

    render() {
        return (
        this.renderPosts()
        )
    }


}

export default Posts
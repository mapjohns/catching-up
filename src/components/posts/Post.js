import React, { Component } from "react"

class Post extends Component {

    render() {
        // debugger
        return(
            <p>{this.props.post.message}</p>
        )
    }
}

export default Post
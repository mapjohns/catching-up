import React, { Component } from "react"

class Post extends Component {

    render() {
        // debugger
        return(
            <div>
            <h4>{this.props.username}</h4>
            <p>{this.props.post}</p>
            </div>
        )
    }
}

export default Post
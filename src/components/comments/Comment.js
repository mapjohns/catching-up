import React, { Component } from "react"

class Comment extends Component {

    render() {
        return(
            <p>{this.props.username}: {this.props.content}</p>
        )
    }

}

export default Comment
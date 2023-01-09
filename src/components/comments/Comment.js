import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UpdateComment from "./UpdateComment";

class Comment extends Component {

    render() {
        // debugger
        return(
            <div>
            <p>{this.props.username}: {this.props.content}</p>
            <UpdateComment userID={this.props.userID} postID={this.props.postID} content={this.props.content}/>
            </div>
        )
    }

}

export default Comment
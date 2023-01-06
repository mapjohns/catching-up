import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentInput from "../comments/CommentInput";

class Post extends Component {

    render() {
        // debugger
        return(
            <div>
            <h4>{this.props.username}</h4>
            <p>{this.props.post}</p>
            <Link key={`post${this.props.postId}`} to={`${this.props.match.url}/all/post/${this.props.postId}`}>
              Reply
            </Link>
            <Route path={`${this.props.match.url}/all/post/${this.props.postId}`} render={() => <CommentInput /> } />
            </div>
        )
    }
}

export default Post
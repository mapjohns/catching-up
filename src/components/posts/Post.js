import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentInput from "../comments/CommentInput";
import CommentsContainer from "../../containers/CommentsContainer";

class Post extends Component {

    render() {
        // debugger
        return(
            <div>
            <h4>{this.props.username}</h4>
            <p>{this.props.post}</p>
            <CommentsContainer postID={this.props.postId}/>
            <Link key={`post${this.props.postId}`} to={`${this.props.match.url}/all/post/${this.props.postId}`}>
              Reply
            </Link>
            <Route path={`${this.props.match.url}/all/post/${this.props.postId}`} render={() => <CommentInput postID={this.props.postId} /> } />
            </div>
        )
    }
}

export default Post
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
            <Route path={`${this.props.match.url}/all/post/${this.props.postID}/comments/${this.props.commentID}`} render={() => 
            <UpdateComment commentID={this.props.commentID} userID={this.props.userID} postID={this.props.postID} content={this.props.content}/>} />

            <Link key={`post${this.props.postID}comments${this.props.commentID}`} to={`${this.props.match.url}/all/post/${this.props.postID}/comments/${this.props.commentID}`}>
            Edit Comment
            </Link><br></br>

            <Link key={`post${this.props.postID}comments${this.props.commentID}/delete`} to={`${this.props.match.url}/all/post/${this.props.postID}/comments/${this.props.commentID}/delete`}>
            Delete
            </Link>
            <Route path={`${this.props.match.url}/all/post/${this.props.postID}/comments/${this.props.commentID}/delete`} render={() => this.props.deleteComment(this.props.commentID)} />
            </div>
        )
    }

}

export default Comment
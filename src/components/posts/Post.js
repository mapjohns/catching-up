import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentInput from "../comments/CommentInput";
import CommentsContainer from "../../containers/CommentsContainer";

class Post extends Component {

    render() {
        return(
            <div>
            <h4>{this.props.username}</h4>
            <p>{this.props.post}</p>
            <Route path={`${this.props.match.url}/all/post/${this.props.postId}/comments`} render={() => <CommentsContainer postID={this.props.postId}/>} />
            <Link key={`post${this.props.postId}comments`} to={`${this.props.match.url}/all/post/${this.props.postId}/comments`}>
            Show Comments
            </Link>
            <br></br>
            <Link key={`post${this.props.postId}`} to={`${this.props.match.url}/all/post/${this.props.postId}`}>
              Reply
            </Link>
            <Route exact path={`${this.props.match.url}/all/post/${this.props.postId}`} render={() => <CommentInput postID={this.props.postId} /> } />
            <br></br>
            </div>
        )
    }
}

export default Post
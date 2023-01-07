import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentInput from "../comments/CommentInput";
import CommentsContainer from "../../containers/CommentsContainer";
import PostInput from "./PostInput";

class Post extends Component {

    render() {
        return(
            <div>
            <h4>{this.props.username}</h4>
            <p>{this.props.post}</p>
            <Link key={`post${this.props.postId}edit`} to={`${this.props.match.url}/all/post/${this.props.postId}/edit`}>
            Edit
            </Link>
            <Route path={`${this.props.match.url}/all/post/${this.props.postId}/edit`} render={() => <PostInput postID={this.props.postId} edit={"Edit"}/> } /><br></br>

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
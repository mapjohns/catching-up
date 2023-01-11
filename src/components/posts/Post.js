import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CommentInput from "../comments/CommentInput";
import CommentsContainer from "../../containers/CommentsContainer";
import PostInput from "./PostInput";
import Card from 'react-bootstrap/Card';


class Post extends Component {

    render() {
        // debugger
        return(
            <div>
            <Card>
            <Card.Header as="h5">{this.props.username}: {this.props.post}</Card.Header>
            {this.props.loggedUserID === this.props.userId ? 
            <div>
            <Link key={`post${this.props.postId}edit`} to={`${this.props.match.url}/post/${this.props.postId}/edit`}>
            Edit
            </Link>
            <Route path={`${this.props.match.url}/post/${this.props.postId}/edit`} render={() => <PostInput postID={this.props.postId} edit={"Edit"}/> } /><br></br>

            <Link key={`post${this.props.postId}delete`} to={`${this.props.match.url}/post/${this.props.postId}/delete`}>
            Delete
            </Link>
            <Route path={`${this.props.match.url}/post/${this.props.postId}/delete`} render={() => this.props.deletePost(this.props.postId)} />
            </div>
            :
            <div></div>
            }

            <Route path={`${this.props.match.url}/${this.props.postId}/comments`} render={() => <CommentsContainer match={this.props.match} postID={this.props.postId}/>} />
            <Link key={`post${this.props.postId}comments`} to={`${this.props.match.url}/${this.props.postId}/comments`}>
            Show Comments
            </Link>
            <br></br>
            
            <Link key={`post${this.props.postId}`} to={`${this.props.match.url}/${this.props.postId}/comments/new`}>
              Reply
            </Link>
            <Route exact path={`${this.props.match.url}/${this.props.postId}/comments/new`} render={() => <CommentInput postID={this.props.postId} /> } />
            <br></br>
            </Card>
            </div>
        )
    }
}

export default Post
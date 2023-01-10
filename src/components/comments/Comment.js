import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UpdateComment from "./UpdateComment";
import UsersContainer from "../../containers/UsersContainer";

class Comment extends Component {

    render() {
        // debugger
        return(
            <div>
                <Link key={`User${this.props.userID}`} to={`/users/${this.props.userID}`}>
                {this.props.username}:
                </Link>
                <Route path={`/users/${this.props.userID}`} render={(routerProps) => { <UsersContainer {...routerProps} /> }} /> 
            <p>
            {this.props.content}
            </p>

            {this.props.loggedUserID === this.props.userID ? 

            <div>
                {/* `${this.props.match.url}/all/post/${this.props.postID}/comments/${this.props.commentID}` */}
            <Route path={`${this.props.match.url}/${this.props.postID}/comments/${this.props.commentID}/edit`} render={() => 
            <UpdateComment commentID={this.props.commentID} userID={this.props.userID} postID={this.props.postID} content={this.props.content}/>} />

            <Link key={`post${this.props.postID}comments${this.props.commentID}`} to={`${this.props.match.url}/${this.props.postID}/comments/${this.props.commentID}/edit`}>
            Edit Comment
            </Link><br></br>

            <Link key={`post${this.props.postID}comments${this.props.commentID}/delete`} to={`${this.props.match.url}/${this.props.postID}/comments/${this.props.commentID}/delete`}>
            Delete
            </Link>
            <Route path={`${this.props.match.url}/${this.props.postID}/comments/${this.props.commentID}/delete`} render={() => this.props.deleteComment(this.props.commentID)} />
            </div>
            :
            <div></div>
            
    }
            </div>
        )
    }

}

export default Comment
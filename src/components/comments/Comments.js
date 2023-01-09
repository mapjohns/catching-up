import React, { Component } from "react"
import Comment from "./Comment"

class Comments extends Component {
    
    renderComments = () => this.props.comments.filter(object => object.postID === this.props.postID).map(comment => <Comment key={comment.commentID} 
                                                                                                                             content={comment.content} 
                                                                                                                             username={comment.username}
                                                                                                                             postID={this.props.postID}
                                                                                                                             commentID={comment.commentID}
                                                                                                                             userID={comment.userID}
                                                                                                                             match={this.props.match}
                                                                                                                             deleteComment={this.props.deleteComment}/>)



    render() {
        return(
            <div>
            <h6>Comments:</h6>
            {this.renderComments()}
            </div>
        )
    }
}

export default Comments
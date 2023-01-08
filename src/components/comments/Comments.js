import React, { Component } from "react"
import Comment from "./Comment"

class Comments extends Component {
    
    renderComments = () => this.props.comments.filter(object => object.postID === this.props.postID).map(comment => <Comment key={comment.commentID} content={comment.content} />)



    render() {
        return(
            this.renderComments()
        )
    }
}

export default Comments
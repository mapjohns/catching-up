import React, { Component } from "react";
import { connect } from 'react-redux';
import CommentInput from "../components/comments/CommentInput";
import Comments from "../components/comments/Comments";

class CommentsContainer extends Component {

    render() {
        return(
            <Comments postID={this.props.postID} comments={this.props.comments}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {comments: state.comments.comments}
}

export default connect(mapStateToProps)(CommentsContainer)
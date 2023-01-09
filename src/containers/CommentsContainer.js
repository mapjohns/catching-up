import React, { Component } from "react";
import { connect } from 'react-redux';
import Comments from "../components/comments/Comments";
import { deleteComment } from "../actions/commentAction"


class CommentsContainer extends Component {

    render() {
        return(
            <Comments match={this.props.match} postID={this.props.postID} comments={this.props.comments} deleteComment={this.props.deleteComment}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {comments: state.comments.comments}
}

const mapDispatchToProps = (dispatch) => {
    return { 
        deleteComment: comment => dispatch(deleteComment(comment))}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)
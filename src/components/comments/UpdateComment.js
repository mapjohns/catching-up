import React, { Component } from "react"
import { connect } from "react-redux"
import { updateComment, deleteComment } from "../../actions/commentAction"

class UpdateComment extends Component {

    state = {
        userID: this.props.userID,
        postID: this.props.postID,
        commentID: this.props.commentID,
        content: this.props.content
    }

    onChangeHandler = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.updateComment(this.state)
    }

    onSubmitHandlerDelete = (event) => {
        event.preventDefault()
        this.props.deleteComment(this.props.commentID)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text"
                           value={this.state.content}
                           onChange={this.onChangeHandler}/>
                    <input type="submit"
                           value="Update"/>
                </form>
                <form onSubmit={this.onSubmitHandlerDelete} >
                    <input type="submit" value="Delete"/>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return { 
        updateComment: content => dispatch(updateComment(content)),
        deleteComment: comment => dispatch(deleteComment(comment))}
}

export default connect(null, mapDispatchToProps)(UpdateComment)
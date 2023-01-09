import React, { Component } from "react"
import { connect } from "react-redux"
import { updateComment } from "../../actions/commentAction"

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
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return { 
        updateComment: content => dispatch(updateComment(content))}
}

export default connect(null, mapDispatchToProps)(UpdateComment)
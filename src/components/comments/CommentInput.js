import React, { Component } from "react";
import { connect } from 'react-redux';
import { createComment } from "../../actions/commentAction";

class CommentInput extends Component {

    state = {
        content: "",
        userID: this.props.userID,
        postID: this.props.postID
    }

    onChangeHandler = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            content: ""
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input onChange={this.onChangeHandler} value={this.state.content} type="text"/>
                <input type="submit"/>
            </form>
        )

    }


}

const mapStateToProps = (state) => {
    return {
        userID : state.users.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return { addComment: content => dispatch(createComment(content)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)
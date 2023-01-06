import React, { Component } from "react";
import { connect } from 'react-redux';


class CommentInput extends Component {

    state = {
        content: "",
        userID: this.props.userID
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
        userID : state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return { addComment: content => dispatch({type: "ADD_COMMENT", content: content }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput)
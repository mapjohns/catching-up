import React, { Component } from "react";
import { connect } from 'react-redux';


class CommentInput extends Component {

    state = {
        content: ""
    }

    onChangeHandler = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.setState({
            content: ""
        })
    }

    render() {
        return(
            <form>
                <input onChange={this.onChangeHandler} value={this.state.content} type="text"/>
                <input  type="submit"/>
            </form>
        )

    }


}

const mapDispatchToProps = (dispatch) => {
    return { addComment: () => dispatch({type: "ADD_COMMENT"})}
}

export default connect(null, mapDispatchToProps)(CommentInput)
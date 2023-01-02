import React, { Component } from "react";


class PostInput extends Component {

    state = {
        message: "",
    }

    onChangeHandlerPost = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
    }

    render() {
        return(
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <h4>Message:</h4><input onChange={this.onChangeHandlerPost} value={this.state.username} type="text"/>
                <br></br>
                <input type="submit" />
            </form>
        </div>
        )
    }

}

export default PostInput
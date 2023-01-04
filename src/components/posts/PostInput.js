import React, { Component } from "react";


class PostInput extends Component {

    state = {
        message: "",
        user: this.props.userId[0]
    }

    onChangeHandlerPost = (event) => {
        this.setState({
            message: event.target.value,
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.addPost(this.state)
        this.setState({
            message: ""
          })
    }

    render() {
        return(
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <h4>Message:</h4><input onChange={this.onChangeHandlerPost} value={this.state.message} type="text"/>
                <br></br>
                <input type="submit" />
            </form>
        </div>
        )
    }

}

export default PostInput
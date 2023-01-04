import React, { Component } from "react";


class UserInput extends Component {

    state = {
        username: "",
        password: ""
    }

    onChangeHandlerUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    onChangeHandlerPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.returnUser(this.state)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return(
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <h4>Username:</h4><input onChange={this.onChangeHandlerUsername} value={this.state.username} type="text"/>
                <h4>Password:</h4><input onChange={this.onChangeHandlerPassword} value={this.state.password} type="password"/>
                <br></br>
                <input type="submit" value="Sign-up"/>
            </form>
        </div>
        )
    }

}

export default UserInput
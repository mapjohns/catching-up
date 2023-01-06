import React, { Component } from "react";


class UserInput extends Component {

    state = {
        create: {
        username: "",
        password: "",
        },
        
        login: {
            username: "",
            password: ""
        }
    }

    onChangeHandlerUsername = (event) => {
        this.setState({
            create: {
            username: event.target.value,
            password: this.state.create.password
            }
            
        })
    }

    onChangeHandlerPassword = (event) => {
        this.setState({
            create:{
            username: this.state.create.username,
            password: event.target.value
            }
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.returnUser(this.state.create)
        this.setState({
            create: {
            username: "",
            password: ""
            }
        })
    }

    onChangeHandlerLoginUsername = (event) => {
        this.setState({
            login: {
            username: event.target.value,
            password: this.state.login.password
            }
            
        })
    }

    onChangeHandlerLoginPassword = (event) => {
        this.setState({
            login:{
            username: this.state.login.username,
            password: event.target.value
            }
        })
    }

    onSubmitHandlerLogin = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state.login)
        this.setState({
            login: {
            username: "",
            password: ""
            }
        })
    }

    onSubmitHandlerLogOut = (event) => {
        event.preventDefault()
        this.props.logoutUser()
        
    }


    render() {
        return(
        <div>
            <h4>Please Sign-up or Log in below!</h4>
            <br></br>
            <h5>Create an Account</h5>
            <form onSubmit={this.onSubmitHandler}>
                <h4>Username:</h4><input onChange={this.onChangeHandlerUsername} value={this.state.create.username} type="text"/>
                <h4>Password:</h4><input onChange={this.onChangeHandlerPassword} value={this.state.create.password} type="password"/>
                <br></br>
                <input type="submit" value="Sign-up"/>
            </form>
            <br></br>
            <h5>Log in with an existing account</h5>
            <form onSubmit={this.onSubmitHandlerLogin}>
                <h4>Username:</h4><input onChange={this.onChangeHandlerLoginUsername} value={this.state.login.username} type="text"/>
                <h4>Password:</h4><input onChange={this.onChangeHandlerLoginPassword} value={this.state.login.password} type="password"/>
                <br></br>
                <input type="submit" value="Log in"/>
            </form>
            <br></br>
            <form onSubmit={this.onSubmitHandlerLogOut}>
                <input type="submit" value="Log out" />
            </form>
        </div>
        )
    }

}

export default UserInput
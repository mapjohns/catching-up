import React, { Component } from "react";
import { connect } from 'react-redux';
import { createUser } from '../../actions/userActions';
import { loginUser } from "../../actions/userLoginAction";
import Card from 'react-bootstrap/Card';

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
        this.props.createUser(this.state.create)
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
        this.props.logoutUser(this.props.userID)
        
    }


    render() {
        return(
            this.props.loggedIn === undefined ? 
                <div>
                    <h2>It's time to catch-up!</h2>
                    <h5>Please Sign-up or Log in below!</h5>
                <Card 
                    bg={"light"}
                    style={{ width: '15rem' }}

                >
                    <Card.Header>
                        <h5>Create an Account</h5>
                    </Card.Header>
                    <Card.Body>
                    {/* <h6>Your ID number is: {this.props.userID}</h6> */}
                    <form onSubmit={this.onSubmitHandler}>
                    <Card.Text>Username:</Card.Text>
                        <input onChange={this.onChangeHandlerUsername} value={this.state.create.username} type="text"/>
                    <Card.Text>Password:</Card.Text>
                        <input onChange={this.onChangeHandlerPassword} value={this.state.create.password} type="password"/>
                        <br></br>
                        <input type="submit" value="Sign-up"/>
                    </form>
                    </Card.Body>
                </Card>
                <br></br>
                <Card
                    bg={"light"}
                    style={{ width: '15rem' }}
                >
                    <Card.Header><h5>Log in with an existing account</h5></Card.Header>
                    <Card.Body>
                    <form onSubmit={this.onSubmitHandlerLogin}>
                    <Card.Text>Username:</Card.Text>
                        <input onChange={this.onChangeHandlerLoginUsername} value={this.state.login.username} type="text"/>
                    <Card.Text>Password:</Card.Text>
                        <input onChange={this.onChangeHandlerLoginPassword} value={this.state.login.password} type="password"/>
                        <br></br>
                        <input type="submit" value="Log in"/>
                    </form>
                    </Card.Body>
                </Card>
                </div>
                
            : 
                <div>
                <form onSubmit={this.onSubmitHandlerLogOut}>
                    <h6>Welcome! You are now logged in. Feel free to browse posts or leave one yourself!</h6>
                    <input type="submit" value="Log out" />
                </form>
                </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return { createUser: username => dispatch(createUser({username})) ,
              loginUser: credentials => dispatch(loginUser({credentials})),
              logoutUser: userId => dispatch({type: "LOG_OUT_USER", userId: userId})}
}

const mapStateToProps = (state) => {
    // debugger
  return {
    userID : state.users.user.id,
    loggedIn: state.users.user.loggedIn
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserInput)

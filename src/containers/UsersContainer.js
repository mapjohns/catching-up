import React, { Component } from "react";
import { connect } from 'react-redux';
import UserInput from "../components/users/UserInput";
import { createUser } from '../actions/userActions';
import { loginUser } from "../actions/userLoginAction";

class UsersContainer extends Component {
    
    render() {
        return (
          <div>
            Your ID Number is: {this.props.userID}
            <UserInput returnUser={this.props.createUser} loginUser={this.props.loginUser} logoutUser={this.props.logoutUser}/>
          </div>
        )
      }
}

const mapDispatchToProps = (dispatch) => {
    return { createUser: username => dispatch(createUser({username})) ,
              loginUser: credentials => dispatch(loginUser({credentials})),
              logoutUser: () => dispatch({type: "LOG_OUT_USER"})}
}

const mapStateToProps = (state) => {
  return {
    userID : state.users.users
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

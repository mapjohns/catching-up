import React, { Component } from "react";
import { connect } from 'react-redux';
import UserInput from "../components/users/UserInput";
import { createUser } from '../actions/userActions'

class UsersContainer extends Component {
    
    render() {
        return (
          <div>
            Your ID Number is: {this.props.userID}
            <UserInput returnUser={this.props.createUser}/>
          </div>
        )
      }
}

const mapDispatchToProps = (dispatch) => {
    return { createUser: username => dispatch(createUser({username})) }
}

const mapStateToProps = (state) => {
  return {
    userID : state.users.users
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

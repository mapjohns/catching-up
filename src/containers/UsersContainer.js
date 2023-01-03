import React, { Component } from "react";
import { connect } from 'react-redux';
import UserInput from "../components/users/UserInput";
import { createUser } from '../actions/userActions'

class UsersContainer extends Component {
    
    render() {
        return (
          <div>
            <UserInput returnUser={this.props.createUser}/>
          </div>
        )
      }
}

const mapDispatchToProps = (dispatch) => {
    return { createUser: username => dispatch(createUser({username})) }
}

export default connect(null, mapDispatchToProps)(UsersContainer)

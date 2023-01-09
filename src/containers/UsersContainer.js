import React, { Component } from "react";
import { connect } from 'react-redux';
import User from '../components/users/User' 

class UsersContainer extends Component {
    
    render() {
        return (
          <div>
            Your ID number is: {this.props.userID}
            <User user={this.props.user}/>
          </div>
        )
      }
}


const mapStateToProps = (state) => {
  // debugger
  return {
    userID : state.users.user.id,
    user: state.users.user,
    users: state.users.users
  }
}

export default connect(mapStateToProps)(UsersContainer)

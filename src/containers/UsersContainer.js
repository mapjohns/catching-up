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
  return {
    userID : state.users.users.id,
    user: state.users.users
  }
}

export default connect(mapStateToProps)(UsersContainer)

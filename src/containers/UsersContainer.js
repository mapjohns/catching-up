import React, { Component } from "react";
import { connect } from 'react-redux';
import User from '../components/users/User' ;
import Users from "../components/users/Users";


class UsersContainer extends Component {
    
    render() {
      // debugger
        return (
          <div>
            {/* Your ID number is: {this.props.userID} */}
            {/* <User user={this.props.user}/> */}
            <Users match={this.props.match} loggedUser={this.props.user} allUsers={this.props.users}/>
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

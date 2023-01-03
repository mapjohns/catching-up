import React, { Component } from "react";
import { connect } from 'react-redux';
import UserInput from "../components/users/UserInput";

class UsersContainer extends Component {
    
    render() {
        return (
          <div>
            <UserInput />
          </div>
        )
      }
}

const mapDispatchToProps = (dispatch) => {
    return { createUser: username => dispatch({type: "RETURNING_USER", username: username})}
}


export default connect(mapDispatchToProps)(UsersContainer)

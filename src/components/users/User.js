import React, { Component } from 'react';
import UpdateUserInfo from './UpdateUserInfo';

class User extends Component {

    userLoggedIn = () => {
        if (this.props.user.loggedIn) {
            return <UpdateUserInfo user={this.props.user} />
        }
    }

    render() {
        // debugger
        return(
            <div>
            <h2>Username: {this.props.user.username}</h2>
            <h3>About: {this.props.user.description}</h3>
            {this.userLoggedIn()}
            </div>
        )
    }
}

export default User;


import React, { Component } from 'react';
import UpdateUserInfo from './UpdateUserInfo';

class User extends Component {

    userLoggedIn = () => {
        // debugger
        if (!!this.props.edit) {
            return <UpdateUserInfo user={this.props.user} />
        }
    }

    render() {
        // debugger
        return(
            <div>
            <h2>Username: {this.props.username}</h2>
            <h3>About: {this.props.description}</h3>
            {this.userLoggedIn()}
            </div>
        )
    }
}

export default User;


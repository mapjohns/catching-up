import React, { Component } from 'react';
import UpdateUserInfo from './UpdateUserInfo';

class User extends Component {

    render() {
        // debugger
        return(
            <div>
            <h1>Hi!</h1>
            <h2>Username: {this.props.user.username}</h2>
            {!!this.props.description ? 
                <h3>About: {this.props.description}</h3> : <UpdateUserInfo user={this.props.user}/>}
            </div>
        )
    }
}

export default User;


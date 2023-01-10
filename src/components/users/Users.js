import React, { Component } from "react"
import User from "./User"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Users extends Component {

    renderUsers = () => this.props.allUsers.map(user => 
        <div>
                <Link key={`User${user.user.id}`} to={`${this.props.match.url}/${user.user.id}`}>
                {user.user.username}
                </Link>
                <Route exact path={`${this.props.match.url}/${user.user.id}`} render={() => <User userID={user.user.id}  
                                                                                  username={user.user.username} 
                                                                                  description={user.user.description}/> } />
        </div>

                                                             )

    render() {
        // debugger
        const loggedUser  = this.props.loggedUser
        return(
            <div>
                <p>Your Profile</p>
                <Link key={`LoggedUser${ loggedUser.id}`} to={`${this.props.match.url}/${loggedUser.id}/edit`}> Your Profile </Link>
                <Route path={`${this.props.match.url}/${loggedUser.id}/edit`} render={() => <User edit={"Edit"} user={loggedUser} userID={loggedUser.id} username={loggedUser.username} description={loggedUser.description} />} />
                {/* <User loggedUser={loggedUser} /> */}
                {this.renderUsers()}
            </div>
        )
    }

}

export default Users
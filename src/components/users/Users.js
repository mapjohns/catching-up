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
                <Route path={`${this.props.match.url}/${user.user.id}`} render={() => <User userID={user.user.id}  
                                                                                  username={user.user.username} 
                                                                                  description={user.user.description}/> } />
        </div>

                                                             )

    render() {
        return(
        this.renderUsers()
        )
    }

}

export default Users
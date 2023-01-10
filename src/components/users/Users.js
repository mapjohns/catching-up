import React, { Component } from "react"
import User from "./User"

class Users extends Component {

    renderUsers = () => this.props.allUsers.map(user => <User userID={user.user.id}
                                                              username={user.user.username} 
                                                              description={user.user.description}/>
                                                             )

    render() {
        // debugger
        return(
        this.renderUsers()
        )
    }

}

export default Users
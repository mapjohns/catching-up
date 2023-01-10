import React, { Component } from "react"


class Users extends Component {

    renderUsers = () => this.props.allUsers.map(user => <User /> )

    render() {
        return(
        this.renderUsers
        )
    }

}

export default Users
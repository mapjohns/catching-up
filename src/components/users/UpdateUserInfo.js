import React, { Component } from "react"

class UpdateUserInfo extends Component {

    state = {
        username: this.props.user.username,
        description: this.props.user.description
    }

    render() {
        return(
        <div>
            <form>
                <input type="text"
                       placeholder={this.props.user.username}
                       value={this.state.username} /><br></br>
                <input type="text" 
                       placeholder="Add a Description" 
                       value={this.state.description}/><br></br>
                <input type="submit" value="Update Info" />
            </form>
        </div>
        )
    }

}

export default UpdateUserInfo
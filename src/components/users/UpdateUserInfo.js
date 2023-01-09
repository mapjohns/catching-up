import React, { Component } from "react";
import { connect } from 'react-redux';
import { updateUser } from "../../actions/userActions";

class UpdateUserInfo extends Component {

    state = {
        username: this.props.user.username,
        description: this.props.user.description,
        userID: this.props.user.id
    }

    onChangeHandlerUsername = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    onChangeHandlerDescription = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        this.props.updateUser(this.state)
    }

    render() {
        return(
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <input type="text"
                       placeholder={this.props.user.username}
                       value={this.state.username} 
                       onChange={this.onChangeHandlerUsername}/><br></br>
                <input type="text" 
                       placeholder="Add a Description" 
                       value={this.state.description}
                       onChange={this.onChangeHandlerDescription}/><br></br>
                <input type="submit" value="Update Info" />
            </form>
        </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return { updateUser: userInfo => dispatch(updateUser(userInfo))
            }
}

export default connect(null, mapDispatchToProps)(UpdateUserInfo)
import React, { Component } from "react";
import { connect } from 'react-redux';
import * as postActions from "../../actions/postAction"

class PostInput extends Component {

    state = {
        message: "",
        user: this.props.userId[0]
    }

    onChangeHandlerPost = (event) => {
        this.setState({
            message: event.target.value,
        })
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
        if (!!this.props.edit) {
            const post = {message: this.state.message, user: this.state.user, post: this.props.postID}
            this.props.updatePost(post)
            this.setState({
                message: ""
              })
        }
        else {
        this.props.addPost(this.state)
        this.setState({
            message: ""
          })
        }
    }

    render() {
        return(
        <div>
            <form onSubmit={this.onSubmitHandler}>
                <h4>Post:</h4><input onChange={this.onChangeHandlerPost} value={this.state.message} type="text"/>
                <br></br>
                <input type="submit" />
            </form>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {userId: state.users.users}
}

const mapDispatchToProps = (dispatch) => {
    return { 
    addPost: message => dispatch(postActions.createPost(message)),
            updatePost: message => dispatch(postActions.editPost(message))}
}

  
export default connect(mapStateToProps, mapDispatchToProps)(PostInput)
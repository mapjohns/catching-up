import React, { Component } from "react"
import { connect } from 'react-redux';
import PostInput from "../components/posts/PostInput";

class PostsContainer extends Component {

    render() {
        return (
          <div>
            <PostInput addPost={this.props.addPost} />
          </div>
        )
      }

}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

const mapDispatchToProps = (dispatch) => {
    return { addPost: message => dispatch({type: "ADD_POST", message: message})}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
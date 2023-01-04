import React, { Component } from "react"
import { connect } from 'react-redux';
import PostInput from "../components/posts/PostInput";
import Posts from "../components/posts/Posts"
import { createPost } from "../actions/postAction";

class PostsContainer extends Component {

    render() {
        return (
          <div>
            <PostInput addPost={this.props.addPost} />
            <Posts posts={this.props.posts} />
          </div>
        )
      }
}

const mapStateToProps = (state) => {
    return {posts: state.posts.posts,
            userId: state.users.users}
}

const mapDispatchToProps = (dispatch) => {
    return { addPost: message => dispatch(createPost(message))}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
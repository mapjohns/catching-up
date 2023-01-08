import React, { Component } from "react"
import { connect } from 'react-redux';
import PostInput from "../components/posts/PostInput";
import Posts from "../components/posts/Posts"
import * as postActions from "../actions/postAction"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class PostsContainer extends Component {

    render() {
        return (
          <div>
            <PostInput addPost={this.props.addPost} userId={this.props.userId}/>
            <Link key={"TEST"} to={`${this.props.match.url}/all`}>
              See All Posts
            </Link>
            <Route path={`${this.props.match.url}/all`} render={() => <Posts match={this.props.match} posts={this.props.posts} deletePost={this.props.deletePost}/> } />

          </div>
        )
      }
}

const mapStateToProps = (state) => {
  // debugger
    return {posts: state.posts.posts,
            userId: state.users.users.id}
}

const mapDispatchToProps = (dispatch) => {
    return { addPost: message => dispatch(postActions.createPost(message)),
             updatePost: message => dispatch(postActions.editPost(message)),
             deletePost: message => dispatch(postActions.deletePost(message))
            }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
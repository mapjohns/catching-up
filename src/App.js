import React, { Component } from 'react';
import PostsContainer from './containers/PostsContainer';
import UsersContainer from './containers/UsersContainer'
import UserInput from './components/users/UserInput'
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postAction';
import { fetchComments } from './actions/commentAction';
import { fetchUsers } from './actions/userActions'

class App extends Component{

  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
    this.props.fetchUsers();
  }

  render() {
    return(
      <div>
    <Router>
      <NavBar />
      <Route exact path="/" render={() => <UserInput />} />
      <Route path="/posts" render={routerProps => <PostsContainer {...routerProps} /> } />
      <Route path="/profile" render={routerProps => <UsersContainer {...routerProps} />} />
    </Router>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(null, mapDispatchToProps)(App)

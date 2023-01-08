import React, { Component } from 'react';
import PostsContainer from './containers/PostsContainer';
import UsersContainer from './containers/UsersContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/postAction';

class App extends Component{

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return(
      <div>
    <Router>
      <NavBar />
      <Route exact path="/" component={UsersContainer} />
      <Route path="/posts" render={routerProps => <PostsContainer {...routerProps} /> } />
    </Router>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(null, mapDispatchToProps)(App)

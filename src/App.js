import React, { Component } from 'react';
import PostsContainer from './containers/PostsContainer';
import UsersContainer from './containers/UsersContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';

class App extends Component{

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

export default App;

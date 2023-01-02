import React, { Component } from 'react';
import User from './components/users/User';
import UserInput from './components/users/UserInput'
import PostInput from './components/posts/PostInput';
import PostsContainer from './containers/PostsContainer';


class App extends Component{

  render() {
    return(
      <div>
      <User />
      <UserInput />
      <PostsContainer />
      </div>
    )
  }
}

export default App;

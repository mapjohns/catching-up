import React, { Component } from 'react';
import User from './components/users/User';
import UserInput from './components/users/UserInput'
import PostInput from './components/posts/PostInput';


class App extends Component{

  render() {
    return(
      <div>
      <User />
      <UserInput />
      <PostInput />
      </div>
    )
  }
}

export default App;

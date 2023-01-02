import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import User from './components/users/User'
import managePosts from './reducers/managePosts';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(managePosts)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={User} />
      <App />
    </Router>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combinedReducer from './reducers/combinedReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(combinedReducer, applyMiddleware(thunk))

root.render(
    <Provider store={store}>
      <App />
    </Provider>

);

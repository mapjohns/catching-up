import { combineReducers } from "redux";
import managePosts from "./managePosts";
import manageUsers from "./manageUsers";
import manageComments from "./manageComments";

const rootReducer = combineReducers({
    users: manageUsers,
    posts: managePosts,
    comments: manageComments
  });
  
  export default rootReducer;
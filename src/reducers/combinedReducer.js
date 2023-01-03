import { combineReducers } from "redux";
import managePosts from "./managePosts";
import manageUsers from "./manageUsers";

const rootReducer = combineReducers({
    users: manageUsers,
    posts: managePosts
  });
  
  export default rootReducer;
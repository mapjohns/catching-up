const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "SAVE_USER_ID":
        // debugger
        return {
          ...state,
          // New Code
          users: {id: action.user.id,
                  username: action.user.username,
                  description: action.user.description,
                  loggedIn: true
                }
          // users: [action.user.id],
        };
      case "LOG_OUT_USER":
        return {
          ...state,
          users: [],
        }
      default:
        return state;
    }
  };
  
  export default usersReducer;
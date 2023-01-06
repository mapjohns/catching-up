const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "SAVE_USER_ID":
        return {
          ...state,
          users: [action.user.id],
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
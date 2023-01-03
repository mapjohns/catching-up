const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "SAVE_USER_ID":
        debugger
        return {
          ...state,
          users: [action.user.id],
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
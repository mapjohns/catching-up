const usersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "TEST_USER":
        debugger
        return {
          ...state,
          users: [...state.users],
        };
      default:
        return state;
    }
  };
  
  export default usersReducer;
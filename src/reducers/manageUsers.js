const usersReducer = (state = { user: [], users: [] }, action) => {
    switch (action.type) {
      case "SAVE_USER_ID":
        // debugger
        return {
          ...state,
          // New Code
          user: {id: action.user.id,
                  username: action.user.username,
                  description: action.user.description,
                  loggedIn: true
                }
          // users: [action.user.id],
        };
      case "LOG_OUT_USER":
        return {
          ...state,
          user: [],
        };
      case "UPDATE_USER_INFO":
        // debugger
        return {
          ...state,
          user: {
                  id: action.user.id,
                  username: action.user.username,
                  description: action.user.description,
                  loggedIn: true
          },
        };
        case "UPDATE_USERS_INFO_STATE":
          // debugger
          return  {...state, users: state.users.map((user) => 
            {if (user.user.id === action.user.user.id) 
                                          {user.user.username = action.user.user.username;
                                            user.user.description = action.user.user.description;
                return user}
            else {
                return user
            }
        }
)
    };
          ;

      case "ADD_USERS_STATE":
        const users = action.users.map(user => ({user: {id: user.id, 
                                                 username: user.username,
                                                 description: user.description}
                                                 }))
        return {
          ...state,
          users: state.users.concat(users)
        };
      case "ADD_CREATED_USER_STATE":
        const user = {user: {id: action.user.user.id,
          username: action.user.user.username,
          description: action.user.user.description}
        }
        // debugger
        return {
          ...state,
          users: state.users.concat(user)
        }
      ;
      default:
        return state
    };
  };
  
  export default usersReducer;
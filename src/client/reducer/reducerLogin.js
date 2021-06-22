const initialState = {
  isLoggedIn: false,
  language: "en",
  token: "undefined",
  error: null,
  id : '',
  type:'',			
  name : '',
  username: '',
  password: '',
  user_Id : '',
  type_Id : ''
  
};

const logInReducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "LOG_IN":
      action.data.isLoggedIn
        ? (newState.isLoggedIn = true)
        : (newState.isLoggedIn = false);
      !action.data.isLoggedIn
        ? (newState.error = action.data.error)
        : console.log("null");
      newState.language = "en";
      newState.token = action.data.token;
      newState.id = action.data.id;
      newState.name = action.data.name;
      newState.type = action.data.type;
      newState.username = action.data.login_name;
      newState.password = action.data.login_password;
      newState.user_Id = action.data.user_Id;
      newState.type_Id = action.data.type_Id;
      break;

    case "LOG_OUT":
      newState.isLoggedIn = false;
      newState.error = null;
      newState.language = "en";
      newState.token = "";
      newState.id = "";
      newState.name = "";
      newState.type = "";
      newState.username = "";
      newState.password = "";
      newState.user_Id = "";
      newState.type_Id = "";
      break;

    default:
      break;
  }

  return newState;
};

export default logInReducer;

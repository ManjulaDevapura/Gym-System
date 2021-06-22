//reducer_Users
const initialState = {
  user_data: [{ id: "", name: "", nic:"" }],
  pageNo: 0,
  loading: false,
  state: {}
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Users_data":
      newState.user_data = action.data;
      break;

      case "FETCH_User_pageNo":
        newState.pageNo = action.pageNo;
        break;
  
      case "FETCH_User_loading":
        newState.loading = action.loading;
        break;
  
      case "FETCH_User_state":
        newState.state = action.state;
        break;
        
    default:
      break;
  }
  return newState;
};

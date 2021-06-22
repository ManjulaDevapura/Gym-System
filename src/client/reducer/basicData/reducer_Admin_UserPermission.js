
//reducer_Admin_UserPermission
const initialState = {
    Admin_UserPermission_data: [
      {username:'', type:'', nic:'', name:'', activity:'', userId:'', loginId:''}],
    pageNo: 0,
    loading: false,
    state: {}
  };

  
  export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "FETCH_Admin_UserPermission_data":
        newState.Admin_UserPermission_data = action.data;
        break;
  
      case "FETCH_Admin_UserPermission_pageNo":
        newState.pageNo = action.pageNo;
        break;
  
      case "FETCH_Admin_UserPermission_loading":
        newState.loading = action.loading;
        break;
  
      case "FETCH_Admin_UserPermission_state":
        newState.state = action.state;
        break;
        
  
      default:
        break;
    }
    return newState;
  };
  
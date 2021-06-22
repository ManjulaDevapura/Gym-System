//reducer_Packages
const initialState = {
  package_data: [{ id: "", name: "", nic:"" }],
  pageNo: 0,
  loading: false,
  state: {}
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Packages_data":
      newState.package_data = action.data;
      break;

      case "FETCH_Package_pageNo":
        newState.pageNo = action.pageNo;
        break;
  
      case "FETCH_Package_loading":
        newState.loading = action.loading;
        break;
  
      case "FETCH_Package_state":
        newState.state = action.state;
        break;
        
    default:
      break;
  }
  return newState;
};

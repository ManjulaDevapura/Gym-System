//reducer_Equipment
const initialState = {
  equipment_data: [{ id: "", name: "", nic:"" }],
  pageNo: 0,
  loading: false,
  state: {}
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Equipment_data":
      newState.equipment_data = action.data;
      break;

      case "FETCH_Equipment_pageNo":
        newState.pageNo = action.pageNo;
        break;
  
      case "FETCH_Equipment_loading":
        newState.loading = action.loading;
        break;
  
      case "FETCH_Equipment_state":
        newState.state = action.state;
        break;
        
    default:
      break;
  }
  return newState;
};

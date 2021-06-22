//reducer_DuePayment
const initialState = {
  duePayment_data: [{ id: "", name: "", nic:"" }],
  pageNo: 0,
  loading: false,
  state: {}
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_DuePayment_data":
      newState.duePayment_data = action.data;
      break;

      case "FETCH_DuePayment_pageNo":
        newState.pageNo = action.pageNo;
        break;
  
      case "FETCH_DuePayment_loading":
        newState.loading = action.loading;
        break;
  
      case "FETCH_DuePayment_state":
        newState.state = action.state;
        break;
        
    default:
      break;
  }
  return newState;
};

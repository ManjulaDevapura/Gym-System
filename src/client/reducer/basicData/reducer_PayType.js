//reducer_PayType
const initialState = {
    payType_data: [{ id: "", created: "", value:"" }],
    pageNo: 0,
    loading: false,
    state: {}
  };
  
  export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "FETCH_PayType_data":
        newState.payType_data = action.data;
        break;
  
        case "FETCH_PayType_pageNo":
          newState.pageNo = action.pageNo;
          break;
    
        case "FETCH_PayType_loading":
          newState.loading = action.loading;
          break;
    
        case "FETCH_PayType_state":
          newState.state = action.state;
          break;
          
      default:
        break;
    }
    return newState;
  };
  
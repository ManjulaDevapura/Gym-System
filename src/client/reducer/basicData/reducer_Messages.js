//reducer_Message
const initialState = {
  message_data: [
    {
      Id: "",
      Subject: "",
      User: "",
      Created: "",
      Description: "",
      Type: "",
    },
  ],

  pageNo: 0,
  loading: false,
  state: {},
  noOfMsg: 0,
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Message_data":
      newState.message_data = action.data;
      break;

    case "FETCH_Message_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Message_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Message_state":
      newState.state = action.state;
      break;

    case "FETCH_Message_count":
      newState.noOfMsg = action.noOfMsg;
      break;

    default:
      break;
  }
  return newState;
};

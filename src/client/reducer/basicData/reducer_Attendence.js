//reducer_Attendence
const initialState = {
  attendence_data: [
    {
      Id: "",
      user_Id: "",
      name: "",
      in_Date: "",
      in_Time: "",
      out_Date: "",
      out_Time: "",
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
    case "FETCH_Attendence_data":
      newState.attendence_data = action.data;
      break;

    case "FETCH_Attendence_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Attendence_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Attendence_state":
      newState.state = action.state;
      break;

    case "FETCH_Attendence_count":
      newState.noOfMsg = action.noOfMsg;
      break;

    default:
      break;
  }
  return newState;
};

//reducer_Expences
const initialState = {
  expences_data: [{ id: "", created: "", value: "" }],
  member_data: [{ id: "", created: "", value: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Expences_data":
      newState.expences_data = action.data;
      break;

    case "FETCH_Expences_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Expences_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Expences_state":
      newState.state = action.state;
      break;

    case "FETCH_Expences_member":
      newState.member_data = action.data;
      break;

    default:
      break;
  }
  return newState;
};

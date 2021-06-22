//reducer_Income
const initialState = {
  income_data: [{ id: "", created: "", value: "" }],
  member_data: [{ id: "", created: "", value: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Income_data":
      newState.income_data = action.data;
      break;

    case "FETCH_Income_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Income_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Income_state":
      newState.state = action.state;
      break;

    case "FETCH_Income_member":
      newState.member_data = action.data;
      break;

    default:
      break;
  }
  return newState;
};

//reducer_Body
const initialState = {
  body_data: [{ id: "", member: "", instructor: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Body_data":
      newState.body_data = action.data;
      break;

    case "FETCH_Body_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Body_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Body_state":
      newState.state = action.state;
      break;

    default:
      break;
  }
  return newState;
};

//reducer_Diet
const initialState = {
  diet_data: [{ id: "", member: "", instructor: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Diet_data":
      newState.diet_data = action.data;
      break;

    case "FETCH_Diet_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Diet_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Diet_state":
      newState.state = action.state;
      break;

    default:
      break;
  }
  return newState;
};

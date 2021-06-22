//reducer_Excercise
const initialState = {
  excercise_data: [{ id: "", member: "", instructor: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Excercise_data":
      newState.excercise_data = action.data;
      break;

    case "FETCH_Excercise_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Excercise_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Excercise_state":
      newState.state = action.state;
      break;

    default:
      break;
  }
  return newState;
};

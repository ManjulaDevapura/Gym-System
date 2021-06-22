//reducer_Users
const initialState = {
  user_data: [{ id: "", name: "", nic: "" }],
  diet_dataPicked: [{ id: "", desc: "" }],
  exercise_dataPicked: [{ id: "", desc: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Members_data":
      newState.user_data = action.data;
      break;

    case "FETCH_Member_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Member_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Member_state":
      newState.state = action.state;
      break;

    case "FETCH_Member_dietP":
      newState.diet_dataPicked = action.data;
      break;

    case "FETCH_Member_exeP":
      newState.exercise_dataPicked = action.data;
      break;

    default:
      break;
  }
  return newState;
};

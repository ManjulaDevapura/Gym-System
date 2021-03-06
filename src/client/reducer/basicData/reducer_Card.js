//reducer_Packages
const initialState = {
  member_data: [],

  card_data: [{ id: "", Card_Id: "", User_Id: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Card_memberData":
      newState.member_data = action.data;
      break;

    case "FETCH_Card_data":
      newState.card_data = action.data;
      break;

    case "FETCH_Card_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Card_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Card_state":
      newState.state = action.state;
      break;

    default:
      break;
  }
  return newState;
};

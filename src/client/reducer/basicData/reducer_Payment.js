//reducer_Payment
const initialState = {
  payment_data: [{ id: "", name: "", nic: "" }],
  package_data: [{ id: "", name: "", amount: "" }],
  member_data: [{ id: "", name: "", amount: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Payment_data":
      newState.payment_data = action.data;
      break;

    case "FETCH_Payment_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Payment_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Payment_state":
      newState.state = action.state;
      break;

    case "FETCH_Payment_PackageData":
      newState.package_data = action.data;
      break;
    case "FETCH_Payment_MemberData":
      newState.member_data = action.data;
      break;

    default:
      break;
  }
  return newState;
};

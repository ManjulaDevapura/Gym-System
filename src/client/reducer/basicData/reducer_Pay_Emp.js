//reducer_Pay_Emp
const initialState = {
  payEmp_data: [{ id: "", created: "", value: "" }],
  member_data: [{ id: "", created: "", value: "" }],
  pageNo: 0,
  loading: false,
  state: {},
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Pay_Emp_data":
      newState.payEmp_data = action.data;
      break;

    case "FETCH_Pay_Emp_pageNo":
      newState.pageNo = action.pageNo;
      break;

    case "FETCH_Pay_Emp_loading":
      newState.loading = action.loading;
      break;

    case "FETCH_Pay_Emp_state":
      newState.state = action.state;
      break;

    case "FETCH_Pay_Emp_member":
      newState.member_data = action.data;
      break;

    default:
      break;
  }
  return newState;
};

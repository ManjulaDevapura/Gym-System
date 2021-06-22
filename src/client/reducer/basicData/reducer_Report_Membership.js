//reducer_Report_Membership
const initialState = {
  membRep_data: [],
  member_data: [],
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Report_Membership_data":
      newState.membRep_data = action.data;
      break;
      
    case "FETCH_Report_Membership_member":
      newState.member_data = action.data;
      break;



    default:
      break;
  }
  return newState;
};

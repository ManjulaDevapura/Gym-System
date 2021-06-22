//reducer_Report_Salary
const initialState = {
  salRep_data: [],
  member_data: [],
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Report_Salary_data":
      newState.salRep_data = action.data;
      break;
      
    case "FETCH_Report_Salary_member":
      newState.member_data = action.data;
      break;



    default:
      break;
  }
  return newState;
};

//reducer_Report_Profit
const initialState = {
  profRep_data: [],
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Report_Profit_data":
      newState.profRep_data = action.data;
      break;


    default:
      break;
  }
  return newState;
};

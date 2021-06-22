//reducer_Report_Income
const initialState = {
  expRep_data: [{ id: "", created: "", value: "" }],
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Report_Income_data":
      newState.expRep_data = action.data;
      break;


    default:
      break;
  }
  return newState;
};

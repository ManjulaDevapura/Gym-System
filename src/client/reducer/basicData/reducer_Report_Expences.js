//reducer_Report_Expences
const initialState = {
  expRep_data: [{ id: "", created: "", value: "" }],
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Report_Expences_data":
      newState.expRep_data = action.data;
      break;


    default:
      break;
  }
  return newState;
};

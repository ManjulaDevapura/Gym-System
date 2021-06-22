//reducer_UserTypes
const initialState = {
  userType_data: [{ id: "", type: "" }],
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_UserTypes_data":
      newState.userType_data = action.data;
      break;

    default:
      break;
  }
  return newState;
};

//reducer_Home
const initialState = {
  activeCount: 0,
  todayCount: 0,
  instructors: 0,
  packages: 0,
  lastWeekCount: [],
  packageWiseCount: [],
  user_data:[],
  diet_data:[]
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FETCH_Home_activeCount":
      newState.activeCount = action.data;
      break;
    case "FETCH_Home_todayCount":
      newState.todayCount = action.data;
      break;
    case "FETCH_Home_instructors":
      newState.instructors = action.data;
      break;
    case "FETCH_Home_packages":
      newState.packages = action.data;
      break;
    case "FETCH_Home_lastWeekCount":
      newState.lastWeekCount = action.data;
      break;
    case "FETCH_Home_packageWiseCount":
      newState.packageWiseCount = action.data;
      break;
    case "FETCH_Home_Members_data":
      newState.user_data = action.data;
      break;
    case "FETCH_Home_Diet_data":
      newState.diet_data = action.data;
      break;
    default:
      break;
  }
  return newState;
};

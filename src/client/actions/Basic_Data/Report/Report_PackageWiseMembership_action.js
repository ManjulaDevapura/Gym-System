const axios = require("axios");

// Used in Home_Action
export const getpackageWiseCount = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/home/packageWiseCount").then((res) => {
      if (res.status === 200) {
        dispatch(packageWiseCount_Async(res.data));
      }
    });
  };
};
export const packageWiseCount_Async = (data) => {
  return { type: "FETCH_Home_packageWiseCount", data };
};
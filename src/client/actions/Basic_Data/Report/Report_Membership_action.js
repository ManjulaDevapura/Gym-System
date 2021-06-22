import $ from "jquery";
const axios = require("axios");

export const fetch_Membership = (start, end, empNo, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/report/get_ReportMembership", {
        start, end, empNo,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Async(res.data));
        }
      });
  };
};

export const data_Async = (data) => {
  return { type: "FETCH_Report_Membership_data", data };
};



export const fetch_Users = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/user/get_Users_Membership", {}).then((res) => {
      if (res.status === 200) {
        dispatch(data_Users_Async(res.data));
      }
    });
  };
};

export const data_Users_Async = (data) => {
  return { type: "FETCH_Report_Membership_member", data };
}
import $ from "jquery";
const axios = require("axios");

export const fetch_Salary = (start, end, empNo, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/report/get_ReportSalary", {
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
  return { type: "FETCH_Report_Salary_data", data };
};



export const fetch_Users = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/salary/get_Users_Salary", {}).then((res) => {
      if (res.status === 200) {
        dispatch(data_Users_Async(res.data));
      }
    });
  };
};

export const data_Users_Async = (data) => {
  return { type: "FETCH_Report_Salary_member", data };
}
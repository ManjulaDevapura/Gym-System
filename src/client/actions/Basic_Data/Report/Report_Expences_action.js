import $ from "jquery";
const axios = require("axios");

export const fetch_Expences = (start, end, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/report/get_ReportExpences", {
        start, end, 
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Async(res.data));
        }
      });
  };
};

export const data_Async = (data) => {
  return { type: "FETCH_Report_Expences_data", data };
};

import $ from "jquery";
const axios = require("axios");

export const fetch_Profit = (start, end, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/report/get_ReportProfit", {
        start, end, 
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('\n\n\n\n\n\n')
          console.log(res)
          dispatch(data_Async(res.data));
        }
      });
  };
};

export const data_Async = (data) => {
  return { type: "FETCH_Report_Profit_data", data };
};

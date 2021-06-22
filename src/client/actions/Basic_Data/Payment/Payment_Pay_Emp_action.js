import $ from "jquery";
const axios = require("axios");

export const fetch_Pay_Emp = (state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/salary/get_Salary", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Async(res.data.rows));
          dispatch(pageNo_Async(res.data.pages));
          dispatch(loading_Async(false));
          dispatch(state_Async(state));
        }
      });
  };
};

export const data_Async = (data) => {
  return { type: "FETCH_Pay_Emp_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Pay_Emp_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Pay_Emp_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Pay_Emp_state", state };
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
  return { type: "FETCH_Pay_Emp_member", data };
};

export const add_Pay_Emp = (
  basic,
  allowance,
  deduction,
  total,
  user,
  loged,
  tbl_State,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/salary/add_Salary", {
        basic,
        allowance,
        deduction,
        total,
        user,
        loged,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Pay_Emp(tbl_State, token));
          $("#addPay_Emp").modal("toggle");
        }
      });
  };
};

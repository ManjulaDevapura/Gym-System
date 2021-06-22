import $ from "jquery";
const axios = require("axios");

export const fetch_Membership_Member = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/card/get_Members").then((res) => {
      if (res.status === 200) {
        dispatch(member_data_Async(res.data));
      }
    });
  };
};

export const member_data_Async = (data) => {
  return { type: "FETCH_Card_memberData", data };
};

export const add_Card = (Card_Id, User_Id, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/card/add_Card", {
        Card_Id,
        User_Id,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Cards(state, token));
          $("#addCard").modal("toggle");
        }
      });
  };
};




export const fetch_Cards = (state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/card/get_Cards", {
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
  return { type: "FETCH_Card_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Card_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Card_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Card_state", state };
};


const axios = require("axios");


export const data_Async = (data) => {
  return { type: "FETCH_Excercise_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Excercise_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Excercise_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Excercise_state", state };
};




export const fetch_Excercise = (state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/excercise/get_Excercise", {
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
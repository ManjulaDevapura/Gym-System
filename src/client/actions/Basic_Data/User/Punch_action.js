import $ from "jquery";
const axios = require("axios");

export const fetch_Users = (state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/get_Punchs", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
        type: 5, //'Punch'
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
  return { type: "FETCH_Users_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_User_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_User_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_User_state", state };
};

export const add_user = (
  nic,
  name,
  address,
  city,
  dob,
  sex,
  mob,
  state,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/user/validate_Nic_User", { nic }).then((res) => {
      if (res.status === 200) {
        if (res.data) {
          axios.defaults.headers.common["authorization"] = token;
          axios
            .post("/basicData/user/add_Punchs", {
              nic,
              name,
              address,
              city,
              dob,
              sex,
              mob,
            })
            .then((res) => {
              if (res.status === 200) {
                dispatch(fetch_Users(state, token));
                $("#addUser").modal("toggle");
              }
            });
        } else {
          document.getElementById("user_permission_nic_exits").style.display =
            "block";
        }
      }
    });
  };
};

export const update_login = (
  id,
  nic,
  name,
  address,
  city,
  dob,
  sex,
  mob,
  state,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/update_Punchs", {
        id,
        nic,
        name,
        address,
        city,
        dob,
        sex,
        mob,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Users(state, token));
          $("#updateUser").modal("toggle");
        }
      });
  };
};

export const delete_user = (userId, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/user/delete_Punchs", { userId }).then((res) => {
      if (res.status === 200) {
        dispatch(fetch_Users(state, token));
      }
    });
  };
};

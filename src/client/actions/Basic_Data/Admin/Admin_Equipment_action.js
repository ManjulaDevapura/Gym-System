import $ from "jquery";
const axios = require("axios");

export const fetch_Equipment = (state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/equipment/get_Equipment", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
        type: 1, //'admin'
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
  return { type: "FETCH_Equipment_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Equipment_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Equipment_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Equipment_state", state };
};

export const add_Equipment = (name, amount, description, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/equipment/validate_Equipment_Name", { name })
      .then((res) => {
        if (res.status === 200) {
          if (res.data) {
            axios.defaults.headers.common["authorization"] = token;
            axios
              .post("/basicData/equipment/add_Equipment", {
                name,
                amount,
                description,
              })
              .then((res) => {
                if (res.status === 200) {
                  dispatch(fetch_Equipment(state, token));
                  $("#addEquipment").modal("toggle");
                }
              });
          } else {
            document.getElementById("equipment_name_exits").style.display =
              "block";
          }
        }
      });
  };
};

export const update_Equipment = (id, name, amount, description, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/equipment/update_Equipment", {
        id,
        name,
        amount,
        description,
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Equipment(state, token));
          $("#updateEquipment").modal("toggle");
        }
      });
  };
};

export const update_Status = (id, act, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/equipment/state_Equipment", { id, act })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Equipment(state, token));
        }
      });
  };
};

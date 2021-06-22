import $ from "jquery";
const axios = require("axios");

export const fetch_Packages = (state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/package/get_Packages", {
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
  return { type: "FETCH_Packages_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Package_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Package_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Package_state", state };
};

export const add_Package = (
  name,
  amount,
  period, 
  type,
  state,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/package/validate_Package_Name", { name }).then((res) => {
      if (res.status === 200) {
        if (res.data) {
          axios.defaults.headers.common["authorization"] = token;
          axios
            .post("/basicData/package/add_Package", {
              name,
              amount,
              period,
              type,
            })
            .then((res) => {
              if (res.status === 200) {
                dispatch(fetch_Packages(state, token));
                $("#addPackage").modal("toggle");
              }
            });
        } else {
          document.getElementById("package_name_exits").style.display =
            "block";
        }
      }
    });
  };
};


export const update_Package = (
  id,
  name,
  amount,
  type,
  state,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/package/update_Package", {
        id,
        type 
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Packages(state, token));
          $("#updatePackage").modal("toggle");
        }
      });
  };
};

export const delete_Package = (id, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/package/delete_Package", { id }).then((res) => {
      if (res.status === 200) {
        dispatch(fetch_Packages(state, token));
      }
    });
  };
};

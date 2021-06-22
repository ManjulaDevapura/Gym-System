import $ from "jquery";
const axios = require("axios");

export const activeUsersCount = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/home/activeUsersCount").then((res) => {
      if (res.status === 200) {
        dispatch(activeCount_Async(res.data.activeCount));
        dispatch(todayCount_Async(res.data.todayCount));
      }
    });
  };
};

export const activeCount_Async = (data) => {
  return { type: "FETCH_Home_activeCount", data };
};

export const todayCount_Async = (data) => {
  return { type: "FETCH_Home_todayCount", data };
};

export const instructorsCount = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/home/instructorsCount").then((res) => {
      if (res.status === 200) {
        dispatch(instructors_Async(res.data.instructors));
      }
    });
  };
};
export const instructors_Async = (data) => {
  return { type: "FETCH_Home_instructors", data };
};

export const packagesCount = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/home/packagesCount").then((res) => {
      if (res.status === 200) {
        dispatch(packages_Async(res.data.packages));
      }
    });
  };
};
export const packages_Async = (data) => {
  return { type: "FETCH_Home_packages", data };
};

export const lastWeekCount = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/home/lastWeekCount").then((res) => {
      if (res.status === 200) {
        dispatch(lastWeekCount_Async(res.data));
      }
    });
  };
};
export const lastWeekCount_Async = (data) => {
  return { type: "FETCH_Home_lastWeekCount", data };
};

// Used in Report PackageWise Membership
export const getpackageWiseCount = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/home/packageWiseCount").then((res) => {
      if (res.status === 200) {
        dispatch(packageWiseCount_Async(res.data));
      }
    });
  };
};
export const packageWiseCount_Async = (data) => {
  return { type: "FETCH_Home_packageWiseCount", data };
};




export const fetch_Users = (id, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/card/get_CardMembers", {
        id: id,
        type: 4 //'Member'
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Async(res.data[0]));
        }
      });
  };
};

export const data_Async = (data) => {
  return { type: "FETCH_Home_Members_data", data };
};



export const fetch_Diet = (id, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/card/get_CardDiet", {
        id: id
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_card_Async(res.data[0]));
        }
      });
  };
};

export const data_card_Async = (data) => {
  return { type: "FETCH_Home_Diet_data", data };
};





export const fetch_Payment = (id, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/card/get_CardMembership", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
        id: id, //'admin'
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Payment_Async(res.data.rows));
          dispatch(pageNo_Async(res.data.pages));
          dispatch(loading_Async(false));
          dispatch(state_Async(state));
        }
      });
  };
};

export const data_Payment_Async = (data) => {
  return { type: "FETCH_Payment_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Payment_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Payment_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Payment_state", state };
};



export const fetch_Body = (id, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/card/get_CardBody", {
        id: id
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Body_Async(res.data));
        }
      });
  };
};
export const data_Body_Async = (data) => {
  return { type: "FETCH_Body_data", data };
};



export const fetch_Excercise = (id, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/card/get_CardExcercise", {
        id: id
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Excercise_Async(res.data));
        }
      });
  };
};
export const data_Excercise_Async = (data) => {
  return { type: "FETCH_Excercise_data", data };
};


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
          dispatch(data_Async_Pack(res.data.rows));
          dispatch(pageNo_Async_Pack(res.data.pages));
          dispatch(loading_Async_Pack(false));
          dispatch(state_Async_Pack(state));
        }
      });
  };
};

export const data_Async_Pack = (data) => {
  return { type: "FETCH_Packages_data", data };
};

export const pageNo_Async_Pack = (pageNo) => {
  return { type: "FETCH_Package_pageNo", pageNo };
};

export const loading_Async_Pack = (loading) => {
  return { type: "FETCH_Package_loading", loading };
};

export const state_Async_Pack = (state) => {
  return { type: "FETCH_Package_state", state };
};

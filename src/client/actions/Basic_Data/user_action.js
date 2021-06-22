const axios = require("axios");

export const userAsync = data => {
  return { type: "FETCH_User", data };
};

export const userStateAsync = state => {
  return { type: "FETCH_User_State", state };
};

export const userAsyncPages = pages => {
  return { type: "FETCH_User_Pages", pages };
};

export const fetchUser = (token, state) => {
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered
      })
      .then(res => {
        if (res.status === 200) {
          dispatch(userAsync(res.data.rows));
          dispatch(userAsyncPages(res.data.pages));
        }
      });
  };
};

export const addUser = (
  name,
  houseNo,
  laneName,
  roadName,
  village,
  city,
  district,
  province,
  status,
  mobile,
  email,
  accountNo,
  nicNo,
  userName,
  password,
  branchId,
  token,
  state
) => {
  console.log(name,
    houseNo,
    laneName,
    roadName,
    village,
    city,
    district,
    province,
    status,
    mobile,
    email,
    accountNo,
    nicNo,
    userName,
    password,
    branchId,
    token,
    state)
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/addUser", {
        name,
        houseNo,
        laneName,
        roadName,
        village,
        city,
        district,
        province,
        status,
        mobile,
        email,
        accountNo,
        nicNo,
        userName,
        password,
        branchId
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch(fetchUser(token, state));
        }
      });
  };
};

export const fetchBranch = token => {
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/branch").then(res => {
      if (res.status === 200) {
        dispatch(branchAsync(res.data));
      }
    });
  };
};

export const branchAsync = data => {
  return { type: "FETCH_Branch", data };
};

export const updateUser = (
  id,
  name,
  houseNo,
  laneName,
  roadName,
  village,
  city,
  district,
  province,
  status,
  mobile,
  email,
  accountNo,
  nicNo,
  userName,
  password,
  branchId,
  token,
  state
) => {
  
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/updateUser", {
        id,
        name,
        houseNo,
        laneName,
        roadName,
        village,
        city,
        district,
        province,
        status,
        mobile,
        email,
        accountNo,
        nicNo,
        userName,
        password,
        branchId
      })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch(fetchUser(token, state));
        }
      });
  };
};

export const userAsyncSelected = selected => {
  return { type: "FETCH_User_Selected", selected };
};

export const deleteUser = (id, token, state) => {
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/deleteUser", { id }).then(res => {
      if (res.status === 200) {
        console.log(res.data);
        dispatch(fetchUser(token, state));
      }
    });
  };
};

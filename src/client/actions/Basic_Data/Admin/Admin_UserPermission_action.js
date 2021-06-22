
import $ from 'jquery'
const axios = require("axios");

export const fetch_Admin_UserPermission = (state, token) => {
  
  
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/admin/get_UserPermission", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered
        
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

export const data_Async = data => {
  return { type: "FETCH_Admin_UserPermission_data", data };
};

export const pageNo_Async = pageNo => {
  return { type: "FETCH_Admin_UserPermission_pageNo", pageNo };
};

export const loading_Async = loading => {
  return { type: "FETCH_Admin_UserPermission_loading", loading };
};

export const state_Async = state => {
  return { type: "FETCH_Admin_UserPermission_state", state };
};

export const update_Activity = (userId, act, state, token) => {
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/admin/update_UserPermission", { userId, act }).
    then(res => {
      if (res.status === 200) {
        dispatch(fetch_Admin_UserPermission(state, token));
      }
    });
  };
};

export const delete_login = (userId, state, token) => {
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/admin/delete_UserPermission", { userId }).
    then(res => {
      if (res.status === 200) {
        dispatch(fetch_Admin_UserPermission(state, token));
      }
    });
  };
};



export const fetch_UserTypes = (token) => {  
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/admin/get_UserTypes")
      .then((res) => {
        if (res.status === 200) {
          dispatch(userTypes_Async(res.data));
        }
      });
  };
};

export const userTypes_Async = data => {
  return { type: "FETCH_UserTypes_data", data };
};

export const fetch_Users = (token) => {  
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/admin/get_Users")
      .then((res) => {
        if (res.status === 200) {
          dispatch(users_Async(res.data));
        }
      });
  };
};

export const users_Async = data => {
  return { type: "FETCH_Users_data", data };
};




export const add_login = (user_Id, userType_Id, userName, password, state, token) => {
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/admin/validate_UserName",{ userName })
      .then((res) => {
        if (res.status === 200) {
          if(res.data){
            axios.defaults.headers.common["authorization"] = token;
            axios.post("/basicData/admin/add_UserPermission", { user_Id, userType_Id, userName, password }).
            then(res => {
              if (res.status === 200) {
                dispatch(fetch_Admin_UserPermission(state, token));
                $('#addLogin').modal('toggle');
              }
            });
          }else{
            document.getElementById('admin_permission_username_exits').style.display = 'block'
          }
        }
      });
          
  };
};


export const update_login = (login_Id, userType_Id, userName, password, state, token) => {
  return dispatch => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/admin/validate_UserName",{ userName })
      .then((res) => {
        if (res.status === 200) {
          if(res.data){
            axios.defaults.headers.common["authorization"] = token;
            axios.post("/basicData/admin/update_Login", { login_Id, userType_Id, userName, password }).
            then(res => {
              if (res.status === 200) {
                dispatch(fetch_Admin_UserPermission(state, token));
                $('#updateLogin').modal('toggle');
              }
            });
          }else{
            document.getElementById('admin_permission_username_exits_up').style.display = 'block'
          }
        }
      });
  };
};


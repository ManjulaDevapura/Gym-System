import $ from "jquery";
const axios = require("axios");

export const fetch_Users = (state, token, instId) => {
  return (dispatch) => {
    // const empData =[{ id: "", name: "", nic:"" }];
    // dispatch(data_Async(empData));
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/get_Members_Ins", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
        type: 4, //'Member'
        instId,
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
  return { type: "FETCH_Members_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Member_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Member_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Member_state", state };
};

export const get_Instructors_member = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/user/get_Instructors_member").then((res) => {
      if (res.status === 200) {
        dispatch(data_Async_Instructors(res.data));
      }
    });
  };
};

export const data_Async_Instructors = (data) => {
  return { type: "FETCH_Users_data", data };
};

export const get_Body_ByMember = (member, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/body/get_Body_ByMember", { member }).then((res) => {
      if (res.status === 200) {
        dispatch(data_Async_Body(res.data));
      }
    });
  };
};

export const data_Async_Body = (data) => {
  return { type: "FETCH_Body_data", data };
};

export const update_Body = (
  body_Id,
  height,
  weight,
  chest,
  hip,
  neck,
  waist,
  forearm,
  calf,
  user_Id,
  instructor,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/body/update_Body", {
        body_Id,
        height,
        weight,
        chest,
        hip,
        neck,
        waist,
        forearm,
        calf,
        user_Id,
        instructor,
      })
      .then((res) => {
        if (res.status === 200) {
          $("#updateBody").modal("toggle");
        }
      });
  };
};

export const get_Diet_ByMember = (member, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/diet/get_Diet_ByMember", { member }).then((res) => {
      if (res.status === 200) {
        dispatch(data_Async_Diet(res.data));
      }
    });
  };
};

export const data_Async_Diet = (data) => {
  return { type: "FETCH_Diet_data", data };
};

export const update_Diet = (
  member_id,
  instructor_id,
  breakfast,
  lunch,
  dinner,
  description,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/diet/update_Diet", {
        member_id,
        instructor_id,
        breakfast,
        lunch,
        dinner,
        description,
      })
      .then((res) => {
        if (res.status === 200) {
          $("#addDiet").modal("toggle");
        }
      });
  };
};

export const get_Excercise_ByMember = (member, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/excercise/get_Excercise_ByMember", { member })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Async_Excercise(res.data));
        }
      });
  };
};

export const data_Async_Excercise = (data) => {
  return { type: "FETCH_Excercise_data", data };
};

export const update_Excercise = (
  member_id,
  instructor_id,
  description,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/excercise/update_Excercise", {
        member_id,
        instructor_id,
        description,
      })
      .then((res) => {
        if (res.status === 200) {
          $("#addExcercise").modal("toggle");
        }
      });
  };
};

export const get_Diet_All = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/diet/get_Diet_All").then((res) => {
      if (res.status === 200) {
        dispatch(data_Async_Diet_All(res.data));
      }
    });
  };
};

export const data_Async_Diet_All = (data) => {
  return { type: "FETCH_Member_dietP", data };
};

export const get_Exe_All = (token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/excercise/get_Exe_All").then((res) => {
      if (res.status === 200) {
        dispatch(data_Async_Exe_All(res.data));
      }
    });
  };
};

export const data_Async_Exe_All = (data) => {
  return { type: "FETCH_Member_exeP", data };
};

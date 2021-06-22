import $ from "jquery";
const axios = require("axios");

export const fetch_Messages = (state, token, id) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/messages/get_Messages", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
        inst_Id: id
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
  return { type: "FETCH_Message_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Message_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Message_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Message_state", state };
};

// export const add_Package = (
//   name,
//   amount,
//   period,
//   state,
//   token
// ) => {
//   return (dispatch) => {
//     axios.defaults.headers.common["authorization"] = token;
//     axios.post("/basicData/package/validate_Package_Name", { name }).then((res) => {
//       if (res.status === 200) {
//         if (res.data) {
//           axios.defaults.headers.common["authorization"] = token;
//           axios
//             .post("/basicData/package/add_Package", {
//               name,
//               amount,
//               period,
//             })
//             .then((res) => {
//               if (res.status === 200) {
//                 dispatch(fetch_Packages(state, token));
//                 $("#addPackage").modal("toggle");
//               }
//             });
//         } else {
//           document.getElementById("package_name_exits").style.display =
//             "block";
//         }
//       }
//     });
//   };
// };


export const update_Messages = (
  id,
  state,
  token,
  closeModel, 
  user_Id
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/messages/update_Messages", {
        id      
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Messages(state, token, user_Id));
          if(closeModel===1){
            $("#updateMessage").modal("toggle");
          }
        }
      });
  };
};

// export const delete_Package = (id, state, token) => {
//   return (dispatch) => {
//     axios.defaults.headers.common["authorization"] = token;
//     axios.post("/basicData/package/delete_Package", { id }).then((res) => {
//       if (res.status === 200) {
//         dispatch(fetch_Packages(state, token));
//       }
//     });
//   };
// };

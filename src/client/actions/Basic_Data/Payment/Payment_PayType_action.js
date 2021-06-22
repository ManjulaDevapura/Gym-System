import $ from "jquery";
const axios = require("axios");

export const fetch_PayType = (state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/payType/get_PayType", {
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
  return { type: "FETCH_PayType_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_PayType_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_PayType_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_PayType_state", state };
};


export const add_PayType = (
  reason,
  tbl_State,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/payType/add_PayType", { reason })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_PayType(tbl_State, token));
          $("#addPayType").modal("toggle");
        }
      });
  };
};



// export const fetch_Membership_Packages = (token) => {
//   return (dispatch) => {
//     axios.defaults.headers.common["authorization"] = token;
//     axios.post("/basicData/payment/get_Membership_Packages").then((res) => {
//       if (res.status === 200) {
//         dispatch(package_data_Async(res.data));
//       }
//     });
//   };
// };

// export const package_data_Async = (data) => {
//   return { type: "FETCH_Payment_PackageData", data };
// };

// export const fetch_Membership_Member = (token) => {
//   return (dispatch) => {
//     axios.defaults.headers.common["authorization"] = token;
//     axios.post("/basicData/payment/get_Membership_Members").then((res) => {
//       if (res.status === 200) {
//         dispatch(member_data_Async(res.data));
//       }
//     });
//   };
// };

// export const member_data_Async = (data) => {
//   return { type: "FETCH_Payment_MemberData", data };
// };



// export const delete_PaymentMember = (id, state, token) => {
//   return (dispatch) => {
//     axios.defaults.headers.common["authorization"] = token;
//     axios.post("/basicData/payment/delete_Payment", { id }).then((res) => {
//       if (res.status === 200) {
//         dispatch(fetch_Payment(state, token));
//       }
//     });
//   };
// };








// export const update_Package = (id, name, amount, state, token) => {
//   return (dispatch) => {
//     axios.defaults.headers.common["authorization"] = token;
//     axios
//       .post("/basicData/package/update_Package", {
//         id,
//       })
//       .then((res) => {
//         if (res.status === 200) {
//           dispatch(fetch_Payment(state, token));
//           // $("#updatePackage").modal("toggle");
//         }
//       });
//   };
// };

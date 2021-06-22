import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../actions/Basic_Data/user_action";

import stopSIgn from "../../Images/stop.gif";
const Table = lazy(() => import("./table/UserMaintainTable"));

class UserMaintain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: "",
      // name: "",
      // houseNo: "",
      // laneName: "",
      // roadName: "",
      // village: "",
      // city: "",
      // district: "",
      // province: "",
      // status: 0,
      // mobile: "",
      // email: "",
      // accountNo: "",
      // nicNo: "",
      // userName: "",
      // password: "",
      // branchId: "",
      id: "1",
      name: "name",
      houseNo: "hn",
      laneName: "ln",
      roadName: "rn",
      village: "vla",
      city: "city",
      district: "dist",
      province: "pro",
      status: 0,
      mobile: "119",
      email: "m@g",
      accountNo: "ac",
      nicNo: "nic",
      userName: "uName",
      password: "pass",
      branchId: "1",
      districtValue: []
    };
  }

  componentDidMount() {
    this.props.fetchBranch(this.props.token);

    $('[data-toggle="modal"]').hover(function() {
      $('[data-toggle="modal"]').tooltip();
    });

    $("#add_User").click(function() {
      $("#addUser").css({ display: "block" });
    });

    $("#addUserClose").click(function() {
      $("#addUser").css({ display: "none" });
    });

    $("#add").click(function() {
      $("#addUser").modal("toggle");
    });

    $(function() {
      $('[data-toggle="modal"]').tooltip();
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            {this.props.adminUser === 1 ||
            this.props.adminUser === "1" ||
            this.props.userAddUser === 1 ||
            this.props.userAddUser === "1" ? (
              <div>
                <div>
                  <div className="basicdata">
                    <div className="card mb3">
                      <div className="card-header">
                        <button
                          className="btn btn-primary"
                          id="addUserBtn"
                          data-toggle="modal"
                          data-target="#addUser"
                          title={t("Add User")}
                        >
                          {t("Add User")}
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <Suspense fallback={<div>Loading....</div>}>
                            <Table />
                          </Suspense>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="addUser" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content animate">
                      <div className="modal-header">
                        <h4 className="modal-title text-uppercase">
                          {t("Add User")}
                        </h4>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
                      <div className="modal-body">
                        <div id="addData" style={{ paddingLeft: 30 }}>
                          <table>
                            <tbody>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Name")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.name}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({ name: e.target.value })
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("NIC")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.nicNo}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({ nicNo: e.target.value })
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Account No")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.accountNo}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({
                                        accountNo: e.target.value
                                      })
                                    }
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("House No")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.houseNo}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({ houseNo: e.target.value })
                                    }
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Lane")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.laneName}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({
                                        laneName: e.target.value
                                      })
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Road")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.roadName}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({
                                        roadName: e.target.value
                                      })
                                    }
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Village")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.village}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({ village: e.target.value })
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("City")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.city}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({ city: e.target.value })
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Province")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <select
                                    id={"add_typeId"}
                                    className="custom-select"
                                    onChange={e => {
                                      this.setState({
                                        province: e.target.value
                                      });
                                      let districtFilter = [];
                                      if ("central" === e.target.value) {
                                        districtFilter = [
                                          "kandy",
                                          "matale",
                                          "nuwara eliya"
                                        ];
                                      } else if ("eastern" === e.target.value) {
                                        districtFilter = [
                                          "ampara",
                                          "batticaloa",
                                          "trincomalee"
                                        ];
                                      } else if (
                                        "north central" === e.target.value
                                      ) {
                                        districtFilter = [
                                          "anuradhapura",
                                          "polonnaruwa"
                                        ];
                                      } else if (
                                        "north western" === e.target.value
                                      ) {
                                        districtFilter = [
                                          "kurunegala",
                                          "puttalam"
                                        ];
                                      } else if (
                                        "northern" === e.target.value
                                      ) {
                                        districtFilter = [
                                          "jaffna",
                                          "kilinochchi",
                                          "mannar",
                                          "mullaitivu",
                                          "vavuniya"
                                        ];
                                      } else if (
                                        "sabaragamuwa" === e.target.value
                                      ) {
                                        districtFilter = [
                                          "kegalle",
                                          "ratnapura"
                                        ];
                                      } else if (
                                        "southern" === e.target.value
                                      ) {
                                        districtFilter = [
                                          "galle",
                                          "hambantota",
                                          "matara"
                                        ];
                                      } else if ("uva" === e.target.value) {
                                        districtFilter = [
                                          "badulla",
                                          "monaragala"
                                        ];
                                      } else if ("western" === e.target.value) {
                                        districtFilter = [
                                          "colombo",
                                          "gampaha",
                                          "kalutara"
                                        ];
                                      }

                                      this.setState({
                                        districtValue: districtFilter
                                      });
                                    }}
                                  >
                                    <option key={0} value="0">
                                      Select
                                    </option>
                                    <option key={0} value="central">
                                      central
                                    </option>
                                    <option key={0} value="eastern">
                                      eastern
                                    </option>
                                    <option key={0} value="north central">
                                      north central
                                    </option>
                                    <option key={0} value="north western">
                                      north western
                                    </option>
                                    <option key={0} value="northern">
                                      northern
                                    </option>
                                    <option key={0} value="sabaragamuwa">
                                      sabaragamuwa
                                    </option>
                                    <option key={0} value="southern">
                                      southern
                                    </option>
                                    <option key={0} value="uva">
                                      uva
                                    </option>
                                    <option key={0} value="western">
                                      western
                                    </option>
                                  </select>
                                </td>
                              </tr>

                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("District")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <select
                                    id={"add_typeId"}
                                    className="custom-select"
                                    onChange={e =>
                                      this.setState({
                                        district: e.target.value
                                      })
                                    }
                                  >
                                    <option key={0} value="0">
                                      Select
                                    </option>
                                    {this.state.districtValue === ""
                                      ? ""
                                      : this.state.districtValue.map(
                                          machineTypeData => {
                                            return (
                                              <option
                                                key={machineTypeData}
                                                value={machineTypeData}
                                              >
                                                {machineTypeData}
                                              </option>
                                            );
                                          }
                                        )}
                                  </select>
                                </td>
                              </tr>

                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Mobile")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="number"
                                    value={this.state.mobile}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({ mobile: e.target.value })
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("E mail")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="email"
                                    value={this.state.email}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({ email: e.target.value })
                                    }
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("User Name")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.userName}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({
                                        userName: e.target.value
                                      })
                                    }
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Password")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={this.state.password}
                                    className="form-control"
                                    autoComplete="off"
                                    onChange={e =>
                                      this.setState({
                                        password: e.target.value
                                      })
                                    }
                                  />
                                </td>
                              </tr>

                              <tr>
                                <td className="form-control-plaintext">
                                  {" "}
                                  {t("Branch")} :{" "}
                                </td>
                                <td>
                                  {" "}
                                  <select
                                    id={"addUserSelect"}
                                    className="custom-select"
                                    onChange={e =>
                                      this.setState({
                                        branchId: e.target.value
                                      })
                                    }
                                  >
                                    <option key={0} value="0">
                                      Select
                                    </option>
                                    {this.props.branch_data === ""
                                      ? ""
                                      : this.props.branch_data.map(
                                          branch_data => {
                                            if (
                                              branch_data.district ===
                                              this.state.district
                                            ) {
                                              return (
                                                <option
                                                  key={branch_data.id}
                                                  value={branch_data.id}
                                                >
                                                  {branch_data.name +
                                                    "-" +
                                                    branch_data.city}
                                                </option>
                                              );
                                            }
                                          }
                                        )}
                                  </select>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="modal-footer">
                          <button
                            id="add"
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              this.props.addUser(
                                this.state.name,
                                this.state.houseNo,
                                this.state.laneName,
                                this.state.roadName,
                                this.state.village,
                                this.state.city,
                                this.state.district,
                                this.state.province,
                                this.state.status,
                                this.state.mobile,
                                this.state.email,
                                this.state.accountNo,
                                this.state.nicNo,
                                this.state.userName,
                                this.state.password,
                                this.state.branchId,
                                this.props.token,
                                this.props.tableState
                              );

                              this.setState({
                                id: "",
                                name: "",
                                houseNo: "",
                                laneName: "",
                                roadName: "",
                                village: "",
                                city: "",
                                district: "",
                                province: "",
                                status: 0,
                                mobile: "",
                                email: "",
                                accountNo: "",
                                nicNo: "",
                                userName: "",
                                password: "",
                                branchId: ""
                              });
                            }}
                          >
                            {t("Save")}
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                          >
                            {t("Close")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ marginLeft: "50px" }}>
                <img
                  src={stopSIgn}
                  alt="User permission"
                  width={300}
                  height={300}
                />
                <h5>{t("Unautherized Staff Member")}</h5>
              </div>
            )}
          </div>
        )}
      </Translation>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    token: state.rLogin.token,
    tableState: state.rUser.state,
    name: state.rLogin.name,
    id: state.rLogin.id,
    branch_data: state.rBranch.branch_data,
    adminUser: state.rLogin.admin,
    userAddUser: state.rLogin.userAdd
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: (
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
      dispatch(
        actionCreator.addUser(
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
        )
      );
    },
    fetchBranch: token => {
      dispatch(actionCreator.fetchBranch(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMaintain);

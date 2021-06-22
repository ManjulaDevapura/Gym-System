import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Payment/Payment_Income_action";

const Table = lazy(() => import("./Payment_Income_Table"));

class Payment_Income extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_reason: 0,
      add_User_Id: 0,
      add_qty: 0,
      add_value: 0,
    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });

    $(function () {
      $('[data-toggle="modal"]').tooltip();
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            <div className="basicdata">
              <div className="card mb3">
                <div className="card-header">
                  <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addIncome"
                    title={t("Add Income")}
                    onClick={() => {
                      this.props.fetch_Users(this.props.token);
                      this.props.fetch_PayType(this.props.token);
                      document.getElementById("add_reason").selectedIndex = 0;
                      document.getElementById("add_User_Id").selectedIndex = 0;
                      document.getElementById(
                        "add_User_Id"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_reason"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_qty"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_value"
                      ).style.borderColor = null;
                      this.setState({
                        add_reason: 0,
                        add_User_Id: 0,
                        add_qty: 0,
                        add_value: 0,
                      });
                    }}
                  >
                    {t("Add Income")}
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
            <div id="addIncome" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate">
                  <div className="modal-header">
                    <h4 className="modal-title text-uppercase">{t("Add")}</h4>
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
                            <td>{t("Member")}* :</td>
                            <td>
                              <select
                                id={"add_User_Id"}
                                className="custom-select"
                                onChange={(e) => {
                                  this.setState({
                                    add_User_Id: e.target.value,
                                  });
                                }}
                              >
                                <option key={0} value="0">
                                  Select
                                </option>
                                {this.props.member_data === ""
                                  ? ""
                                  : this.props.member_data.map((member) => {
                                      return (
                                        <option
                                          key={member.id}
                                          value={member.id}
                                        >
                                          {member.id}
                                          {" -> "} {member.name}
                                        </option>
                                      );
                                    })}
                              </select>
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Reason")}* :</td>
                            <td>
                              <select
                                id={"add_reason"}
                                className="custom-select"
                                onChange={(e) => {
                                  this.setState({
                                    add_reason: e.target.value,
                                  });
                                }}
                              >
                                <option key={0} value="0">
                                  Select
                                </option>
                                {this.props.payType_data === ""
                                  ? ""
                                  : this.props.payType_data.map((reason) => {
                                      return (
                                        <option
                                          key={reason.id}
                                          value={reason.id}
                                        >
                                          {reason.reason}
                                        </option>
                                      );
                                    })}
                              </select>
                            </td>
                          </tr>






                          <tr>
                            <td>{t("QTY")}* :</td>
                            <td>
                              <input
                                id="add_qty"
                                value={this.state.add_qty}
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_qty: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Value")}* :</td>
                            <td>
                              <input
                                id="add_value"
                                value={this.state.add_value}
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_value: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      id="add"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        var valid = 1;
                        document.getElementById(
                          "add_User_Id"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_reason"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_qty"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_value"
                        ).style.borderColor = null;

                        
                        // if (parseInt(this.state.add_User_Id) === 0) {
                        //   document.getElementById(
                        //     "add_User_Id"
                        //   ).style.borderColor = "red";
                        //   valid = 0;
                        // }

                        if (parseInt(this.state.add_reason) === 0) {
                          document.getElementById(
                            "add_reason"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (parseInt(this.state.add_qty) === 0) {
                          document.getElementById(
                            "add_qty"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (parseInt(this.state.add_value) === 0) {
                          document.getElementById(
                            "add_value"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

                        if (valid === 1) {
                          this.props.add_Income(
                            this.props.id,
                            this.state.add_User_Id,
                            this.state.add_reason,
                            this.state.add_qty,
                            this.state.add_value,
                            this.props.tbl_state,
                            this.props.token
                          );
                        }
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
        )}
      </Translation>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    token: state.rLogin.token,

    name: state.rLogin.name,
    id: state.rLogin.user_Id,

    member_data: state.r_Income.member_data,
    payType_data: state.r_PayType.payType_data,
    tbl_state: state.r_Income.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Users: (token) => {
      dispatch(actionCreator.fetch_Users(token));
    },
    fetch_PayType: (token) => {
      dispatch(actionCreator.fetch_PayType(token));
    },

    add_Income: (logedId, User_Id, reason, qty, value, state, token) => {
      dispatch(actionCreator.add_Income(logedId, User_Id, reason, qty, value, state, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment_Income);

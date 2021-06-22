import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Payment/Payment_Pay_Emp_action";

const Table = lazy(() => import("./Payment_Employee_Table"));

class Payment_Employee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_basic: 0,
      add_allowance: 0,
      add_deduction: 0,
      add_User_Id: 0,
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
                    data-target="#addPay_Emp"
                    title={t("Add Salary")}
                    onClick={() => {
                      
                      
                      document.getElementById(
                        "add_basic"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_allowance"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_deduction"
                      ).style.borderColor = null;
                      document.getElementById("add_User_Id").selectedIndex = 0;

                      this.setState({
                        add_basic: 0,
                        add_allowance: 0,
                        add_deduction: 0,
                        add_User_Id: 0,
                      });
                      this.props.fetch_Users(this.props.token);
                     
                    }}
                  >
                    {t("Add Salary")}
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
            <div id="addPay_Emp" className="modal fade" role="dialog">
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
                            <td>{t("Employee")}* :</td>
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
                            <td>{t("Basic")}* :</td>
                            <td>
                              <input
                                id="add_basic"
                                value={this.state.add_basic}
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_basic: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Allowance")}* :</td>
                            <td>
                              <input
                                id="add_allowance"
                                value={this.state.add_allowance}
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_allowance: e.target.value })
                                }
                              />
                            </td>
                          </tr>  <tr>
                            <td>{t("Deduction")}* :</td>
                            <td>
                              <input
                                id="add_deduction"
                                value={this.state.add_deduction}
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_deduction: e.target.value })
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
                          "add_basic"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_allowance"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_deduction"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_User_Id"
                        ).style.borderColor = null;

                        
                        if (parseInt(this.state.add_basic) <= 0) {
                          document.getElementById(
                            "add_basic"
                          ).style.borderColor = "red";
                          valid = 0;
                        } if (parseInt(this.state.add_allowance) < 0) {
                          document.getElementById(
                            "add_allowance"
                          ).style.borderColor = "red";
                          valid = 0;
                        } if (parseInt(this.state.add_deduction) < 0) {
                          document.getElementById(
                            "add_deduction"
                          ).style.borderColor = "red";
                          valid = 0;
                        }if (parseInt(this.state.add_User_Id) === 0) {
                          document.getElementById(
                            "add_User_Id"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

const total =
  parseInt(this.state.add_basic) +
  parseInt(this.state.add_allowance) -
  parseInt(this.state.add_deduction);


if (valid === 1) {
  this.props.add_Pay_Emp(
    this.state.add_basic,
    this.state.add_allowance,
    this.state.add_deduction,
    total,
    this.state.add_User_Id,
    this.props.id,
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

    member_data: state.r_PayEmp.member_data,
    tbl_state: state.r_PayEmp.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Users: (token) => {
      dispatch(actionCreator.fetch_Users(token));
    },

    add_Pay_Emp: (
      basic,
      allowance,
      deduction,
      total,
      user,
      loged,
      state,
      token
    ) => {
      dispatch(
        actionCreator.add_Pay_Emp(
          basic,
          allowance,
          deduction,
          total,
          user,
          loged,
          state,
          token
        )
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment_Employee);

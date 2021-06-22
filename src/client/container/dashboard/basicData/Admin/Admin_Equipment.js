import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Admin/Admin_Equipment_action";

const Table = lazy(() => import("./Admin_Equipment_Table"));

class Admin_Equipment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_id: 0,
      add_name: "",
      add_amount: 0,
      add_description: "",
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
                    data-target="#addEquipment"
                    title={t("Add Equipment")}
                    onClick={() => {
                      document.getElementById(
                        "add_name"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_amount"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_description"
                      ).style.borderColor = null;
                      this.setState({
                        add_id: 0,
                        add_name: "",
                        add_amount: 0,
                        add_description: "",
                      });
                    }}
                  >
                    {t("Add Equipment")}
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
            <div id="addEquipment" className="modal fade" role="dialog">
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
                            <td>{t("Name")}* :</td>
                            <td>
                              <input
                                id="add_name"
                                value={this.state.add_name}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>{
                                  this.setState({ add_name: e.target.value });
                                  document.getElementById("equipment_name_exits").style.display = "none";
                                }}
                              />
                            </td>
                            <td id='equipment_name_exits' style={{color: 'red', display: 'none'}}>{t("Exist")}</td>
                          </tr>

                          <tr>
                            <td>{t("Amount")}* :</td>
                            <td>
                              <input
                                id="add_amount"
                                value={this.state.add_amount}
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_amount: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("Description")}* :</td>
                            <td>
                              <input
                                id="add_description"
                                value={this.state.add_description}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_description: e.target.value })
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
                          "add_name"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_amount"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_description"
                        ).style.borderColor = null;

                        if (this.state.add_name.toString().trim() === "") {
                          document.getElementById(
                            "add_name"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (parseInt(this.state.add_amount) <= 0) {
                          document.getElementById(
                            "add_amount"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (this.state.add_description.toString().trim() === "") {
                          document.getElementById(
                            "add_description"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (valid === 1) {
                          this.props.add_Equipment(
                            this.state.add_name.toString().trim(),
                            this.state.add_amount,
                            this.state.add_description.toString().trim(),
                            this.props.tbl_State,
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
    id: state.rLogin.id,

    tbl_State: state.r_Equipment.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_Equipment: (name, amount, description, state, token) => {
      dispatch(actionCreator.add_Equipment(name, amount, description, state, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin_Equipment);

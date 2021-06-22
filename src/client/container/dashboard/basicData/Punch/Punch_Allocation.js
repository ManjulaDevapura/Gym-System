import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Punch/Punch_Allocation_action";

const Table = lazy(() => import("./Punch_Allocation_Table"));

class Punch_Allocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_Card_Id: 0,
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
                    data-target="#addCard"
                    title={t("Add Card")}
                    onClick={() => {
                      this.props.fetch_Membership_Member(this.props.token);
                      document.getElementById("add_User_Id").selectedIndex = 0;
                      document.getElementById(
                        "add_Card_Id"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_User_Id"
                      ).style.borderColor = null;
                      this.setState({
                        add_Card_Id: 0,
                        add_User_Id: 0,
                      });
                    }}
                  >
                    {t("Add Card")}
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
            <div id="addCard" className="modal fade" role="dialog">
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
                            <td>{t("Card No")}* :</td>
                            <td>
                              <input
                                id="add_Card_Id"
                                value={this.state.add_Card_Id}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_Card_Id: e.target.value })
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
                          "add_Card_Id"
                        ).style.borderColor = null;

                        if (this.state.add_Card_Id.toString().trim() === "") {
                          document.getElementById(
                            "add_Card_Id"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (parseInt(this.state.add_User_Id) === 0) {
                          document.getElementById(
                            "add_User_Id"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

                        if (valid === 1) {
                          this.props.add_Card(
                            this.state.add_Card_Id.toString().trim(),
                            this.state.add_User_Id,
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
    id: state.rLogin.id,

    member_data: state.r_Card.member_data,
    tbl_state: state.r_Card.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Membership_Member: (token) => {
      dispatch(actionCreator.fetch_Membership_Member(token));
    },

    add_Card: (Card_Id, User_Id, state, token) => {
      dispatch(actionCreator.add_Card(Card_Id, User_Id, state, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Punch_Allocation);

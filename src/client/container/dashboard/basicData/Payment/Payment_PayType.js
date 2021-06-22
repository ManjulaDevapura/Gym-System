import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Payment/Payment_PayType_action";

const Table = lazy(() => import("./Payment_PayType_Table"));

class Payment_PayType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_reason: ''
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
                    data-target="#addPayType"
                    title={t("Add Pay Type")}
                    onClick={() => {
                      document.getElementById(
                        "add_reason"
                      ).style.borderColor = null;
                      this.setState({
                        add_reason: 0
                      });
                    }}
                  >
                    {t("Add Pay Type")}
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
            <div id="addPayType" className="modal fade" role="dialog">
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
                            <td>{t("Reason")}* :</td>
                            <td>
                              <input
                                id="add_reason"
                                value={this.state.add_reason}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_reason: e.target.value })
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
                          "add_reason"
                        ).style.borderColor = null;
                        

                        if (this.state.add_reason.toString().trim() === "") {
                          document.getElementById(
                            "add_reason"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

                        if (valid === 1) {
                          this.props.add_PayType(
                            this.state.add_reason.toString().trim(),
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
    tbl_state: state.r_PayType.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

    add_PayType: (reason, state, token) => {
      dispatch(actionCreator.add_PayType(reason, state, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment_PayType);

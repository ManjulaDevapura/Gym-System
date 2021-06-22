import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Report/Report_Message_action";
const axios = require("axios");

class Report_Message_Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pages: null,
      loading: false,

      msg_Id: "",
      msg_Subject: "",
      msg_User: "",
      msg_Created: "",
      msg_Description: "",
      msg_Type: "",

      columns: [
        {
          Header: `${i18n.t("ID")}`,
          accessor: "id",
          width: 50,
          maxWidth: 50,
          minWidth: 50,
        },
        {
          Header: `${i18n.t("Subject")}`,
          accessor: "subject",
        },
        {
          Header: `${i18n.t("Type")}`,
          accessor: "type",
          Cell: (row) => {
            switch (parseInt(row.original.type)) {
              case 1:
                return (
                  <div
                    style={{
                      backgroundColor: "red",
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    <span>High</span>
                  </div>
                );
              case 2:
                return (
                  <div
                    style={{
                      backgroundColor: "orange",
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    <span>Urgent</span>
                  </div>
                );
                break;
              case 3:
                return (
                  <div
                    style={{
                      backgroundColor: "yellow",
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    <span>Normal</span>
                  </div>
                );
                break;
              case 4:
                return (
                  <div
                    style={{ backgroundColor: "white", textAlign: "center" }}
                  >
                    <span>Low</span>
                  </div>
                );
                break;
              default:
                return "";
                break;
            }
          },
        },
        {
          Header: `${i18n.t("Status")}`,
          accessor: "status",
          Cell: (row) => {
            if (parseInt(row.original.status) === 1) {
              return "Completed";
            } else if (parseInt(row.original.status) === 0) {
              return "Pending";
            } else {
              return "";
            }
          },
        },
        {
          Header: `${i18n.t("Member")}`,
          accessor: "userData",
        },
        {
          Header: `${i18n.t("Created")}`,
          accessor: "created",
        },
        {
          Header: `${i18n.t("Description")}`,
          accessor: "description",
        },
        {
          Header: `${i18n.t("Actions")}`,
          accessor: "id",
          sortable: false,
          filterable: false,
          width: 100,
          maxWidth: 100,
          minWidth: 100,
          Cell: (row) => (
            <div>
              <button
                id="update"
                data-toggle="modal"
                title={i18n.t("View")}
                data-target="#updateMessage"
                data-trigger="hover"
                className="btn btn-sm"
                onClick={() => {
                  this.setState({
                    msg_Id: row.original.id,
                    msg_Subject: row.original.subject,
                    msg_User: row.original.userData,
                    msg_Created: row.original.created,
                    msg_Description: row.original.description,
                    msg_Type: row.original.type,
                  });
                }}
              >
                {/* <i className="fas fa-pencil-alt"></i> */}
                <i className="fas fa-eye"></i>
              </button>
              <button
                id="delete"
                data-toggle="modal"
                title={i18n.t("Make Read")}
                // data-target="#section"
                className="btn btn-sm"
                onClick={() => {
                  this.props.update_Messages(
                    row.original.id,
                    this.props.tbl_State,
                    this.props.token
                  );
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ),
        },
      ],
    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            {this.props.dataSet ? (
              <ReactTable
                data={this.props.dataSet}
                pages={this.props.pageNo}
                loading={this.props.loading}
                defaultPageSize={5}
                className="-striped -highlight"
                manual
                onFetchData={(state, instance) => {
                  this.props.fetch_Messages(state, this.props.token, this.props.user_Id );
                }}
                columns={this.state.columns}
                previousText={t("Previous")}
                nextText={t("Next")}
                loadingText={t("Loading") + "..."}
                noDataText={t("Oops") + "...!"}
                pageText={t("Page")}
                ofText={t("of")}
                rowsText={t("rows")}
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value
                }
              />
            ) : (
              ""
            )}

            <div id="updateMessage" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate">
                  <div
                    className="modal-header"
                    style={{
                      backgroundColor:
                        parseInt(this.state.msg_Type) === 1
                          ? "Red"
                          : parseInt(this.state.msg_Type) === 2
                          ? "Orange"
                          : parseInt(this.state.msg_Type) === 3
                          ? "Yellow"
                          : "Green",
                    }}
                  >
                    <h4 className="modal-title text-uppercase">{t("View")}</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div id="updData" style={{ paddingLeft: 30 }}>
                      <table>
                        <tbody>
                          <tr>
                            <td>{t("ID")} :</td>
                            <td>
                              <input
                                id="msg_Id"
                                value={this.state.msg_Id}
                                disabled
                                type="text"
                                className="form-control"
                                autoComplete="off"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Subject")} :</td>
                            <td>
                              <input
                                id="msg_Subject"
                                value={this.state.msg_Subject}
                                disabled
                                type="text"
                                className="form-control"
                                autoComplete="off"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("User")} :</td>
                            <td>
                              <input
                                id="msg_User"
                                value={this.state.msg_User}
                                disabled
                                type="text"
                                className="form-control"
                                autoComplete="off"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Created")} :</td>
                            <td>
                              <input
                                id="msg_Created"
                                value={this.state.msg_Created}
                                disabled
                                type="text"
                                className="form-control"
                                autoComplete="off"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Description")} :</td>
                            <td>
                              <textarea
                                id="msg_Description"
                                value={this.state.msg_Description}
                                disabled
                                type="text"
                                className="form-control"
                                autoComplete="off"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                  <button
                id="delete"
                data-toggle="modal"
                title={i18n.t("Make Read")}
                // data-target="#section"
                className="btn btn-outline-warning"
                onClick={() => {
                  this.props.update_Messages(
                    this.state.msg_Id,
                    this.props.tbl_State,
                    this.props.token,
                    1,//for close model
                    this.props.user_Id
                  );
                }}
              >
                Read
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
    user_Id: state.rLogin.user_Id,

    dataSet: state.r_Message.message_data,
    pageNo: state.r_Message.pageNo,
    loading: state.r_Message.loading,
    tbl_State: state.r_Message.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Messages: (state, token, id) => {
      dispatch(actionCreator.fetch_Messages(state, token, id));
    },
    // delete_Package: (id, state, token) => {
    //   dispatch(actionCreator.delete_Package(id, state, token));
    // },
    update_Messages: (id, state, token, closeModel, user_Id) => {
      dispatch(actionCreator.update_Messages(id, state, token, closeModel, user_Id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report_Message_Table);

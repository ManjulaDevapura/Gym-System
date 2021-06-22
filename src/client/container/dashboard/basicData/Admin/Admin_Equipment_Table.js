import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Admin/Admin_Equipment_action";
const axios = require("axios");

class Admin_Equipment_Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pages: null,
      loading: false,

      upd_id: 0,
      upd_name: "",
      upd_amount: 0,

      columns: [
        {
          Header: `${i18n.t("ID")}`,
          accessor: "id",
          width: 50,
          maxWidth: 50,
          minWidth: 50,
        },
        {
          Header: `${i18n.t("Name")}`,
          accessor: "name",
        },
        {
          Header: `${i18n.t("Amount")}`,
          accessor: "value",
        },
        {
          Header: `${i18n.t("Description")}`,
          accessor: "description",
          width: 500,
        },
        {
          Header: `${i18n.t("Status")}`,
          accessor: "status",
          width: 100,
          Cell: (row, a, b) => {
           
            if (
              row.original.id === null ||
              row.original.id === undefined ||
              row.original.id === ""
            ) {
              return <></>;
            } else {
              return (
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`add ${
                      row.original.id === null ? row.original.id : row.original.id
                    }`}
                    checked={row.original.status === 0 ? false : true}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`add ${
                      row.original.id === null ? row.original.id : row.original.id
                    }`}
                    onClick={() => {
                      const act = row.original.status === 0 ? 1 : 0;
                      this.props.update_Status(
                        row.original.id,
                        act,
                        this.props.tbl_State,
                        this.props.token
                      );
                    }}
                  ></label>
                </div>
              );
            }
          }
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
                title={i18n.t("Update")}
                data-target="#updateEquipment"
                data-trigger="hover"
                className="btn btn-sm"
                onClick={() => {
                  this.setState({
                    upd_id: row.original.id,
                    upd_name: row.original.name,
                    upd_amount: row.original.amount,
                    upd_description: row.original.description,
                  });

                 
                  document.getElementById(
                    "upd_name"
                  ).style.borderColor = null;
                  document.getElementById(
                    "upd_amount"
                  ).style.borderColor = null;
                  document.getElementById(
                    "upd_description"
                  ).style.borderColor = null;

                  // this.props.update_Package(
                  //   row.original.id,
                  //   row.original.name,
                  //   row.original.amount,
                  //     this.props.tbl_State,
                  //     this.props.token
                  // );
                }}
              >
                <i className="fas fa-pencil-alt"></i>
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
                  this.props.fetch_Equipment(state, this.props.token);
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

            <div id="updateEquipment" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate">
                  <div className="modal-header">
                    <h4 className="modal-title text-uppercase">
                      {t("Update")}
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
                    <div id="updData" style={{ paddingLeft: 30 }}>
                      <table>
                        <tbody>
                          <tr>
                            <td>{t("ID")} :</td>
                            <td>
                              <input
                                id="upd_id"
                                value={this.state.upd_id}
                                disabled
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) => {
                                  // this.setState({ upd_nic: e.target.value })
                                }}
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Name")}* :</td>
                            <td>
                              <input
                                id="upd_name"
                                value={this.state.upd_name}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) => {
                                  // this.setState({ upd_name: e.target.value })
                                }}
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Amount")}* :</td>
                            <td>
                              <input
                                id="upd_amount"
                                value={this.state.upd_amount}
                                type="number"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) => {
                                  this.setState({ upd_amount: e.target.value })
                                }}
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Description")}* :</td>
                            <td>
                              <input
                                id="upd_description"
                                value={this.state.upd_description}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) => {
                                  this.setState({ upd_description: e.target.value })
                                }}
                              />
                            </td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      id="upd"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        var valid = 1;

                        document.getElementById(
                          "upd_name"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_amount"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_description"
                        ).style.borderColor = null;

                        if (this.state.upd_name.toString().trim() === "") {
                          document.getElementById(
                            "upd_name"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

                        if (parseInt(this.state.upd_amount) <= 0) {
                          document.getElementById(
                            "upd_amount"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (this.state.upd_description.toString().trim() === "") {
                          document.getElementById(
                            "upd_description"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

                        if (valid === 1) {
                           this.props.update_Equipment(
                            this.state.upd_id,
                            this.state.upd_name,
                            this.state.upd_amount,
                            this.state.upd_description,
                            this.props.tbl_State,
                            this.props.token);
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

    dataSet: state.r_Equipment.equipment_data,
    pageNo: state.r_Equipment.pageNo,
    loading: state.r_Equipment.loading,
    tbl_State: state.r_Equipment.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Equipment: (state, token) => {
      dispatch(actionCreator.fetch_Equipment(state, token));
    },
    update_Status: (id, act, state, token) => {
      dispatch(actionCreator.update_Status(id, act, state, token));
    },
    update_Equipment: (id, name, amount, description, state, token) => {
      dispatch(actionCreator.update_Equipment(id, name, amount, description, state, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin_Equipment_Table);

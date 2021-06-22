import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Admin/Admin_Package_action";
const axios = require("axios");

class Admin_Package_Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pages: null,
      loading: false,

      upd_id: 0,
      upd_name: "",
      upd_amount: 0,
      upd_type: "",

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
          accessor: "amount",
        },
        {
          Header: `${i18n.t("Period- Days")}`,
          accessor: "period",
          width: 200,
        },
        {
          Header: `${i18n.t("Type")}`,
          accessor: "type",
          width: 200,
        },
        {
          Header: `${i18n.t("Validity")}`,
          accessor: "expired",
          Cell: (row) => {
            if (parseInt(row.original.expired) === 1) {
              return <span style={{color: 'red', fontWeight: 'bold'}}>Expired</span>;
            } else if (parseInt(row.original.expired) === 0) {
              return <span>Valid</span>;
            } else {
              return <></>;
            }
          },
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
                data-target="#updatePackage"
                data-trigger="hover"
                className="btn btn-sm"
                onClick={() => {
                  this.setState({
                    upd_id: row.original.id,
                    upd_name: row.original.name,
                    upd_amount: row.original.amount,
                    upd_type: row.original.type,
                  });

                  // document.getElementById("upd_name").style.borderColor = null;
                  // document.getElementById(
                  //   "upd_amount"
                  // ).style.borderColor = null;
                  document.getElementById("upd_type").style.borderColor = null;
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
              <button
                id="delete"
                data-toggle="modal"
                title={i18n.t("Delete")}
                // data-target="#section"
                className="btn btn-sm"
                onClick={() => {
                  this.props.delete_Package(
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
                  this.props.fetch_Packages(state, this.props.token);
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

            <div id="updatePackage" className="modal fade" role="dialog">
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
                                  // this.setState({ upd_amount: e.target.value })
                                }}
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("Type")}* :</td>
                            <td>
                              <input
                                id="upd_type"
                                value={this.state.upd_type}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) => {
                                  this.setState({ upd_type: e.target.value })
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
                          "upd_type"
                        ).style.borderColor = null;

                        // if (this.state.upd_name.toString().trim() === "") {
                        //   document.getElementById(
                        //     "upd_name"
                        //   ).style.borderColor = "red";
                        //   valid = 0;
                        // }

                        // if (parseInt(this.state.upd_amount) <= 0) {
                        //   document.getElementById(
                        //     "upd_amount"
                        //   ).style.borderColor = "red";
                        //   valid = 0;
                        // }
                        
                        if (this.state.upd_type.toString().trim() === "") {
                          document.getElementById(
                            "upd_type"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

                        if (valid === 1) {
                           this.props.update_Package(
                            this.state.upd_id,
                            this.state.upd_name,
                            this.state.upd_amount,
                            this.state.upd_type,
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

    dataSet: state.r_Packages.package_data,
    pageNo: state.r_Packages.pageNo,
    loading: state.r_Packages.loading,
    tbl_State: state.r_Packages.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Packages: (state, token) => {
      dispatch(actionCreator.fetch_Packages(state, token));
    },
    delete_Package: (id, state, token) => {
      dispatch(actionCreator.delete_Package(id, state, token));
    },
    update_Package: (id, name, amount, type, state, token) => {
      dispatch(actionCreator.update_Package(id, name, amount, type, state, token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin_Package_Table);

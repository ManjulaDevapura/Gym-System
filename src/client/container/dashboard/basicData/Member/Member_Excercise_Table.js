import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Member/Member_Excercise_action";
const axios = require("axios");

class Member_Excercise_Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pages: null,
      loading: false,
      view_id:0,
      view_Member_Id:0,
      view_Member_Name:'',
      view_Instructor_Id:0,
      view_Instructor_Name:'',
      view_Created:'',
      view_Description:'',

      columns: [
        {
          Header: `${i18n.t("ID")}`,
          accessor: "id",
          width: 50,
          maxWidth: 50,
          minWidth: 50,
        },
        {
          Header: `${i18n.t("Member")}`,
          accessor: "user_Id",
          Cell: (row) => {
            return (
              <>
                <span>
                  {row.original.user_Id} - {row.original.name}
                </span>
              </>
            );
          },
        },
        {
          Header: `${i18n.t("Instructor")}`,
          accessor: "instructor_Id",
          Cell: (row) => {
            return (
              <>
                <span>
                  {row.original.instructor_Id} - {row.original.ins_name}
                </span>
              </>
            );
          },
        },
        {
          Header: `${i18n.t("Created")}`,
          accessor: "created",
          Cell: (row) => {
            if (
              row.original.id === null ||
              row.original.id === undefined ||
              row.original.id === ""
            ) {
              return <></>;
            } else {
              var dateObj = new Date(row.original.created).toLocaleString();
              return (
                <>
                  <span>{dateObj.split(",", 2)}</span>
                </>
              );
            }
          },
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
          width: 75,
          maxWidth: 75,
          minWidth: 75,
          Cell: (row) => (
            <div>
              <button
                id="view"
                data-toggle="modal"
                title={i18n.t("View")}
                data-target="#viewExcercise"
                data-trigger="hover"
                className="btn btn-sm"
                onClick={() => {
                  var dateObj = new Date(row.original.created).toLocaleString();
                  
                  this.setState({
                    view_id:row.original.id,
                    view_Member_Id:row.original.user_Id,
                    view_Member_Name:row.original.name,
                    view_Instructor_Id:row.original.instructor_Id,
                    view_Instructor_Name:row.original.ins_name,
                    view_Created:dateObj.split(",", 2),
                    view_Description:row.original.description,
                  });
                }}
              >
                <i className="fas fa-eye"></i>
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
                  this.props.fetch_Excercise(state, this.props.token);
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
                // getTrProps={(state, rowInfo, column) => {

                // }}
              />
            ) : (
              ""
            )}
            <div id="viewExcercise" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate">
                  <div className="modal-header">
                    <h4 className="modal-title text-uppercase">
                      {t("View")}
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
                    <div id="viewData" style={{ paddingLeft: 30 }}>
                      <table>
                        <tbody>
                          <tr>
                            <td>{t("Id")} :</td>
                            <td><input value={this.state.view_id} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Member Id")} :</td>
                            <td><input value={this.state.view_Member_Id} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Member Name")} :</td>
                            <td><input value={this.state.view_Member_Name} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Created")} :</td>
                            <td><input value={this.state.view_Created} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Instructor Id")} :</td>
                            <td><input value={this.state.view_Instructor_Id} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Instructor Name")} :</td>
                            <td><input value={this.state.view_Instructor_Name} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Description")} :</td>
                            <td><textarea value={this.state.view_Description} style={{width: 300, height:250}} disabled type="text" className="form-control" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" >{t("Close")}</button>
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

    dataSet: state.r_Excercise.excercise_data,
    pageNo: state.r_Excercise.pageNo,
    loading: state.r_Excercise.loading,
    tbl_State: state.r_Excercise.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Excercise: (state, token) => {
      dispatch(actionCreator.fetch_Excercise(state, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member_Excercise_Table);

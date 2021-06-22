import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Admin/Admin_UserPermission_action";
const axios = require("axios");

class Admin_UserPermission_Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pages: null,
      loading: false,
      upd_loginId:0,
      upd_userId: 0,
      upd_userTypeId: 0,
      upd_userName: "",
      upd_password: "",


     columns : [
      {
        Header: `${i18n.t("ID")}`,
        accessor: "id",
        width: 50,
        maxWidth: 50,
        minWidth: 50,
      },
      {
        Header: `${i18n.t("User Name")}`,
        accessor: "username",
      },
      {
        Header: `${i18n.t("Type")}`,
        accessor: "type",
      },
      {
        Header: `${i18n.t("Nic")}`,
        accessor: "nic",
      },
      {
        Header: `${i18n.t("Name")}`,
        accessor: "name",
      },
      {
        Header: `${i18n.t("Status")}`,
        accessor: "activity",
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
                  checked={row.original.activity === 0 ? false : true}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`add ${
                    row.original.id === null ? row.original.id : row.original.id
                  }`}
                  onClick={() => {
                    const act = row.original.activity === 0 ? 1 : 0;
                    this.props.update_Activity(
                      row.original.user_Id,
                      act,
                      this.props.tbl_State,
                      this.props.token
                    );
                  }}
                ></label>
              </div>
            );
          }
          // if (row.original.activity === 1 || row.original.activity === "1") {
          //   return "Active";
          // } else {
          //   return "Inactive";
          // }
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
              data-target="#updateLogin"
              data-trigger="hover"
              className="btn btn-sm"
              onClick={() => {
                this.props.fetch_UserTypes(this.props.token);
                this.setState({
                  upd_loginId: row.original.id,
                  upd_userId: row.original.user_Id+"-"+row.original.name,
                  upd_userTypeId: row.original.type_Id,
                  upd_userName: row.original.username,
                  upd_password: '',
                });
                
                document.getElementById("upd_userType").selectedIndex = 0;
                document.getElementById('upd_userType').style.borderColor = null
                document.getElementById('upd_userName').style.borderColor = null
                document.getElementById('upd_password').style.borderColor = null
                document.getElementById('admin_permission_username_exits_up').style.display = 'none'
                
              }}
            >
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button
              id="delete"
              data-toggle="modal"
              title={i18n.t("Delete")}
              data-target="#section"
              className="btn btn-sm"
              // disabled
              onClick={() => {
                this.props.delete_login(
                  row.original.user_Id,
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
    ]

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
                  this.props.fetch_Admin_UserPermission(
                    state,
                    this.props.token
                  );
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


<div id="updateLogin" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate">
                  <div className="modal-header">
                    <h4 className="modal-title text-uppercase">{t("Update")}</h4>
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
                            <td>{t("User")}* :</td>
                            <td>
                              <input id="upd_user" value={this.state.upd_userId} type="text" className="form-control" autoComplete="off" readOnly/>
                                {/* <select id={'upd_user'} className='custom-select' onChange={e => this.setState({ upd_userId: e.target.value })}>
                                    <option key={0} value="0">Select</option>
                                        {this.props.user_data === '' ? '' : this.props.user_data.map(user => {
                                            return (<option key={user.id} value={user.id}>{user.id}-{user.name}</option>)
                                        })}
                                </select> */}
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Type")}* :</td>
                            <td>
                                <select id={'upd_userType'} className='custom-select' onChange={e => this.setState({ upd_userTypeId: e.target.value })}>
                                    <option key={0} value="0">Select</option>
                                        {this.props.userType_data === '' ? '' : this.props.userType_data.map(userType_data => {
                                            return (<option key={userType_data.id} value={userType_data.id}>{userType_data.type}</option>)
                                        })}
                                </select>
                            </td>
                          </tr>
                          <tr>
                            <td>{t("User Name")}* :</td>
                            <td>
                              <input id="upd_userName" value={this.state.upd_userName} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>{
                                  this.setState({ upd_userName: e.target.value })
                                  document.getElementById('admin_permission_username_exits_up').style.display = 'none'
                                }}
                              />
                            </td>
                            <td><span id='admin_permission_username_exits_up' style={{display: 'none', color: 'red', fontWeight: 'bold'}}> {t("Exists")}</span></td>
                          </tr>
                          <tr>
                            <td>{t("Password")}* :</td>
                            <td>
                              <input id="upd_password" value={this.state.upd_password} type="password" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_password: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button id='upd' type="button" className="btn btn-primary" onClick={() => {
                      
                      var valid = 1;
                      
                      document.getElementById('upd_userType').style.borderColor = null
                      document.getElementById('upd_userName').style.borderColor = null
                      document.getElementById('upd_password').style.borderColor = null
                      
                      
                      if(parseInt(this.state.upd_userTypeId)===0){
                      document.getElementById('upd_userType').style.borderColor = 'red'
                      valid = 0;
                    }
                      if((this.state.upd_userName).toString().trim()===''){
                      document.getElementById('upd_userName').style.borderColor = 'red'
                      valid = 0;
                    }
                    // if((this.state.upd_password).toString().trim()===''){
                    //   document.getElementById('upd_password').style.borderColor = 'red'
                    //   valid = 0;
                    // }
            if(valid===1){
               this.props.update_login(this.state.upd_loginId, this.state.upd_userTypeId, this.state.upd_userName, this.state.upd_password, this.props.tbl_State, this.props.token);
            }
                      }}>{t('Save')}</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">{t('Close')}</button>
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

    dataSet: state.r_Admin_UserPermission.Admin_UserPermission_data,
    pageNo: state.r_Admin_UserPermission.pageNo,
    loading: state.r_Admin_UserPermission.loading,
    tbl_State: state.r_Admin_UserPermission.state,
    userType_data: state.r_UserTypes.userType_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Admin_UserPermission: (state, token) => {
      dispatch(actionCreator.fetch_Admin_UserPermission(state, token));
    },
    // data_Async: data => {
    //   dispatch(actionCreator.data_Async(data));
    // },
    // pageNo_Async: pageNo => {
    //   dispatch(actionCreator.pageNo_Async(pageNo));
    // },
    // loading_Async: loading => {
    //   dispatch(actionCreator.loading_Async(loading));
    // },
    update_Activity: (user_Id, act, state, token) => {
      dispatch(actionCreator.update_Activity(user_Id, act, state, token));
    },
    delete_login: (user_Id, state, token) => {
      dispatch(actionCreator.delete_login(user_Id, state, token));
    },
    update_login: (login_Id, userType_Id, userName, password, state, token) => {
      dispatch(
        actionCreator.update_login(
          login_Id,
          userType_Id,
          userName,
          password,
          state,
          token
        )
      );
    },
    fetch_UserTypes: (token) => {
      dispatch(actionCreator.fetch_UserTypes(token));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin_UserPermission_Table);

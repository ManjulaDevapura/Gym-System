import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Admin/Admin_UserPermission_action";

import stopSIgn from "../../../Images/stop.gif";
const Table = lazy(() => import("./Admin_UserPermission_Table"));

class Admin_UserPermission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add_userId:0,
      add_userTypeId:0,
      add_userName:'',
      add_password:'',
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
                    data-target="#addLogin"
                    title={t("Add Login")}
                    onClick={() => {
                      this.props.fetch_UserTypes(this.props.token);
                      this.props.fetch_Users(this.props.token);
                      document.getElementById("add_user").selectedIndex = 0;
                      document.getElementById('add_user').style.borderColor = null
                      document.getElementById("add_userType").selectedIndex = 0;
                      document.getElementById('add_userType').style.borderColor = null
                      document.getElementById('add_userName').style.borderColor = null
                      document.getElementById('add_password').style.borderColor = null
                      document.getElementById('admin_permission_username_exits').style.display = 'none'
                      this.setState({
                        add_userId:0,
                        add_userTypeId:0,
                        add_userName:'',
                        add_password:''
                      })
                    }}
                  >
                    {t("Add Login")}
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
            <div id="addLogin" className="modal fade" role="dialog">
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
                            <td>{t("User")}* :</td>
                            <td>
                                <select id={'add_user'} className='custom-select' onChange={e => this.setState({ add_userId: e.target.value })}>
                                    <option key={0} value="0">Select</option>
                                        {this.props.user_data === '' ? '' : this.props.user_data.map(user => {
                                            return (<option key={user.id} value={user.id}>{user.id}-{user.name}</option>)
                                        })}
                                </select>
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Type")}* :</td>
                            <td>
                                <select id={'add_userType'} className='custom-select' onChange={e => this.setState({ add_userTypeId: e.target.value })}>
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
                              <input id="add_userName" value={this.state.add_userName} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>{
                                  this.setState({ add_userName: e.target.value });
                                  document.getElementById('admin_permission_username_exits').style.display = 'none'
                                }}
                              />
                            </td>
                            <td><span id='admin_permission_username_exits' style={{display: 'none', color: 'red', fontWeight: 'bold'}}> {t("Exists")}</span></td>
                          </tr>
                          <tr>
                            <td>{t("Password")}* :</td>
                            <td>
                              <input id="add_password" value={this.state.add_password} type="password" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_password: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button id='add' type="button" className="btn btn-primary" onClick={() => {
                      
                      var valid = 1;
                      document.getElementById('add_user').style.borderColor = null
                      document.getElementById('add_userType').style.borderColor = null
                      document.getElementById('add_userName').style.borderColor = null
                      document.getElementById('add_password').style.borderColor = null
                      if(parseInt(this.state.add_userId)===0){
                        document.getElementById('add_user').style.borderColor = 'red'
                        valid = 0;
                      }
                      if(parseInt(this.state.add_userTypeId)===0){
                      document.getElementById('add_userType').style.borderColor = 'red'
                      valid = 0;
                    }
                      if((this.state.add_userName).toString().trim()===''){
                      document.getElementById('add_userName').style.borderColor = 'red'
                      valid = 0;
                    }
                    if((this.state.add_password).toString().trim()===''){
                      document.getElementById('add_password').style.borderColor = 'red'
                      valid = 0;
                    }
            if(valid===1){
                          this.props.add_login(this.state.add_userId, this.state.add_userTypeId, this.state.add_userName, this.state.add_password, this.props.tbl_State, this.props.token);
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

    name: state.rLogin.name,
    id: state.rLogin.id,

    userType_data: state.r_UserTypes.userType_data,
    user_data: state.r_Users.user_data,
    tbl_State: state.r_Admin_UserPermission.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_UserTypes: (token) => {
      dispatch(actionCreator.fetch_UserTypes(token));
    },
    fetch_Users: (token) => {
      dispatch(actionCreator.fetch_Users(token));
    },
    add_login: (user_Id, userType_Id, userName, password, state, token) => {
      dispatch(actionCreator.add_login(user_Id, userType_Id, userName, password, state, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin_UserPermission);

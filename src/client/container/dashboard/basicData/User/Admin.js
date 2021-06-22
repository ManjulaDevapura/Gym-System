import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/User/Admin_action";

const Table = lazy(() => import("./Admin_Table"));

class User_Admin extends Component {
  constructor(props) {
    super(props);

    var start_date = new Date();
    const year = start_date.getFullYear() - 18;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split('T', 1);
    
    this.state = {
     
      add_nic: '',
      add_name: '',
      add_address: '',
      add_city: '',
      add_dob: start_date,
      add_sex: 0,
      add_mob: 0,
      min_date: start_date,

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
                {parseInt(this.props.type_Id)===1?<button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addUser"
                    title={t("Add Admin")}
                    onClick={() => {
                      
    var start_date = new Date();
    const year = start_date.getFullYear() - 18;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split('T', 1);

                      document.getElementById('add_nic').style.borderColor = null
                      document.getElementById('add_name').style.borderColor = null
                      document.getElementById('add_address').style.borderColor = null
                      document.getElementById('add_city').style.borderColor = null
                      document.getElementById('add_dob').style.borderColor = null
                      document.getElementById('add_sex').style.borderColor = null
                      document.getElementById("add_sex").selectedIndex = 0;
                      document.getElementById('add_mob').style.borderColor = null
                      document.getElementById('user_permission_nic_exits').style.display = 'none'
                      this.setState({
                        add_nic: '',
                        add_name: '',
                        add_address: '',
                        add_city: '',
                        add_dob: start_date,
                        add_sex: '-1',
                        add_mob: 0,
                      })
                    }}
                  >
                    {t("Add Admin")}
                  </button>:null}
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
            <div id="addUser" className="modal fade" role="dialog">
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
                            <td>{t("Nic")}* :</td>
                            <td>
                              <input id="add_nic" value={this.state.add_nic} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>{
                                  this.setState({ add_nic: e.target.value })
                                  document.getElementById('user_permission_nic_exits').style.display = 'none'
                                }}
                              />
                            </td>
                            <td><span id='user_permission_nic_exits' style={{display: 'none', color: 'red', fontWeight: 'bold'}}> {t("Exists")}</span></td>
                          </tr>

                          <tr>
                            <td>{t("Name")}* :</td>
                            <td>
                              <input id="add_name" value={this.state.add_name} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_name: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("Address")}* :</td>
                            <td>
                              <input id="add_address" value={this.state.add_address} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_address: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("E-mail")}* :</td>
                            <td>
                              <input id="add_city" value={this.state.add_city} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_city: e.target.value })
                                }
                              />
                            </td>
                          </tr>



                          <tr>
                            <td>{t("Birth Date")}* :</td>
                            <td>
                          <input id="add_dob" className="form-control" type='date' value={this.state.add_dob} 
                            onChange={e => { this.setState({ add_dob: e.target.valueAsDate.toISOString().split('T', 1) }); }} />
                          </td>
                              {/* <td><span>{this.state.add_dob.toISOString().split('T', 1)}</span></td> */}
                          </tr>


                          <tr>
                            <td>{t("Gender")}* :</td>
                            <td>
                                <select id={'add_sex'} className='custom-select' onChange={e => this.setState({ add_sex: e.target.value })}>
                                <option key={0} value="-1">Select</option>
                                <option key={1} value="1">Male</option>
                                <option key={2} value="0">Female</option>
                                </select>
                            </td>
                          </tr>

                         
                          <tr>
                            <td>{t("Mobile")}* :</td>
                            <td>
                              <input id="add_mob" value={this.state.add_mob} type="number" min={'700000000'} max={'799999999'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_mob: e.target.value })
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
                      
                      // add_nic: '',
                      // add_name: '',
                      // add_address: '',
                      // add_city: '',
                      // add_dob: '',
                      // add_sex: 0,

                      var valid = 1;
                      document.getElementById('add_nic').style.borderColor = null
                      document.getElementById('add_name').style.borderColor = null
                      document.getElementById('add_address').style.borderColor = null
                      document.getElementById('add_city').style.borderColor = null
                      document.getElementById('add_dob').style.borderColor = null
                      document.getElementById('add_sex').style.borderColor = null
                      document.getElementById('add_mob').style.borderColor = null

                      
                      if((this.state.add_nic).toString().trim()==='' 
                      || this.state.add_nic.length!==10 
                      || !(this.state.add_nic[9]==="V" || this.state.add_nic[9]==="v"  )
                      || isNaN(this.state.add_nic.substr(0, 9))
                      ){
                      document.getElementById('add_nic').style.borderColor = 'red'
                      valid = 0;
                      }

                      if((this.state.add_name).toString().trim()===''){
                      document.getElementById('add_name').style.borderColor = 'red'
                      valid = 0;
                      }
                      if((this.state.add_address).toString().trim()===''){
                      document.getElementById('add_address').style.borderColor = 'red'
                      valid = 0;
                      }
                      
                      if((this.state.add_city).toString().trim()===''
                      || this.state.add_city.search("@")===-1
                      || this.state.add_city.split("@")[1].length<4){
                      document.getElementById('add_city').style.borderColor = 'red'
                      valid = 0;
                      }

                      if(parseInt(this.state.add_sex)=== -1){
                        document.getElementById('add_sex').style.borderColor = 'red'
                        valid = 0;
                      }

                      if((this.state.add_dob) >= (this.state.min_date)){
                      document.getElementById('add_dob').style.borderColor = 'red'
                      valid = 0;
                      }
                      
                      if((parseInt(this.state.add_mob) < 700000000) || (parseInt(this.state.add_mob) >= 800000000)){
                        document.getElementById('add_mob').style.borderColor = 'red'
                        valid = 0;
                      }
            if(valid===1){
                this.props.add_user(
                  this.state.add_nic,
                  this.state.add_name, 
                  this.state.add_address, 
                  this.state.add_city, 
                  this.state.add_dob, 
                  this.state.add_sex, 
                  this.state.add_mob, 
                  this.props.tbl_State, 
                  this.props.token);
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

    tbl_State: state.r_Users.state,
    type_Id: state.rLogin.type_Id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_user: (nic, name, address, city, dob, sex, mob, state, token) => {
      dispatch(actionCreator.add_user(nic, name, address, city, dob, sex, mob, state, token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User_Admin);

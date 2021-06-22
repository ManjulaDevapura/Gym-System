import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Member/Member_action";

const Table = lazy(() => import("./Member_Table"));

class User_Member extends Component {
  constructor(props) {
    super(props);

    var start_date = new Date();
    const year = start_date.getFullYear() - 18;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split('T', 1);
    
    this.state = {
      add_nic: "",
      add_name: "",
      add_address: "",
      add_city: "",
      add_dob: start_date,
      add_sex: 0,
      add_mob: 0,
      min_date: start_date,
      add_instructor: 0,
      add_instructor_mob: 0
      

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
                {(parseInt(this.props.type_Id)===1)||(parseInt(this.props.type_Id)===2)?<button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addUser"
                    title={t("Add Member")}
                    onClick={() => {
                      
    this.props.get_Instructors_member(this.props.token);
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
                      document.getElementById("add_instructor").selectedIndex = 0;
                      document.getElementById('add_instructor').style.borderColor = null
                      document.getElementById('user_permission_nic_exits').style.display = 'none'
                      
                      document.getElementById('add_height').style.borderColor = null
                      document.getElementById('add_weight').style.borderColor = null
                      document.getElementById('add_chest').style.borderColor = null
                      document.getElementById('add_hip').style.borderColor = null
                      document.getElementById('add_neck').style.borderColor = null
                      document.getElementById('add_waist').style.borderColor = null
                      document.getElementById('add_forearm').style.borderColor = null
                      document.getElementById('add_calf').style.borderColor = null
                      this.setState({
                        add_nic: '',
                        add_name: '',
                        add_address: '',
                        add_city: '',
                        add_dob: start_date,
                        add_sex: '-1',
                        add_mob: 0,
                        add_instructor: 0,
                        add_instructor_mob:0,

                        add_height: 0.0,
                        add_weight: 0.0,
                        add_chest: 0.0,
                        add_hip: 0.0,
                        add_neck: 0.0,
                        add_waist: 0.0,
                        add_forearm: 0.0,
                        add_calf: 0.0,
                      })
                    }}
                  >
                    {t("Add Member")}
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
                <div className="modal-content animate" style={{width: 600, height: 700}}>
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


                          <tr>
                            <td>{t("Instructor")}* :</td>
                            <td>
                                <select id={'add_instructor'} className='custom-select' onChange={e =>{ 
                                  this.setState({ add_instructor: e.target.value.split("-")[0], add_instructor_mob: e.target.value.split("-")[1]  })}}>
                                    <option key={0} value="0">Select</option>
                                        {this.props.instructors_data === '' ? '' : this.props.instructors_data.map(user => {
                                            return (<option key={user.id} value={user.id+"-"+user.mobile}>{user.id}-{user.name}</option>)
                                        })}
                                </select>
                            </td>
                          </tr>

                          <tr><td colSpan={5}><hr style={{width: 500}}/></td></tr>
                          





                          <tr>
                            <td>{t("Height")}* cm:</td>
                            <td>
                              <input id="add_height" value={this.state.add_height} type="number" min={'0'} max={'3000'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_height: e.target.value })
                                }
                              />
                            </td>
                            <td style={{width: 20}}></td>
                            <td>{t("Fore Arms")}* cm:</td>
                            <td>
                              <input id="add_forearm" value={this.state.add_forearm} type="number" min={'0'} max={'500'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_forearm: e.target.value })
                                }
                              />
                              </td>
                          </tr>

                          <tr>
                            <td>{t("Chest")}* cm:</td>
                            <td>
                              <input id="add_chest" value={this.state.add_chest} type="number" min={'0'} max={'2000'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_chest: e.target.value })
                                }
                              />
                            </td>
                            <td style={{width: 20}}></td>
                            <td>{t("Neck")}* cm:</td>
                            <td>
                              <input id="add_neck" value={this.state.add_neck} type="number" min={'0'} max={'1000'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_neck: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("Waist")}* cm:</td>
                            <td>
                              <input id="add_waist" value={this.state.add_waist} type="number" min={'0'} max={'3000'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_waist: e.target.value })
                                }
                              />
                            </td>
                            <td style={{width: 20}}></td>
                            <td>{t("Hip")}* cm:</td>
                            <td>
                              <input id="add_hip" value={this.state.add_hip} type="number" min={'0'} max={'3000'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_hip: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("Calf")}* cm:</td>
                            <td>
                              <input id="add_calf" value={this.state.add_calf} type="number" min={'0'} max={'500'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_calf: e.target.value })
                                }
                              />
                            </td>
                            <td style={{width: 20}}></td>
                            <td>{t("Weight")}* kg:</td>
                            <td>
                              <input id="add_weight" value={this.state.add_weight} type="number" min={'0'} max={'300000'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ add_weight: e.target.value })
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
                      document.getElementById('add_nic').style.borderColor = null
                      document.getElementById('add_name').style.borderColor = null
                      document.getElementById('add_address').style.borderColor = null
                      document.getElementById('add_city').style.borderColor = null
                      document.getElementById('add_dob').style.borderColor = null
                      document.getElementById('add_sex').style.borderColor = null
                      document.getElementById('add_mob').style.borderColor = null 
                      document.getElementById('add_instructor').style.borderColor = null 
                      
                      document.getElementById('add_height').style.borderColor = null
                      document.getElementById('add_weight').style.borderColor = null
                      document.getElementById('add_chest').style.borderColor = null
                      document.getElementById('add_hip').style.borderColor = null
                      document.getElementById('add_neck').style.borderColor = null
                      document.getElementById('add_waist').style.borderColor = null
                      document.getElementById('add_forearm').style.borderColor = null
                      document.getElementById('add_calf').style.borderColor = null
                      
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
                      
                      if(parseInt(this.state.add_instructor)=== 0){
                        document.getElementById('add_instructor').style.borderColor = 'red'
                        valid = 0;
                      }


                        if (
                          parseInt(this.state.add_height) <= 0 ||
                          parseInt(this.state.add_height) > 3000
                        ) {
                          document.getElementById(
                            "add_height"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.add_forearm) <= 0 ||
                          parseInt(this.state.add_forearm) > 500
                        ) {
                          document.getElementById(
                            "add_forearm"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.add_chest) <= 0 ||
                          parseInt(this.state.add_chest) > 2000
                        ) {
                          document.getElementById(
                            "add_chest"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.add_neck) <= 0 ||
                          parseInt(this.state.add_neck) > 1000
                        ) {
                          document.getElementById(
                            "add_neck"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.add_waist) <= 0 ||
                          parseInt(this.state.add_waist) > 3000
                        ) {
                          document.getElementById(
                            "add_waist"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.add_hip) <= 0 ||
                          parseInt(this.state.add_hip) > 3000
                        ) {
                          document.getElementById("add_hip").style.borderColor =
                            "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.add_calf) <= 0 ||
                          parseInt(this.state.add_calf) > 500
                        ) {
                          document.getElementById(
                            "add_calf"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.add_weight) <= 0 ||
                          parseInt(this.state.add_weight) > 300000
                        ) {
                          document.getElementById(
                            "add_weight"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

            if (valid === 1) {
              this.props.add_user(
                this.state.add_nic,
                this.state.add_name,
                this.state.add_address,
                this.state.add_city,
                this.state.add_dob,
                this.state.add_sex,
                this.state.add_mob,
                this.state.add_instructor,
                this.state.add_instructor_mob,

                this.state.add_height,
                this.state.add_weight,
                this.state.add_chest,
                this.state.add_hip,
                this.state.add_neck,
                this.state.add_waist,
                this.state.add_forearm,
                this.state.add_calf,

                this.props.tbl_State,
                this.props.token
              );
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
    type_Id: state.rLogin.type_Id,

    name: state.rLogin.name,
    id: state.rLogin.id,

    tbl_State: state.r_Members.state,
    instructors_data: state.r_Users.user_data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_user: (nic, name, address, city, dob, sex, mob, instructor, instructor_mob, height, weight, chest, hip, neck, waist, forearm, calf, state, token) => {
      dispatch(actionCreator.add_user(nic, name, address, city, dob, sex, mob, instructor, instructor_mob, height, weight, chest, hip, neck, waist, forearm, calf, state, token));
    },
    get_Instructors_member: (token) => {
      dispatch(actionCreator.get_Instructors_member(token));
  }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User_Member);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/User/Operator_action";
const axios = require("axios");

class Operator_Table extends Component {
  constructor(props) {
    super(props);

    var start_date = new Date();
    const year = start_date.getFullYear() - 18;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split('T', 1);

    this.state = {
      data: [],
      pages: null,
      loading: false,
      upd_loginId:0,

      upd_id: 0,
      upd_nic: '',
      upd_name: '',
      upd_address: '',
      upd_city: '',
      upd_dob: start_date,
      upd_sex: 0,
      upd_mob: 0,
      upd_min_date: start_date,

     columns : [
      {
        Header: `${i18n.t("ID")}`,
        accessor: "id",
        width: 50,
        maxWidth: 50,
        minWidth: 50,
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
        Header: `${i18n.t("Address")}`,
        accessor: "address",
      },
      {
        Header: `${i18n.t("E-mail")}`,
        accessor: "email",
      },
      {
        Header: `${i18n.t("Birth Date")}`,
        accessor: "dob",
        Cell: row => {
          var dateObj = new Date(row.original.dob).toLocaleString();
          return(<span>{dateObj.split(',', 1)}</span >)
        }
      },

      {
        Header: `${i18n.t("Gender")}`,
        accessor: "sex",
        Cell: (row) => {
          if (
            row.original.id === null ||
            row.original.id === undefined ||
            row.original.id === ""
          ) {
            return <></>;
          } else {
            if(row.original.sex === 0){
              return ( <div><span>Female</span></div> )
            }else{
            return ( <div><span>Male</span></div> )
            }
          }
        } 
      },
      {
        Header: `${i18n.t("Mobile")}`,
        accessor: "mobile",
      },
      {
        Header: `${i18n.t("Created")}`,
        accessor: "created",
        Cell: row => {
          if (
            row.original.id === null ||
            row.original.id === undefined ||
            row.original.id === ""
          ) {
            return <></>;
          } else {
            
          var dateObj = new Date(row.original.created).toLocaleString();
          return(<><span>{dateObj.split(',', 2)}</span ></>)

          // var dateObj = row.original.created.split('T', 1)+' '+row.original.created.split('T', 2)
          // return(<span>{dateObj}</span >)
          }
        }
      },
      {
        Header: `${i18n.t("Status")}`,
        accessor: "activity",
        Cell: (row, a, b) => {
        //  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        //  console.log(row.original)
          if (
            row.original.id === null ||
            row.original.id === undefined ||
            row.original.id === ""
          ) {
            return <></>;
          } else {
            if(row.original.activity === 0){
              return ( <div><span style={{color: 'red',}}>Inactive</span></div> )
            }else{
            return ( <div><span>Active</span></div> )
          }
            // return (
              // <div class="custom-control custom-switch">
              //   <input
              //     type="checkbox"
              //     className="custom-control-input"
              //     id={`add ${
              //       row.original.id === null ? row.original.id : row.original.id
              //     }`}
              //     checked={row.original.activity === 0 ? false : true}
              //   />
              //   <label
              //     className="custom-control-label"
              //     htmlFor={`add ${
              //       row.original.id === null ? row.original.id : row.original.id
              //     }`}
              //     onClick={() => {
              //       const act = row.original.activity === 0 ? 1 : 0;
              //       this.props.update_Activity(
              //         row.original.user_Id,
              //         act,
              //         this.props.tbl_State,
              //         this.props.token
              //       );
              //     }}
              //   ></label>
              // </div>
            // );
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
        Cell: (row) => {
          return(parseInt(this.props.type_Id)===1?
          <div>
            <button
              id="update"
              data-toggle="modal"
              title={i18n.t("Update")}
              data-target="#updateUser"
              data-trigger="hover"
              className="btn btn-sm"
              onClick={() => {
                
          // var dateObj = new Date(row.original.dob).toISOString();
          
          var dateObj2 = new Date(row.original.dob).toLocaleString();
// console.log("...............................................................")
// console.log(dateObj)
// console.log(dateObj.split('T', 1))
// console.log(dateObj2)
// console.log(dateObj2.split(',', 1))

var dateObj3 = new Date(dateObj2.split(',', 1))
// console.log(dateObj3)
// console.log(dateObj3.toISOString().split('T', 1))

let date_Var = ("0" + dateObj3.getDate()).slice(-2);
let month_Var = ("0" + (dateObj3.getMonth() + 1)).slice(-2);
let year_Var = dateObj3.getFullYear();
let final_date = year_Var+"-"+month_Var+"-"+date_Var;
// console.log(year_Var+"-"+month_Var+"-"+date_Var)

          this.setState({
                  upd_id: row.original.id,
                  upd_nic: row.original.nic,
                  upd_name: row.original.name,
                  upd_address: row.original.address,
                  upd_city: row.original.email,
                  upd_dob: final_date,
                  upd_sex: row.original.sex,
                  upd_mob: row.original.mobile,

                });
                
                document.getElementById("upd_sex").selectedIndex = parseInt(row.original.sex)===1?1:2;
                
                document.getElementById('upd_nic').style.borderColor = null
                document.getElementById('upd_name').style.borderColor = null
                document.getElementById('upd_address').style.borderColor = null
                document.getElementById('upd_city').style.borderColor = null
                document.getElementById('upd_dob').style.borderColor = null
                document.getElementById('upd_sex').style.borderColor = null
                document.getElementById('upd_mob').style.borderColor = null
                
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
                this.props.delete_user(
                  row.original.id,
                  this.props.tbl_State,
                  this.props.token
                );
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>:null
        )
            }
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
                  this.props.fetch_Users(
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
              />) : ("")
            }


<div id="updateUser" className="modal fade" role="dialog">
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
                            <td>{t("Nic")}* :</td>
                            <td>
                              <input id="upd_nic" value={this.state.upd_nic} disabled type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>{
                                  // this.setState({ upd_nic: e.target.value })
                                }}
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Name")}* :</td>
                            <td>
                              <input id="upd_name" value={this.state.upd_name} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_name: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("Address")}* :</td>
                            <td>
                              <input id="upd_address" value={this.state.upd_address} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_address: e.target.value })
                                }
                              />
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("E-mail")}* :</td>
                            <td>
                              <input id="upd_city" value={this.state.upd_city} type="text" className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_city: e.target.value })
                                }
                              />
                            </td>
                          </tr>



                          <tr>
                            <td>{t("Birth Date")}* :</td>
                            <td>
                          <input id="upd_dob" className="form-control" type='date' value={this.state.upd_dob} 
                            onChange={e => { this.setState({ upd_dob: e.target.valueAsDate.toISOString().split('T', 1) }); }} />
                          </td>
                          </tr>


                          <tr>
                            <td>{t("Gender")}* :</td>
                            <td>
                                <select id={'upd_sex'} className='custom-select' onChange={e => this.setState({ upd_sex: e.target.value })}>
                                <option key={0} value="-1">Select</option>
                                <option key={1} value="1">Male</option>
                                <option key={2} value="0">Female</option>
                                </select>
                            </td>
                          </tr>

                         
                          <tr>
                            <td>{t("Mobile")}* :</td>
                            <td>
                              <input id="upd_mob" value={this.state.upd_mob} type="number" min={'700000000'} max={'799999999'} className="form-control" autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_mob: e.target.value })
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
                      
                      document.getElementById('upd_nic').style.borderColor = null
                      document.getElementById('upd_name').style.borderColor = null
                      document.getElementById('upd_address').style.borderColor = null
                      document.getElementById('upd_city').style.borderColor = null
                      document.getElementById('upd_dob').style.borderColor = null
                      document.getElementById('upd_sex').style.borderColor = null
                      document.getElementById('upd_mob').style.borderColor = null

                      // if((this.state.upd_nic).toString().trim()===''){
                      // document.getElementById('upd_nic').style.borderColor = 'red'
                      // valid = 0;
                      // }
                      if((this.state.upd_name).toString().trim()===''){
                      document.getElementById('upd_name').style.borderColor = 'red'
                      valid = 0;
                      }
                      if((this.state.upd_address).toString().trim()===''){
                      document.getElementById('upd_address').style.borderColor = 'red'
                      valid = 0;
                      }
                     
                      if((this.state.upd_city).toString().trim()===''
                      || this.state.upd_city.search("@")===-1
                      || this.state.upd_city.split("@")[1].length<4){
                      document.getElementById('upd_city').style.borderColor = 'red'
                      valid = 0;
                      }

                      if(parseInt(this.state.upd_sex)=== -1){
                        document.getElementById('upd_sex').style.borderColor = 'red'
                        valid = 0;
                      }

                      if((this.state.upd_dob) >= (this.state.upd_min_date)){
                      document.getElementById('upd_dob').style.borderColor = 'red'
                      valid = 0;
                      }
                      
                      if((parseInt(this.state.upd_mob) < 700000000) || (parseInt(this.state.upd_mob) >= 800000000)){
                        document.getElementById('upd_mob').style.borderColor = 'red'
                        valid = 0;
                      }

            if(valid===1){
               this.props.update_user(
                this.state.upd_id, 
                this.state.upd_nic,
                this.state.upd_name, 
                this.state.upd_address, 
                this.state.upd_city, 
                this.state.upd_dob, 
                this.state.upd_sex, 
                this.state.upd_mob, 
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
    type_Id: state.rLogin.type_Id,

    dataSet: state.r_Users.user_data,
    pageNo: state.r_Users.pageNo,
    loading: state.r_Users.loading,
    tbl_State: state.r_Users.state,


    userType_data: state.r_UserTypes.userType_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Users: (state, token) => {
      dispatch(actionCreator.fetch_Users(state, token));
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
    delete_user: (user_Id, state, token) => {
      dispatch(actionCreator.delete_user(user_Id, state, token));
    },
    update_user: (id, nic, name, address, city, dob, sex, mob, state, token) => {
      dispatch(
        actionCreator.update_login(
          id, nic, name, address, city, dob, sex, mob, state, token
        )
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Operator_Table);

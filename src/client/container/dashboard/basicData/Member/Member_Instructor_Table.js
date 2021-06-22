import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Member/Member_Instructor_action";
const axios = require("axios");

class Member_Table extends Component {
  constructor(props) {
    super(props);

    var start_date = new Date();
    const year = start_date.getFullYear() - 18;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split("T", 1);

    this.state = {
      data: [],
      pages: null,
      loading: false,
      upd_loginId: 0,

      upd_id: 0,
      upd_nic: "",
      upd_name: "",
      upd_address: "",
      upd_city: "",
      upd_dob: start_date,
      upd_sex: 0,
      upd_mob: 0,
      upd_min_date: start_date,
      upd_instructor: 0,

      upd_height: 0.0,
      upd_weight: 0.0,
      upd_chest: 0.0,
      upd_hip: 0.0,
      upd_neck: 0.0,
      upd_waist: 0.0,
      upd_forearm: 0.0,
      upd_calf: 0.0,

      diet_id: 0,
      diet_Member_Id: 0,
      diet_Member_Name: "",
      diet_Instructor_Id: 0,
      diet_Instructor_Name: "",
      diet_Created: "",
      diet_Breakfast: "",
      diet_Lunch: "",
      diet_Dinner: "",
      diet_Description: "",

      
      excercise_id: 0,
      excercise_Member_Id: 0,
      excercise_Member_Name: "",
      excercise_Instructor_Id: 0,
      excercise_Instructor_Name: "",
      excercise_Created: "",
      excercise_Description: "",


      columns: [
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
          Cell: (row) => {
            var dateObj = new Date(row.original.dob).toLocaleString();
            return <span>{dateObj.split(",", 1)}</span>;
          },
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
              if (row.original.sex === 0) {
                return (
                  <div>
                    <span>Female</span>
                  </div>
                );
              } else {
                return (
                  <div>
                    <span>Male</span>
                  </div>
                );
              }
            }
          },
        },
        {
          Header: `${i18n.t("Mobile")}`,
          accessor: "mobile",
        },
        {
          Header: `${i18n.t("Instructor")}`,
          accessor: "instructor",
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

              // var dateObj = row.original.created.split('T', 1)+' '+row.original.created.split('T', 2)
              // return(<span>{dateObj}</span >)
            }
          },
        },
        {
          Header: `${i18n.t("Status")}`,
          accessor: "activity",
          Cell: (row) => {
            //  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
            //  console.log(row.original)
            if (
              row.original.id === null ||
              row.original.id === undefined ||
              row.original.id === ""
            ) {
              return <></>;
            } else {
              //   if(row.original.activity === 0){
              //     return ( <div><span style={{color: 'red',}}>Inactive</span></div> )
              //   }else{
              //   return ( <div><span>Active</span></div> )
              // }
              return (
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`add ${
                      row.original.id === null
                        ? row.original.id
                        : row.original.id
                    }`}
                    checked={row.original.activity === 0 ? false : true}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`add ${
                      row.original.id === null
                        ? row.original.id
                        : row.original.id
                    }`}
                    onClick={() => {
                     
                    }}
                  ></label>
                </div>
              );
            }
            
          },
        },
        {
          Header: `${i18n.t("Actions")}`,
          accessor: "id",
          sortable: false,
          filterable: false,
          width: 150,
          maxWidth: 150,
          minWidth: 100,
          Cell: (row) =>{ return (
            <div>
             <button
                id="updateBody_id"
                data-toggle="modal"
                title={i18n.t("Update Body")}
                data-target="#updateBody"
                data-trigger="hover"
                className="btn btn-sm"
                onClick={() => {
                  this.props.get_Body_ByMember(
                    row.original.id,
                    this.props.token
                  );

                  this.setState({
                    upd_id: row.original.id,
                    upd_nic: row.original.nic,
                    upd_name: row.original.name,
                    upd_instructor: row.original.user_Id,

                    upd_height: 0,
                    upd_weight: 0,
                    upd_chest: 0,
                    upd_hip: 0,
                    upd_neck: 0,
                    upd_waist: 0,
                    upd_forearm: 0,
                    upd_calf: 0,

                    
                  });
                }}
              >
                <i className="fas fa-child"></i>
              </button>
              
              
              <button
                id="add_Diet_id"
                data-toggle="modal"
                title={i18n.t("Add Diet")}
                data-target="#addDiet"
                data-trigger="hover"
                className="btn btn-sm"
                onClick={() => {
                  this.props.get_Diet_ByMember(
                    row.original.id,
                    this.props.token
                  );
                  this.props.get_Diet_All(this.props.token);

                  this.setState({
                    upd_id: row.original.id,
                    upd_name: row.original.name,
                   

                    diet_Member_Id: row.original.id,
                    diet_Instructor_Id: row.original.user_Id,
                    diet_Breakfast: "",
                    diet_Lunch: "",
                    diet_Dinner: "",
                    diet_Description: "",
                    
                  });
                  document.getElementById("diet_Breakfast").style.borderColor = null;
                  document.getElementById("diet_Lunch").style.borderColor = null;
                  document.getElementById("diet_Dinner").style.borderColor = null;
                  document.getElementById("diet_Description").style.borderColor = null;
                  document.getElementById("upd_dietSelect").selectedIndex = 0;
                }}
              >
                <i className="fas fa-utensils"></i>
              </button>




              <button
                id="add_Excercise_id"
                data-toggle="modal"
                title={i18n.t("Add Excercise")}
                data-target="#addExcercise"
                data-trigger="hover"
                className="btn btn-sm"
                onClick={() => {
                  this.props.get_Excercise_ByMember(
                    row.original.id,
                    this.props.token
                  );
                  this.props.get_Exe_All(this.props.token);

                  this.setState({
                    upd_id: row.original.id,
                    upd_name: row.original.name,

                    excercise_Member_Id: row.original.id,
                    excercise_Instructor_Id: row.original.user_Id,
                    excercise_Description: "",
                  });
                  document.getElementById("excercise_Description").style.borderColor = null;
                  document.getElementById("upd_exeSelect").selectedIndex = 0;
                }}
              >
                <i className="fas fa-dumbbell"></i>
              </button>
            </div>
          )//,
        }
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
                  this.props.fetch_Users(state, this.props.token, this.props.user_Id_Login);
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


            <div id="updateBody" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate" style={{ width: 650 }}>
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
                    <div id="updDataBody" style={{ paddingLeft: 30 }}>
                      <table>
                        <tbody>
                          <tr>
                            <td>{t("Nic")}* :</td>
                            <td>
                              <input
                                id="upd_nic"
                                value={this.state.upd_nic}
                                disabled
                                type="text"
                                className="form-control"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Name")}* :</td>
                            <td>
                              <input
                                id="upd_name"
                                value={this.state.upd_name}
                                disabled
                                type="text"
                                className="form-control"
                              />
                            </td>
                          </tr>

                          <tr>
                            <td style={{ width: 100 }}>{t("Height")}* mm:</td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].height:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_height"
                                value={this.state.upd_height}
                                type="number"
                                min={"0"}
                                max={"3000"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_height: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr>
                            <td style={{ width: 120 }}>
                              {t("Fore Arms")}* mm:
                            </td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].forearm:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_forearm"
                                value={this.state.upd_forearm}
                                type="number"
                                min={"0"}
                                max={"500"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_forearm: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Chest")}* mm:</td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].chest:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_chest"
                                value={this.state.upd_chest}
                                type="number"
                                min={"0"}
                                max={"2000"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_chest: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Neck")}* mm:</td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].neck:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_neck"
                                value={this.state.upd_neck}
                                type="number"
                                min={"0"}
                                max={"1000"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_neck: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Waist")}* mm:</td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].waist:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_waist"
                                value={this.state.upd_waist}
                                type="number"
                                min={"0"}
                                max={"3000"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_waist: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Hip")}* mm:</td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].hip:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_hip"
                                value={this.state.upd_hip}
                                type="number"
                                min={"0"}
                                max={"3000"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_hip: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Calf")}* mm:</td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].calf:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_calf"
                                value={this.state.upd_calf}
                                type="number"
                                min={"0"}
                                max={"500"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_calf: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Weight")}* gram:</td>
                            <td>
                              <input
                                value={this.props.body_data[0]?this.props.body_data[0].weight:0}
                                type="text"
                                className="form-control"
                                disabled
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              <input
                                id="upd_weight"
                                value={this.state.upd_weight}
                                type="number"
                                min={"0"}
                                max={"300000"}
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ upd_weight: e.target.value })
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
                      id="upd"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        if((parseInt(this.props.type_Id)===1)||(parseInt(this.props.type_Id)===2)||(parseInt(this.props.type_Id)===3)){
                        var valid = 1;
                        document.getElementById(
                          "upd_height"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_forearm"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_chest"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_neck"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_waist"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_hip"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_calf"
                        ).style.borderColor = null;
                        document.getElementById(
                          "upd_weight"
                        ).style.borderColor = null;

                        if (
                          parseInt(this.state.upd_height) <= 0 ||
                          parseInt(this.state.upd_height) > 3000
                        ) {
                          document.getElementById(
                            "upd_height"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.upd_forearm) <= 0 ||
                          parseInt(this.state.upd_forearm) > 500
                        ) {
                          document.getElementById(
                            "upd_forearm"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.upd_chest) <= 0 ||
                          parseInt(this.state.upd_chest) > 2000
                        ) {
                          document.getElementById(
                            "upd_chest"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.upd_neck) <= 0 ||
                          parseInt(this.state.upd_neck) > 1000
                        ) {
                          document.getElementById(
                            "upd_neck"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.upd_waist) <= 0 ||
                          parseInt(this.state.upd_waist) > 3000
                        ) {
                          document.getElementById(
                            "upd_waist"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.upd_hip) <= 0 ||
                          parseInt(this.state.upd_hip) > 3000
                        ) {
                          document.getElementById("upd_hip").style.borderColor =
                            "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.upd_calf) <= 0 ||
                          parseInt(this.state.upd_calf) > 500
                        ) {
                          document.getElementById(
                            "upd_calf"
                          ).style.borderColor = "red";
                          valid = 0;
                        }
                        if (
                          parseInt(this.state.upd_weight) <= 0 ||
                          parseInt(this.state.upd_weight) > 300000
                        ) {
                          document.getElementById(
                            "upd_weight"
                          ).style.borderColor = "red";
                          valid = 0;
                        }

                        if (valid === 1) {
                        this.props.update_Body(
                          this.props.body_data[0].id,
                          this.state.upd_height,
                          this.state.upd_weight,
                          this.state.upd_chest,
                          this.state.upd_hip,
                          this.state.upd_neck,
                          this.state.upd_waist,
                          this.state.upd_forearm,
                          this.state.upd_calf,
                          this.state.upd_id,
                          this.state.upd_instructor,
                          this.props.token
                        );
                        }
                      }else{
                        $(document).ready(function () {
                          $('#errorToast').toast('show')
                      })
                      document.getElementById('toastHeader').style.backgroundColor = "#f8d7da"
                      document.getElementById('validMsg').style.color = '#975057'
                      document.getElementById('errVal').innerHTML = "You do not have permission ?"
                      document.getElementById('validMsg').innerHTML = `SAVING FAILD ... !`
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



            
            <div id="addDiet" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate" style={{width: 600}}>
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
                            <td><input disabled value={this.state.upd_id} type="text" className="form-control" /></td>
                          </tr>

                          <tr>
                            <td>{t("Name")} :</td>
                            <td><input disabled value={this.state.upd_name} type="text" className="form-control" /></td>
                          </tr>


                          <tr>
                            <td>{t("Id")} :</td>
                            <td><input value={this.props.diet_data[0]?this.props.diet_data[0].id:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Member Id")} :</td>
                            <td><input value={this.props.diet_data[0]?this.props.diet_data[0].user_Id:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Member Name")} :</td>
                            <td><input value={this.props.diet_data[0]?this.props.diet_data[0].name:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Created")} :</td>
                            <td><input value={this.props.diet_data[0]?this.props.diet_data[0].created:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Instructor Id")} :</td>
                            <td><input value={this.props.diet_data[0]?this.props.diet_data[0].instructor_Id:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Instructor Name")} :</td>
                            <td><input value={this.props.diet_data[0]?this.props.diet_data[0].ins_name:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Diet Plan")}* :</td>
                            <td>
                              <select
                                id={"upd_dietSelect"}
                                className="custom-select"
                                onChange={(e) =>{
                                  var meal = e.target.value.split("-")
                                  this.setState({
                                    diet_Breakfast: meal[0],
                                    diet_Lunch: meal[1],
                                    diet_Dinner: meal[2],
                                    diet_Description: this.props.diet_data[0]?this.props.diet_data[0].description:''
                                  })
                                }}
                              >
                                <option key={0} value="0">
                                  Select
                                </option>
                                {this.props.diet_dataPicked === ""
                                  ? ""
                                  : this.props.diet_dataPicked.map((diet) => {
                                      return (
                                        <option key={diet.id} value={diet.breakfast+"-"+diet.lunch+"-"+diet.dinner+"-"+diet.description}>
                                          {diet.id}
                                        </option>
                                      );
                                    })}
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Breakfast")} :</td>
                            <td><textarea value={this.props.diet_data[0]?this.props.diet_data[0].breakfast:''} style={{width: 200, height:200}} disabled type="text" className="form-control" /></td>
                            <td><textarea value={this.state.diet_Breakfast} style={{width: 200, height:200}} id={'diet_Breakfast'} type="text" className="form-control" 
                                  onChange={(e) =>{
                                    this.setState({ diet_Breakfast: e.target.value })
                                    document.getElementById('diet_Breakfast').style.borderColor  = null
                                  }}/>
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Lunch")} :</td>
                            <td><textarea value={this.props.diet_data[0]?this.props.diet_data[0].lunch:''} style={{width: 200, height:200}} disabled type="text" className="form-control" /></td>
                            <td><textarea value={this.state.diet_Lunch} style={{width: 200, height:200}} id={'diet_Lunch'} type="text" className="form-control" 
                                  onChange={(e) =>{
                                    this.setState({ diet_Lunch: e.target.value })
                                    document.getElementById('diet_Lunch').style.borderColor  = null
                                  }}/>
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Dinner")} :</td>
                            <td><textarea value={this.props.diet_data[0]?this.props.diet_data[0].dinner:''} style={{width: 200, height:200}} disabled type="text" className="form-control" /></td>
                            <td><textarea value={this.state.diet_Dinner} style={{width: 200, height:200}} id={'diet_Dinner'} type="text" className="form-control" 
                                  onChange={(e) =>{
                                    this.setState({ diet_Dinner: e.target.value })
                                    document.getElementById('diet_Dinner').style.borderColor  = null
                                  }}/>
                            </td>
                          </tr>
                          <tr>
                            <td>{t("Description")} :</td>
                            <td><textarea value={this.props.diet_data[0]?this.props.diet_data[0].description:''} style={{width: 200, height:200}} disabled type="text" className="form-control" /></td>
                            <td><textarea value={this.state.diet_Description} style={{width: 200, height:200}} id={'diet_Description'} type="text" className="form-control" 
                                  onChange={(e) =>{
                                    this.setState({ diet_Description: e.target.value })
                                    document.getElementById('diet_Description').style.borderColor  = null
                                  }}/>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button id='add' type="button" className="btn btn-primary" onClick={() => {
                        if((parseInt(this.props.type_Id)===1)||(parseInt(this.props.type_Id)===2)||(parseInt(this.props.type_Id)===3)){
                        if(this.state.diet_Description.toString().trim() === ''){
                          document.getElementById('diet_Description').style.borderColor  = 'red'

                        }
                        if(this.state.diet_Breakfast.toString().trim() === ''){
                          document.getElementById('diet_Breakfast').style.borderColor  = 'red'

                        }
                        if(this.state.diet_Lunch.toString().trim() === ''){
                          document.getElementById('diet_Lunch').style.borderColor  = 'red'

                        }
                        if(this.state.diet_Dinner.toString().trim() === ''){
                          document.getElementById('diet_Dinner').style.borderColor  = 'red'

                        }else{
                          document.getElementById('diet_Breakfast').style.borderColor  = null
                          document.getElementById('diet_Lunch').style.borderColor  = null
                          document.getElementById('diet_Dinner').style.borderColor  = null
                          document.getElementById('diet_Description').style.borderColor  = null
                          this.props.update_Diet(
                            this.state.diet_Member_Id, 
                            this.state.diet_Instructor_Id, 
                            this.state.diet_Breakfast.toString().trim(), 
                            this.state.diet_Lunch.toString().trim(), 
                            this.state.diet_Dinner.toString().trim(), 
                            this.state.diet_Description.toString().trim(), 
                            this.props.token)
                        }
                      }else{
                        $(document).ready(function () {
                          $('#errorToast').toast('show')
                      })
                      document.getElementById('toastHeader').style.backgroundColor = "#f8d7da"
                      document.getElementById('validMsg').style.color = '#975057'
                      document.getElementById('errVal').innerHTML = "You do not have permission ?"
                      document.getElementById('validMsg').innerHTML = `SAVING FAILD ... !`
                      }
                      }}>
                      {t("Save")}
                    </button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" >{t("Close")}</button>
                  </div>
                </div>
              </div>
            </div>

            

            <div id="addExcercise" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate" style={{width: 600}}>
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
                            <td><input disabled value={this.state.upd_id} type="text" className="form-control" /></td>
                          </tr>

                          <tr>
                            <td>{t("Name")} :</td>
                            <td><input disabled value={this.state.upd_name} type="text" className="form-control" /></td>
                          </tr>


                          <tr>
                            <td>{t("Id")} :</td>
                            <td><input value={this.props.excercise_data[0]?this.props.excercise_data[0].id:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Member Id")} :</td>
                            <td><input value={this.props.excercise_data[0]?this.props.excercise_data[0].user_Id:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Member Name")} :</td>
                            <td><input value={this.props.excercise_data[0]?this.props.excercise_data[0].name:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Created")} :</td>
                            <td><input value={this.props.excercise_data[0]?this.props.excercise_data[0].created:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Instructor Id")} :</td>
                            <td><input value={this.props.excercise_data[0]?this.props.excercise_data[0].instructor_Id:''} disabled type="text" className="form-control" /></td>
                          </tr>
                          <tr>
                            <td>{t("Instructor Name")} :</td>
                            <td><input value={this.props.excercise_data[0]?this.props.excercise_data[0].ins_name:''} disabled type="text" className="form-control" /></td>
                          </tr>

                          <tr>
                            <td>{t("Exercise Plan")}* :</td>
                            <td>
                              <select
                                id={"upd_exeSelect"}
                                className="custom-select"
                                onChange={(e) =>{
                                  var meal = e.target.value.split("-")
                                  this.setState({
                                    excercise_Description: e.target.value,
                                  })
                                }}
                              >
                                <option key={0} value="0">
                                  Select
                                </option>
                                {this.props.exercise_dataPicked === ""
                                  ? ""
                                  : this.props.exercise_dataPicked.map((exer) => {
                                      return (
                                        <option key={exer.id} value={exer.description}>
                                          {exer.id}
                                        </option>
                                      );
                                    })}
                              </select>
                            </td>
                          </tr>

                          <tr>
                            <td>{t("Description")} :</td>
                            <td><textarea value={this.props.excercise_data[0]?this.props.excercise_data[0].description:''} style={{width: 200, height:200}} disabled type="text" className="form-control" /></td>
                            <td><textarea value={this.state.excercise_Description} style={{width: 200, height:200}} id={'excercise_Description'} type="text" className="form-control" 
                                  onChange={(e) =>{
                                    this.setState({ excercise_Description: e.target.value })
                                    document.getElementById('excercise_Description').style.borderColor  = null
                                  }}/>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button id='add' type="button" className="btn btn-primary" onClick={() => {
                        if((parseInt(this.props.type_Id)===1)||(parseInt(this.props.type_Id)===2)||(parseInt(this.props.type_Id)===3)){
                        if(this.state.excercise_Description.toString().trim() === ''){
                          document.getElementById('excercise_Description').style.borderColor  = 'red'

                        }else{
                          document.getElementById('excercise_Description').style.borderColor  = null
                          this.props.update_Excercise(this.state.excercise_Member_Id, this.state.excercise_Instructor_Id, this.state.excercise_Description.toString().trim(), this.props.token)
                        }
                      }else{
                        $(document).ready(function () {
                          $('#errorToast').toast('show')
                      })
                      document.getElementById('toastHeader').style.backgroundColor = "#f8d7da"
                      document.getElementById('validMsg').style.color = '#975057'
                      document.getElementById('errVal').innerHTML = "You do not have permission ?"
                      document.getElementById('validMsg').innerHTML = `SAVING FAILD ... !`
                      }
                      }}>
                      {t("Save")}
                    </button>
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
    type_Id: state.rLogin.type_Id,
    user_Id_Login: state.rLogin.user_Id,

    dataSet: state.r_Members.user_data,
    pageNo: state.r_Members.pageNo,
    loading: state.r_Members.loading,
    tbl_State: state.r_Members.state,
    diet_dataPicked: state.r_Members.diet_dataPicked,
    exercise_dataPicked: state.r_Members.exercise_dataPicked,

    instructors_data: state.r_Users.user_data,
    body_data: state.r_Body.body_data,
    diet_data: state.r_Diet.diet_data,
    excercise_data: state.r_Excercise.excercise_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Users: (state, token, instId) => {
      dispatch(actionCreator.fetch_Users(state, token, instId));
    },
       
    get_Instructors_member: (token) => {
      dispatch(actionCreator.get_Instructors_member(token));
    },
    get_Body_ByMember: (member, token) => {
      dispatch(actionCreator.get_Body_ByMember(member, token));
    },
    update_Body: (
      body_Id,
      height,
      weight,
      chest,
      hip,
      neck,
      waist,
      forearm,
      calf,
      user_Id,
      instructor,
      token
    ) => {
      dispatch(
        actionCreator.update_Body(
          body_Id,
          height,
          weight,
          chest,
          hip,
          neck,
          waist,
          forearm,
          calf,
          user_Id,
          instructor,
          token
        )
      );
    },
    get_Diet_ByMember: (member, token) => {
      dispatch(actionCreator.get_Diet_ByMember(member, token));
    },
    update_Diet: (member_id, instructor_id, breakfast, lunch, dinner, description, token) => {
      dispatch(actionCreator.update_Diet(member_id, instructor_id, breakfast, lunch, dinner, description, token));
    },
    get_Excercise_ByMember: (member, token) => {
      dispatch(actionCreator.get_Excercise_ByMember(member, token));
    },
    update_Excercise: (member_id, instructor_id, description, token) => {
      dispatch(actionCreator.update_Excercise(member_id, instructor_id, description, token));
    },
    get_Diet_All: (token) => {
      dispatch(actionCreator.get_Diet_All(token));
    },
    get_Exe_All: (token) => {
      dispatch(actionCreator.get_Exe_All(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member_Table);

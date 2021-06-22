import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $, { nodeName } from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Payment/Payment_Member_action";

const Table = lazy(() => import("./Payment_Member_Table"));

class Payment_Member extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add_id: 0,
      // add_amount: 0,

      add_package:0,
      add_member:0,
      add_date_gap:0,
      add_finalDate:"Invalid Date",
      add_start: "0000/00/00",
      add_end: "0000/00/00",
      add_package_amount: 0,
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
                    data-target="#addPayment"
                    title={t("Do Payment")}
                    onClick={() => {
                      this.props.fetch_Membership_Packages(this.props.token);
                      this.props.fetch_Membership_Member(this.props.token);
                      document.getElementById("add_member").selectedIndex = 0;
                      document.getElementById("add_package").selectedIndex = 0;

                      document.getElementById(
                        "add_member"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_package"
                      ).style.borderColor = null;
                      document.getElementById(
                        "add_start"
                      ).style.borderColor = null;


                      this.setState({
                        add_id: 0,
                        add_date_gap:0,
                        add_finalDate:"Invalid Date",
                        add_start: "0000/00/00",
                        add_end: "0000/00/00",
                        add_package: 0,
                        add_package_amount: 0,
                      });
                    }}
                  >
                    {t("Do Payment")}
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
            <div id="addPayment" className="modal fade" role="dialog">
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
                            <td>{t("Member")}* :</td>
                            <td>
                              <select id={'add_member'} className='custom-select' onChange={e => {

                                if(e.target.value.toString()!=="0"){
                                  // console.log("????????????????????????????????????")
                                  // console.log("????????????????????????????????????")
                                  // console.log("????????????????????????????????????")
                                // console.log(e.target.value.toString().split("?")[1])
                                var dateObj = new Date(e.target.value.toString().split("?")[1]);
                                // console.log(dateObj)
                                if(e.target.value.toString().split("?")[1] === "null"){
                                  dateObj = new Date(Date.now());
                                  const dateMin = dateObj.getDate() - 1;
                                  dateObj.setDate(dateMin);
                                  // console.log("###############################")
                                }else{
                                  dateObj = new Date(e.target.value.toString().split("?")[1]);
                                  // console.log("###############################")
                                  // console.log(dateObj)
                                }
                                // console.log(dateObj)
                                // console.log(dateObj.toLocaleString().split(",", 1))
                                var n = new Date(Date.now());
                                // console.log(n)
                                // console.log(n.toISOString())
                                // console.log(n.toISOString().split('T', 1))
                                // console.log(n.toLocaleString().split(",", 1))
                                // console.log(n.toISOString().split('T', 1).toString().split('-', 3))
                            var lastD = "";
                            var todayD = n.toISOString().split('T', 1).toString().split('-', 3)
                            var paidD = dateObj.toISOString().split('T', 1).toString().split('-', 3)
                               

// const dispDa = dateObj.toLocaleString().split(",", 1).toString();
// console.log(n)


if (parseInt(todayD[0]) > parseInt(paidD[0])) {
  lastD = n.toISOString().split("T", 1);
} else if (parseInt(todayD[0]) < parseInt(paidD[0])) {
  lastD = dateObj.toLocaleString().split(",", 1)//dateObj.toISOString().split("T", 1);
  // lastD = lastD.setDate(parseInt(lastD[0].split("/")[1])+1)
  // console.log("Ada mara wadene une -------------")
  // console.log(lastD)
  // console.log(lastD[0])
  // console.log(lastD[0].split("/")[0])
  // console.log(lastD.split("/")[0])?
  if(parseInt(lastD[0].split("/")[0])<10){
    lastD = [lastD[0].split("/")[2]+"-0"+lastD[0].split("/")[0]+"-"+lastD[0].split("/")[1]]
  }else{
    lastD = [lastD[0].split("/")[2]+"-"+lastD[0].split("/")[0]+"-"+lastD[0].split("/")[1]]
  }
} else {
  // year ===
  if (parseInt(todayD[1]) > parseInt(paidD[1])) {
    lastD = n.toISOString().split("T", 1);
  } else if (parseInt(todayD[1]) < parseInt(paidD[1])) {
    lastD = dateObj.toLocaleString().split(",", 1)//dateObj.toISOString().split("T", 1);
    if(parseInt(lastD[0].split("/")[0])<10){
      lastD = [lastD[0].split("/")[2]+"-0"+lastD[0].split("/")[0]+"-"+lastD[0].split("/")[1]]
    }else{
      lastD = [lastD[0].split("/")[2]+"-"+lastD[0].split("/")[0]+"-"+lastD[0].split("/")[1]]
    }
  } else {
    // month ===
    if (parseInt(todayD[3]) > parseInt(paidD[3])) {
      lastD = n.toISOString().split("T", 1);
    } else if (parseInt(todayD[3]) < parseInt(paidD[3])) {
      lastD = dateObj.toLocaleString().split(",", 1)//dateObj.toISOString().split("T", 1);
      if(parseInt(lastD[0].split("/")[0])<10){
        lastD = [lastD[0].split("/")[2]+"-0"+lastD[0].split("/")[0]+"-"+lastD[0].split("/")[1]]
      }else{
        lastD = [lastD[0].split("/")[2]+"-"+lastD[0].split("/")[0]+"-"+lastD[0].split("/")[1]]
      }
    } else {
      // date ===
      lastD = n.toISOString().split("T", 1);
    }
  }
}

// console.log("###############################")
// console.log(dateObj.toLocaleString().split(",", 1))
// console.log(dateObj.toLocaleString().split(",", 1)[0])
var finalDateFixed =""
if(parseInt(dateObj.toLocaleString().split(",", 1)[0])<10){
  finalDateFixed = [dateObj.toLocaleString().split(",", 1)[0].split("/")[2]+"-0"+dateObj.toLocaleString().split(",", 1)[0].split("/")[0]+"-"+dateObj.toLocaleString().split(",", 1)[0].split("/")[1]]
}else{
  finalDateFixed = [dateObj.toLocaleString().split(",", 1)[0].split("/")[2]+"-"+dateObj.toLocaleString().split(",", 1)[0].split("/")[0]+"-"+dateObj.toLocaleString().split(",", 1)[0].split("/")[1]]
}
// console.log(finalDateFixed)
document.getElementById("add_package").selectedIndex = 0;
                                this.setState({ 
                                  add_package: 0,
                                  add_member: e.target.value.toString().split("?")[0],
                                  add_finalDate: finalDateFixed, //dateObj.toLocaleString().split(",", 1),//.toISOString().split('T', 1),
                                  add_start: lastD,// dateObj.split(",", 1),
                                  add_end: "0000/00/00",
                               })}else{
                                document.getElementById("add_package").selectedIndex = 0;
                                this.setState({ 
                                  add_member: 0,
                                  add_id: 0,
                                  add_date_gap:0,
                                  add_finalDate:"Invalid Date",
                                  add_start: "0000/00/00",
                                  add_end: "0000/00/00",
                                  add_package: 0,
                                  add_package_amount: 0,
                               })
                               }
                              
                              }}>
                                <option key={0} value="0">Select</option>
                                {this.props.member_data === '' ? '' : this.props.member_data.map(member => {
                                    return (<option key={member.id} value={member.id+"?"+member.finalDate}>{member.id}{'->'} {member.name}</option>)
                                })}
                                </select>
                            </td>
                          </tr>
                          {this.state.add_finalDate.toString().trim() === "Invalid Date" ? '' :
                                <tr><td style={{color:'#f0a802'}}>{'Final Date :-'}</td>
                                  <td><span 
                                  type="text"
                                  className="form-control"
                                  autoComplete="off" style={{color:'#f0a802'}}>{this.state.add_finalDate}</span>
                                  </td>
                                </tr>
                          }
                            {/* {this.props.member_data === '' ? '' : this.props.member_data.map(member => {
                              console.log("-------------------------------------")
                              console.log(this.state.add_member+" - "+member.id)
                              if(parseInt(this.state.add_member)===parseInt(member.id)){
                                if(member.finalDate!==null){
                                  var dateObj = new Date(member.finalDate).toLocaleString();
                                  // {member.finalDate}
                                  return (<tr><td style={{color:'#f0a802'}}>{'Final Date :-'}</td>
                                  <td><span 
                                  type="text"
                                  className="form-control"
                                  autoComplete="off" style={{color:'#f0a802'}}>{dateObj.split(",", 1)}</span>
                                  </td>
                                </tr>)
                                }
                              }
                            })} */}

                          <tr>
                            <td>{t("Package")}* :</td>
                            <td>
                              <select id={'add_package'} className='custom-select' onChange={e => {
                                console.log("Package++++++++++++++++++")
                                console.log( e.target.value.toString().split("-")[1])

                                var lastDateSet = new Date(this.state.add_start);
                                console.log(this.state.add_start)
                                console.log(lastDateSet)

                                var different_date = 0
                                var different_month = 0
                                var different_year = 0

                                if(parseInt(e.target.value.toString().split("-")[1])<30){
                                  different_date = parseInt(e.target.value.toString().split("-")[1])-1;
                                  const dateMin = lastDateSet.getDate() + different_date;
                                  lastDateSet.setDate(dateMin);
                                }else if(parseInt(e.target.value.toString().split("-")[1])===30){
                                  different_month = parseInt(e.target.value.toString().split("-")[1])/30;
                                  const dateMin = lastDateSet.getMonth() + different_month;
                                  lastDateSet.setMonth(dateMin);
                                }else if(parseInt(e.target.value.toString().split("-")[1])===365){
                                  different_year = parseInt(e.target.value.toString().split("-")[1])/365;
                                  const dateMin = lastDateSet.getFullYear() + different_year;
                                  lastDateSet.setFullYear(dateMin);
                                }else{
                                  var noOfDates = parseInt(e.target.value.toString().split("-")[1])

                                  if (noOfDates >= 365) {
                                    different_year = parseInt(noOfDates / 365)
                                    if ((noOfDates % 365) >= 30) {
                                      different_month = parseInt((noOfDates % 365) / 30)
                                    }
                                    if (((noOfDates % 365) % 30) >= 30) {
                                      different_date = parseInt(((noOfDates % 365) % 30))
                                    }
                                    const dateMin1 = lastDateSet.getFullYear() + different_year;
                                    const dateMin2 = lastDateSet.getMonth() + different_month;
                                    const dateMin3 = lastDateSet.getDate() + different_date;
                                    lastDateSet.setFullYear(dateMin1);
                                    lastDateSet.setMonth(dateMin2);
                                    lastDateSet.setDate(dateMin3);
                                  }else if(noOfDates >= 30){
                                    different_month = parseInt(noOfDates / 30)
                                    if ((noOfDates % 30) >= 30) {
                                      different_date = parseInt(noOfDates % 30)
                                    }
                                    const dateMin2 = lastDateSet.getMonth() + different_month;
                                    const dateMin3 = lastDateSet.getDate() + different_date;
                                    lastDateSet.setMonth(dateMin2);
                                    lastDateSet.setDate(dateMin3);
                                  }else if(noOfDates < 30){
                                    different_date = parseInt(noOfDates % 30)
                                    const dateMin3 = lastDateSet.getDate() + different_date;
                                    lastDateSet.setDate(dateMin3);
                                  }
                                }


                                
                                  // const dateMin = lastDateSet.getDate() - ;
                                  // lastDateSet.setDate(dateMin);
                                  console.log(lastDateSet)
                                this.setState({ 
                                add_package: e.target.value.toString().split("-")[0],
                                add_date_gap: e.target.value.toString().split("-")[1],
                                add_package_amount: e.target.value.toString().split("-")[2],
                                add_end: lastDateSet.toISOString().split("T", 1)
                              })

                            }}>
                                <option key={0} value="0">Select</option>
                                {this.props.package_data === '' ? '' : this.props.package_data.map(packageOne => {
                                    return (<option key={packageOne.id} value={packageOne.id+"-"+packageOne.period+"-"+packageOne.amount}>{packageOne.name}{'->'} {packageOne.amount}</option>)
                                })}
                                </select>
                            </td>
                          </tr>
                          
                          <tr>
                            <td>{t("Start")}* :</td>
                            <td>
                              <input id="add_start" className="form-control" type='date' value={this.state.add_start} 
                              disabled={this.state.add_start==="0000/00/00"?true:false}
                                onChange={e => { 

                                  var lastDateSet = new Date(e.target.valueAsDate.toISOString().split('T', 1));
                                  var different_date = 0
                                var different_month = 0
                                var different_year = 0
 var add_date_gapState = this.state.add_date_gap; 
 // e.target.value.toString().split("-")[1]
//  console.log("***********************************")
//  console.log(add_date_gapState)
//  console.log(lastDateSet)
 
                                if(parseInt(add_date_gapState)<30){
                                  different_date = parseInt(add_date_gapState)-1;
                                  const dateMin = lastDateSet.getDate() + different_date;
                                  lastDateSet.setDate(dateMin);
                                }else if(parseInt(add_date_gapState)===30){
                                  different_month = parseInt(add_date_gapState)/30;
                                  // console.log(add_date_gapState)
                                  const dateMin = lastDateSet.getMonth() + different_month;
                                  lastDateSet.setMonth(dateMin);
                                  // console.log(dateMin)
                                  // console.log(lastDateSet)
                                }else if(parseInt(add_date_gapState)===365){
                                  different_year = parseInt(add_date_gapState)/365;
                                  const dateMin = lastDateSet.getFullYear() + different_year;
                                  lastDateSet.setFullYear(dateMin);
                                }else{
                                  var noOfDates = parseInt(add_date_gapState)
                                  if (noOfDates >= 365) {
                                    different_year = parseInt(noOfDates / 365)
                                    if ((noOfDates % 365) >= 30) {
                                      different_month = parseInt((noOfDates % 365) / 30)
                                    }
                                    if (((noOfDates % 365) % 30) >= 30) {
                                      different_date = parseInt(((noOfDates % 365) % 30))
                                    }
                                    const dateMin1 = lastDateSet.getFullYear() + different_year;
                                    const dateMin2 = lastDateSet.getMonth() + different_month;
                                    const dateMin3 = lastDateSet.getDate() + different_date;
                                    lastDateSet.setFullYear(dateMin1);
                                    lastDateSet.setMonth(dateMin2);
                                    lastDateSet.setDate(dateMin3);
                                  }else if(noOfDates >= 30){
                                    different_month = parseInt(noOfDates / 30)
                                    if ((noOfDates % 30) >= 30) {
                                      different_date = parseInt(noOfDates % 30)
                                    }
                                    const dateMin2 = lastDateSet.getMonth() + different_month;
                                    const dateMin3 = lastDateSet.getDate() + different_date;
                                    lastDateSet.setMonth(dateMin2);
                                    lastDateSet.setDate(dateMin3);
                                  }else if(noOfDates < 30){
                                    different_date = parseInt(noOfDates % 30)
                                    const dateMin3 = lastDateSet.getDate() + different_date;
                                    lastDateSet.setDate(dateMin3);
                                  }
                                }
                                  this.setState({ 
                                    add_start: e.target.valueAsDate.toISOString().split('T', 1),
                                    add_end: lastDateSet.toISOString().split("T", 1) 
                                  });
                              }} />
                            </td>
                            <td id='invalidData' style={{color: 'red', display: 'none'}}>{t("Exist")}</td>
                          </tr>
                          
                          <tr>
                          <td>{t("End")}* :</td>
                            <td>
                              <input id="add_end" className="form-control" type='date' value={this.state.add_end} 
                              disabled={true}
                                // onChange={e => { this.setState({ add_end: e.target.valueAsDate.toISOString().split('T', 1) }); }} 
                                />
                            </td>
                          </tr>


                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      id="add"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        var valid = 1;
                        // add_member
                        // add_package                        
                        // this.state.add_start
                        // add_end                        
                        // add_package_amount
   
                        document.getElementById(
                          "add_member"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_package"
                        ).style.borderColor = null;
                        document.getElementById(
                          "add_start"
                        ).style.borderColor = null;

                        if(parseInt(this.state.add_member) === 0){
                          document.getElementById(
                            "add_member"
                          ).style.borderColor = "red";
                            valid = 0;
                        }
                        if(parseInt(this.state.add_package) === 0){
                          document.getElementById(
                            "add_package"
                          ).style.borderColor = "red";
                            valid = 0;
                        }
                        if(this.state.add_start === "0000/00/00"){
                          document.getElementById(
                            "add_start"
                          ).style.borderColor = "red";
                            valid = 0;
                        }
                        // console.log()
                        // console.log("this.state.add_start")
                        // console.log(this.state.add_finalDate)
                        // console.log(this.state.add_start)
                        // console.log(this.state.add_finalDate[0])
                        // console.log(this.state.add_start[0])
                        // console.log(this.state.add_finalDate[0].split("-")[1])
                        // console.log(this.state.add_start[0].split("-")[1])
                        // 2021-06-29
                        if(parseInt(this.state.add_finalDate[0].split("-")[0])>parseInt(this.state.add_start[0].split("-")[0])){
                          document.getElementById(
                            "add_start"
                          ).style.borderColor = "red";
                            valid = 0;
                        }else if(parseInt(this.state.add_finalDate[0].split("-")[0])===parseInt(this.state.add_start[0].split("-")[0])){
                          if(parseInt(this.state.add_finalDate[0].split("-")[1])>parseInt(this.state.add_start[0].split("-")[1])){
                            document.getElementById(
                              "add_start"
                            ).style.borderColor = "red";
                              valid = 0;
                          }else if(parseInt(this.state.add_finalDate[0].split("-")[1])===parseInt(this.state.add_start[0].split("-")[1])){
                            if(parseInt(this.state.add_finalDate[0].split("-")[2])>=parseInt(this.state.add_start[0].split("-")[2])){
                              document.getElementById(
                                "add_start"
                              ).style.borderColor = "red";
                                valid = 0;
                            }
                          }
                        }
                        // add_member, add_package, add_start, add_end, add_package_amount
                        if (valid === 1) {
                          this.props.add_PaymentMember(
                            this.state.add_member,
                            this.state.add_package,
                            this.state.add_start,
                            this.state.add_end,
                            this.state.add_package_amount,
                            this.props.tbl_State,
                            this.props.token
                          );
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

    name: state.rLogin.name,
    id: state.rLogin.id,

    tbl_State: state.r_Payment.state,
    package_data: state.r_Payment.package_data,
    member_data: state.r_Payment.member_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Membership_Packages: (token) => {
      dispatch(actionCreator.fetch_Membership_Packages(token));
    },
    fetch_Membership_Member: (token) => {
      dispatch(actionCreator.fetch_Membership_Member(token));
    },
    add_PaymentMember: (member, packageId, start, end, package_amount, tbl_State, token) => {
      dispatch(actionCreator.add_PaymentMember(member, packageId, start, end, package_amount, tbl_State, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment_Member);

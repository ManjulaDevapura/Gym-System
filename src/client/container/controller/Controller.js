import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
// import $ from 'jquery';

import Navigation from "../navigation/Navigation";
import LogIn from "../login/LogIn";
import Home from "../dashboard/Home";

// language image
import en from "../Images/en.png";
import fr from "../Images/fr.png";

// Main classes content
import Admin_UserPermission from "../dashboard/basicData/Admin/Admin_UserPermission";
import Admin_Package from "../dashboard/basicData/Admin/Admin_Package";
import Admin_Equipment from "../dashboard/basicData/Admin/Admin_Equipment";
import Admin_DuePayment from "../dashboard/basicData/Admin/Admin_DuePayment";

import User_Admin from "../dashboard/basicData/User/Admin";
import User_Instructor from "../dashboard/basicData/User/Instructor";
import User_Operator from "../dashboard/basicData/User/Operator";
import User_Punch from "../dashboard/basicData/User/Punch";

import User_Member from "../dashboard/basicData/Member/Member";
import Member_Instructor from "../dashboard/basicData/Member/Member_Instructor";
import Member_Body from "../dashboard/basicData/Member/Member_Body";
import Member_Diet from "../dashboard/basicData/Member/Member_Diet";
import Member_Excercise from "../dashboard/basicData/Member/Member_Excercise";
import Member_Payment from "../dashboard/basicData/Member/Member_Payment";

// import StaffMaintain from "../dashboard/basicData/AdminMaintainAdmin";

import Payment_Member from "../dashboard/basicData/Payment/Payment_Member";
import Payment_Expences from "../dashboard/basicData/Payment/Payment_Expences";
import Payment_Income from "../dashboard/basicData/Payment/Payment_Income";
import Payment_PayType from "../dashboard/basicData/Payment/Payment_PayType";
import Payment_Employee from "../dashboard/basicData/Payment/Payment_Employee";

import Report_Message from "../dashboard/basicData/Report/Report_Message";
import Report_Attendence from "../dashboard/basicData/Report/Report_Attendence";
import Report_Packages from "../dashboard/basicData/Report/Report_Packages";
import Report_PackageWiseMembership from "../dashboard/basicData/Report/Report_PackageWiseMembership";
import Report_Expences from "../dashboard/basicData/Report/Report_Expences";
import Report_Income from "../dashboard/basicData/Report/Report_Income";
import Report_Salary from "../dashboard/basicData/Report/Report_Salary";
import Report_Membership from "../dashboard/basicData/Report/Report_Membership";
import Report_Profit from "../dashboard/basicData/Report/Report_Profit";
import Report_Equipment from "../dashboard/basicData/Report/Report_Equipment";

import Punch_Allocation from "../dashboard/basicData/Punch/Punch_Allocation";

import NoEntry from "../dashboard/basicData/NoEntry";
import Gym from "../dashboard/basicData/Home";



// loading images
import loading from "../Images/guard.gif";
import GymSIgn from "../Images/Gym1.gif";
import GymSIgn2 from "../Images/Gym2.gif";
import supunJPG from "../Images/supun.jpg";
// import i18next from 'i18next';
import Toast from '../components/Toast';
import $ from "jquery";

import * as actionCreator from "../../actions/login_actions";

export class Controller extends Component {
  
  componentDidUpdate() {    
    this.props.fetch_MsgCount(this.props.user_Id, this.props.token);
  }




  render() {
    // console.log(parseInt(this.props.type_Id))

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <div>
      <Route path="/home" component={Gym} />
        <Route path="/" component={Gym} exact/>
        {/* type_Id */}

        {this.props.type_Id!=4?
        <div>
        <Route path="/admin" component={parseInt(this.props.type_Id)===1?Admin_UserPermission:NoEntry} exact />
        <Route path="/admin/userPermission" component={parseInt(this.props.type_Id)===1?Admin_UserPermission:NoEntry} />
        <Route path="/admin/package" component={parseInt(this.props.type_Id)===1?Admin_Package:NoEntry} />
        <Route path="/admin/equipment" component={parseInt(this.props.type_Id)===1?Admin_Equipment:NoEntry} />
        <Route path="/admin/duePayment" component={parseInt(this.props.type_Id)===1?Admin_DuePayment:NoEntry} />
        

        <Route path="/user" component={User_Operator} exact />
        <Route path="/user/admin" component={User_Admin} />
        <Route path="/user/instructor" component={User_Instructor} /> 
        <Route path="/user/operator" component={User_Operator} />
        <Route path="/user/punch" component={User_Punch} />

        <Route path="/members" component={parseInt(this.props.type_Id)===1?User_Member:NoEntry} exact />
        <Route path="/members/view" component={parseInt(this.props.type_Id)===1?User_Member:NoEntry} />
        <Route path="/members/instructor" component={Member_Instructor} />
        <Route path="/members/body" component={Member_Body} />
        <Route path="/members/diet" component={Member_Diet} />
        <Route path="/members/excercise" component={Member_Excercise} />
        <Route path="/members/payment" component={Member_Payment} />

        <Route path="/payment" component={parseInt(this.props.type_Id)===1||parseInt(this.props.type_Id)===2?Payment_Member:NoEntry} exact />
        <Route path="/payment/member" component={parseInt(this.props.type_Id)===1||parseInt(this.props.type_Id)===2?Payment_Member:NoEntry} />
        <Route path="/payment/expences" component={parseInt(this.props.type_Id)===1||parseInt(this.props.type_Id)===2||parseInt(this.props.type_Id)===3?Payment_Expences:NoEntry} />
        <Route path="/payment/income" component={parseInt(this.props.type_Id)===1||parseInt(this.props.type_Id)===2||parseInt(this.props.type_Id)===3?Payment_Income:NoEntry} />
        <Route path="/payment/payType" component={parseInt(this.props.type_Id)===1||parseInt(this.props.type_Id)===2||parseInt(this.props.type_Id)===3?Payment_PayType:NoEntry} />
        <Route path="/payment/employee" component={parseInt(this.props.type_Id)===1?Payment_Employee:NoEntry} />
        
        <Route path="/report" component={Report_Message} exact />
        <Route path="/report/message" component={Report_Message} />
        <Route path="/report/attendence" component={parseInt(this.props.type_Id)<4?Report_Attendence:NoEntry} />
        <Route path="/report/packageReport" component={Report_Packages} />
        <Route path="/report/packageWiseReport" component={Report_PackageWiseMembership} />
        <Route path="/report/expence" component={Report_Expences} />
        <Route path="/report/income" component={Report_Income} />
        <Route path="/report/salary" component={Report_Salary} />
        <Route path="/report/membership" component={Report_Membership} />
        <Route path="/report/profit" component={Report_Profit} />
        <Route path="/report/equipment" component={Report_Equipment} />
        
        <Route path="/punch" component={Punch_Allocation} exact />
        <Route path="/punch/allocation" component={Punch_Allocation} />   
        </div>:null}
      </div>
    );

    // if(!this.props.isLoggedIn){
    //   return(<div style={{backgroundColor: "black", height: "100vh", weight: "100%"}}>
    //   <Route path="/" component={LogIn}  /> 
    //   </div>)
    // }else if(this.props.isLoggedIn)
    // {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            {/* Top nav bar */}
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
              <NavLink
                className="navbar-brand mr-1 main-logo"
                style={{
                  height: 40,
                  alignContent: "center",
                  textAlign: "center"
                }}
                to="/home"
              >
                <span
                  style={{
                    height: 40,
                    alignContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    paddingLeft: 0
                  }}
                >
                  {t("Gym Management System")}
                </span>
              </NavLink>

              <button
                className="btn btn-link btn-sm text-white order-1 order-sm-0"
                id="sidebarToggle"
              >
                <i className="fas fa-bars"></i>
              </button>

              <div id="content-wrapper" style={{ height: 40 }}>
                <div className="container-fluid">
                  <ol className="breadcrumb" style={{ height: 40 }}>
                    <li className="breadcrumb-item" style={{ height: 30 }}>
                      <NavLink to={this.props.location.pathname.split("/")[0]}>
                        {this.props.location.pathname.slice(1).split("/")[0]}
                      </NavLink>
                    </li>
                    <li className="breadcrumb-item" style={{ height: 30 }}>
                      <NavLink to={this.props.location.pathname.split("/")[1]}>
                        {this.props.location.pathname.slice(1).split("/")[1]}
                      </NavLink>
                    </li>
                    {/* {(this.props.location.pathname).slice(1).split('/').join('/')} */}
                  </ol>
                </div>
              </div>
              {/* Nav items */}
              <ul className="navbar-nav ml-auto">
                {/* Welcom message */}
                {this.props.name === "" ? (
                  ""
                ) : (
                  <li className="nav-item dropdown no-arrow">
                    <div style={{ color: "white" }} className="nav-link">
                      {t("")}{""}{this.props.type}{" - "}
                      <span style={{ textShadow: "2px 2px #FF0000" }}>
                        {this.props.name}{" "}{" "}
                      </span>

                      {/* {this.props.noOfMsg!=1?<div class="supMsg">
                      <i className="far fa-envelope"></i>
                      <sup  style={{ color: "red", fontWeight: "bold", fontSize: 20, animationName: "msgSup" }}>
                        {this.props.noOfMsg}
                      </sup>
                      </div>
                      :
                      <></>} */}
                    </div>
                  </li>
                )}

                      <li className="nav-item dropdown no-arrow"> 
                    <div style={{ color: "white" }} className="nav-link">
                      {this.props.noOfMsg!=0?<div class="supMsg">
                      <i className="far fa-envelope fa-1x"></i>
                      <sup class="supMsg" style={{ color: "red", fontWeight: "bold", fontSize: 17 }}>
                        {this.props.noOfMsg}
                      </sup>
                      </div>
                      :
                      <></>}
                      </div>
                      </li>
                
                
                {/* Logout */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href=" "
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user-circle fa-fw"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="userDropdown"
                  >
                    <div className="dropdown-item">{this.props.name}</div>
                    <hr></hr>
                    <button
                      id="logout"
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#logoutModal"
                      onClick={() => {
                        this.props.logout(this.props.isLoggedIn);
                      }}
                    >
                      {t("Logout")}
                    </button>
                  </div>
                </li>
              </ul>
            </nav>



 {this.props.isLoggedIn?(<div> 
            {/* Sidebar + Content */}
            <div id="wrapper">
              {/* Sidebar */}
              <div className="sidebar navbar-nav" style={{display: this.props.type_Id!=4?"block":"none"}}>
              {this.props.type_Id!=4? <Navigation />:null}
              </div>

              {/* check user is logged in  */}
              <div id="content-wrapper">
                <div className="container-fluid">
                  {/* show current location */}
                  {/* <ol className='breadcrumb'>

                                        <li className='breadcrumb-item'><NavLink to={(this.props.location.pathname).split('/')[0]}>{(this.props.location.pathname).slice(1).split('/')[0]}</NavLink></li>
                                        <li className='breadcrumb-item'><NavLink to={(this.props.location.pathname).split('/')[1]}>{(this.props.location.pathname).slice(1).split('/')[1]}</NavLink></li>

                                        {/* {(this.props.location.pathname).slice(1).split('/').join('/')} */}
                  {/* </ol> */}
{/* {/*  */}
                  {/* <Route path="/" component={LogIn} exact />  */}
{/* */}

                  {/* if logged in, navigate to home page else navigate to login page*/}
                  {this.props.isLoggedIn ? (
                    <>
                    <PrivateRoute />
                    <div id='ToastSection'>
                        <div id='errorToast' className="toast" role="alert" aria-live="assertive" aria-atomic="true" autohide='true' data-animation='true' data-delay='20000' style={{ position: 'fixed', bottom: '2px', right: '3px' }}>
                        <Toast id='errT' />
                        </div>
                    </div>
                    </>
                  ) : this.props.location.pathname === "/" ? null : (
                    <div>
                      <img src={loading} alt={"loading"} />
                      <span style={{color: 'red', fontWeight: "bold"}}>{t("Please")}</span> <NavLink to="/">{t("Login")}</NavLink>
                    </div>
                  )}
                </div>
              </div>
            </div>
            



           </div>):(<div style={{backgroundColor: 'black',backgroundImage: `url(${supunJPG})`,width:'100%', height:650, 
           backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
           backgroundSize: '100%'}} >
                  <div className="table">
                        <div className='row'>
                            {/* <div className='col-lg-4'>
                      <img src={GymSIgn} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} />
                      </div>  */}
                      {/* <div className='col-lg-1'>
                      <img src={GymSIgn} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} />
                      </div> */}
                      <div className='col-lg-3'> <img src={GymSIgn2} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} />
                      </div>
                            <div className='col-lg-6'>
                       <Route path="/" component={LogIn}  /> 
                       </div>
                      <div className='col-lg-3'> <img src={GymSIgn2} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} />
                      </div>
                           
                      </div>
                        <div className='row'>
                            <div className='col-lg-4'>
                      {/* <img src={GymSIgn} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} /> */}
                      </div> 
                      <div className='col-lg-4'>
                     </div>
                            <div className='col-lg-4'>
                      {/* <img src={GymSIgn} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} /> */}
                      </div> 
                      </div>
       </div></div>)} 
          </div>
        )}
      </Translation>
    );
                  // }else{
                  //   return(<div></div>)
                  // }

  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    name: state.rLogin.name,
    type: state.rLogin.type,
    type_Id: state.rLogin.type_Id,
    noOfMsg: state.r_Message.noOfMsg,
    user_Id: state.rLogin.user_Id,
    token: state.rLogin.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: isLoggedIn => {
      dispatch(actionCreator.logout(isLoggedIn));
    },
    fetch_MsgCount: (userId, token) => {
      dispatch(actionCreator.fetch_MsgCount(userId, token));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Controller)
);

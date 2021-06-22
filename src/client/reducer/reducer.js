import { combineReducers } from "redux";

import reducerLogin from "./reducerLogin";
import reducer_Admin_UserPermission from "./basicData/reducer_Admin_UserPermission";
import reducer_UserTypes from "./basicData/reducer_UserTypes";
import reducer_Users from "./basicData/reducer_Users";
import reducer_Members from "./basicData/reducer_Members";
import reducer_Body from "./basicData/reducer_Body";
import reducer_Diet from "./basicData/reducer_Diet";
import reducer_Excercise from "./basicData/reducer_Excercise";
import reducer_Packages from "./basicData/reducer_Packages";
import reducer_Payment from "./basicData/reducer_Payment";
import reducer_Messages from "./basicData/reducer_Messages";
import reducer_Attendence from "./basicData/reducer_Attendence";
import reducer_Home from "./basicData/reducer_Home";
import reducer_Card from "./basicData/reducer_Card";
import reducer_Expences from "./basicData/reducer_Expences";
import reducer_PayType from "./basicData/reducer_PayType";
import reducer_Pay_Emp from "./basicData/reducer_Pay_Emp";
import reducer_Report_Expences from "./basicData/reducer_Report_Expences";
import reducer_Income from "./basicData/reducer_Income";
import reducer_Report_Income from "./basicData/reducer_Report_Income";
import reducer_Report_Salary from "./basicData/reducer_Report_Salary";
import reducer_Report_Membership from "./basicData/reducer_Report_Membership";
import reducer_Report_Profit from "./basicData/reducer_Report_Profit";
import reducer_Equipment from "./basicData/reducer_Equipment";
import reducer_DuePayment from "./basicData/reducer_DuePayment";

export const rootReducer = combineReducers({
  rLogin: reducerLogin,
  r_Admin_UserPermission: reducer_Admin_UserPermission,
  r_UserTypes: reducer_UserTypes,
  r_Users: reducer_Users,
  r_Members: reducer_Members,
  r_Body: reducer_Body,
  r_Diet: reducer_Diet,
  r_Excercise: reducer_Excercise,
  r_Packages: reducer_Packages,
  r_Payment: reducer_Payment,
  r_Message: reducer_Messages,
  r_Attendence: reducer_Attendence,
  r_Home: reducer_Home,
  r_Card: reducer_Card,
  r_Expences: reducer_Expences,
  r_PayType: reducer_PayType,
  r_PayEmp: reducer_Pay_Emp,
  r_RepExpences :reducer_Report_Expences,
  r_Income :reducer_Income,
  r_RepIncome :reducer_Report_Income,
  r_RepSalary :reducer_Report_Salary,
  r_RepMembership :reducer_Report_Membership,
  r_RepProfit :reducer_Report_Profit,
  r_Equipment: reducer_Equipment,
  r_DuePayment: reducer_DuePayment,
});

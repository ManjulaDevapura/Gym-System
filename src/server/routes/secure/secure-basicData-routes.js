var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();

//Admin
const { get_UserPermission } = require("../../controllers/basicData/admin/get_UserPermission");
const { update_UserPermission } = require("../../controllers/basicData/admin/update_UserPermission");
const { delete_UserPermission } = require("../../controllers/basicData/admin/delete_UserPermission");
const { get_UserTypes_admin } = require("../../controllers/basicData/admin/get_UserTypes");
const { get_Users_admin } = require("../../controllers/basicData/admin/get_Users");
const { add_UserPermission } = require("../../controllers/basicData/admin/add_UserPermission");
const { update_Login } = require("../../controllers/basicData/admin/update_Login");
const { validate_UserName } = require("../../controllers/basicData/admin/validate_UserName");
router.post("/admin/get_UserPermission", get_UserPermission);
router.post("/admin/update_UserPermission", update_UserPermission);
router.post("/admin/delete_UserPermission", delete_UserPermission);
router.post("/admin/get_UserTypes", get_UserTypes_admin);
router.post("/admin/get_Users", get_Users_admin);
router.post("/admin/add_UserPermission", add_UserPermission);
router.post("/admin/update_Login", update_Login);
router.post("/admin/validate_UserName", validate_UserName);


//UserTypes
const { get_UserTypes } = require("../../controllers/basicData/userTypes/get_UserTypes");
router.post("/userTypes/get_UserTypes", get_UserTypes);

//Users
const { validate_Nic_User } = require("../../controllers/basicData/user/validate_Nic");
router.post("/user/validate_Nic_User", validate_Nic_User);
////
const { get_Admins } = require("../../controllers/basicData/user/get_Admins");
const { add_Admins } = require("../../controllers/basicData/user/add_Admins");
const { update_Admins } = require("../../controllers/basicData/user/update_Admins");
const { delete_Admins } = require("../../controllers/basicData/user/delete_Admins");
router.post("/user/get_Admins", get_Admins);
router.post("/user/add_Admins", add_Admins);
router.post("/user/update_Admins", update_Admins);
router.post("/user/delete_Admins", delete_Admins);
////
const { get_Instructors } = require("../../controllers/basicData/user/get_Instructors");
const { add_Instructors } = require("../../controllers/basicData/user/add_Instructors");
const { update_Instructors } = require("../../controllers/basicData/user/update_Instructors");
const { delete_Instructors } = require("../../controllers/basicData/user/delete_Instructors");
router.post("/user/get_Instructors", get_Instructors);
router.post("/user/add_Instructors", add_Instructors);
router.post("/user/update_Instructors", update_Instructors);
router.post("/user/delete_Instructors", delete_Instructors);
////
const { get_Operators } = require("../../controllers/basicData/user/get_Operators");
const { add_Operators } = require("../../controllers/basicData/user/add_Operators");
const { update_Operators } = require("../../controllers/basicData/user/update_Operators");
const { delete_Operators } = require("../../controllers/basicData/user/delete_Operators");
router.post("/user/get_Operators", get_Operators);
router.post("/user/add_Operators", add_Operators);
router.post("/user/update_Operators", update_Operators);
router.post("/user/delete_Operators", delete_Operators);
////
const { get_Punch } = require("../../controllers/basicData/user/get_Punch");
const { add_Punch } = require("../../controllers/basicData/user/add_Punch");
const { update_Punch } = require("../../controllers/basicData/user/update_Punch");
const { delete_Punch } = require("../../controllers/basicData/user/delete_Punch");
router.post("/user/get_Punchs", get_Punch);
router.post("/user/add_Punchs", add_Punch);
router.post("/user/update_Punchs", update_Punch);
router.post("/user/delete_Punchs", delete_Punch);

// Member
const { get_Members } = require("../../controllers/basicData/member/get_Members");
const { get_Members_Ins } = require("../../controllers/basicData/member/get_Members_Ins");
const { add_Members } = require("../../controllers/basicData/member/add_Members");
const { update_Members } = require("../../controllers/basicData/member/update_Members");
const { delete_Members } = require("../../controllers/basicData/member/delete_Members");
const { update_Permission } = require("../../controllers/basicData/member/update_UserPermission");
const { get_Instructors_member } = require("../../controllers/basicData/member/get_Instructors");
const { validate_Nic_Member } = require("../../controllers/basicData/member/validate_Nic");
const { get_Users_Membership } = require("../../controllers/basicData/member/get_Users_Membership");
router.post("/user/get_Members", get_Members);
router.post("/user/get_Members_Ins", get_Members_Ins);
router.post("/user/add_Members", add_Members);
router.post("/user/update_Members", update_Members);
router.post("/user/delete_Members", delete_Members);
router.post("/user/update_UserPermission", update_Permission);
router.post("/user/get_Instructors_member", get_Instructors_member);
router.post("/user/validate_Nic_Member", validate_Nic_Member);
router.post("/user/get_Users_Membership", get_Users_Membership);

//Body
const { get_Body } = require("../../controllers/basicData/body/get_Body");
const { get_Body_ByMember } = require("../../controllers/basicData/body/get_Body_ByMember");
const { update_Body } = require("../../controllers/basicData/body/update_Body");
router.post("/body/get_Body", get_Body);
router.post("/body/get_Body_ByMember", get_Body_ByMember);
router.post("/body/update_Body", update_Body);

//Diet
const { get_Diet } = require("../../controllers/basicData/diet/get_Diet");
const { get_Diet_ByMember } = require("../../controllers/basicData/diet/get_Diet_ByMember");
const { update_Diet } = require("../../controllers/basicData/diet/update_Diet");
const { get_Diet_All } = require("../../controllers/basicData/diet/get_Diet_All");
router.post("/diet/get_Diet", get_Diet);
router.post("/diet/get_Diet_ByMember", get_Diet_ByMember);
router.post("/diet/update_Diet", update_Diet);
router.post("/diet/get_Diet_All", get_Diet_All);

//Excercise
const { get_Excercise } = require("../../controllers/basicData/excercise/get_Excercise");
const { get_Excercise_ByMember } = require("../../controllers/basicData/excercise/get_Excercise_ByMember");
const { update_Excercise } = require("../../controllers/basicData/excercise/update_Excercise");
const { get_Exe_All } = require("../../controllers/basicData/excercise/get_Exe_All");
router.post("/excercise/get_Excercise", get_Excercise);
router.post("/excercise/get_Excercise_ByMember", get_Excercise_ByMember);
router.post("/excercise/update_Excercise", update_Excercise);
router.post("/excercise/get_Exe_All", get_Exe_All);

//Packages
const { get_Packages } = require("../../controllers/basicData/package/get_Packages");
const { add_Package } = require("../../controllers/basicData/package/add_Package");
const { update_Package } = require("../../controllers/basicData/package/update_Package");
const { delete_Package } = require("../../controllers/basicData/package/delete_Package");
const { validate_Package_Name } = require("../../controllers/basicData/package/validate_Package_Name");
const { state_Package } = require("../../controllers/basicData/package/state_Package");
router.post("/package/get_Packages", get_Packages);
router.post("/package/add_Package", add_Package);
router.post("/package/update_Package", update_Package);
router.post("/package/delete_Package", delete_Package);
router.post("/package/validate_Package_Name", validate_Package_Name);
router.post("/package/state_Package", state_Package);


//Payment
const { get_Membership } = require("../../controllers/basicData/payment/get_Membership");
const { get_Membership_Packages } = require("../../controllers/basicData/payment/get_Packages");
const { get_Membership_Members } = require("../../controllers/basicData/payment/get_Members");
const { add_Payment } = require("../../controllers/basicData/payment/add_Payment");
const { delete_Payment } = require("../../controllers/basicData/payment/delete_Payment");
router.post("/payment/get_Membership", get_Membership);
router.post("/payment/get_Membership_Packages", get_Membership_Packages);
router.post("/payment/get_Membership_Members", get_Membership_Members);
router.post("/payment/add_Payment", add_Payment);
router.post("/payment/delete_Payment", delete_Payment);


//Message
const { get_Messages } = require("../../controllers/basicData/message/get_Message");
const { get_MsgCount } = require("../../controllers/basicData/message/get_MsgCount");
// // const { add_Package } = require("../../controllers/basicData/package/add_Package");
const { update_Message } = require("../../controllers/basicData/message/update_Message");
// // const { delete_Package } = require("../../controllers/basicData/package/delete_Package");
// // const { validate_Package_Name } = require("../../controllers/basicData/package/validate_Package_Name");
router.post("/messages/get_Messages", get_Messages);
router.post("/messages/get_MsgCount", get_MsgCount);
// // router.post("/package/add_Package", add_Package);
router.post("/messages/update_Messages", update_Message);
// // router.post("/package/delete_Package", delete_Package);
// // router.post("/package/validate_Package_Name", validate_Package_Name);




//Attendence
const { get_Attendence } = require("../../controllers/basicData/attendence/get_Attendence");
router.post("/attendence/get_Attendences", get_Attendence);


//Home
const { activeUsersCount } = require("../../controllers/basicData/home/activeUsersCount");
const { instructorsCount } = require("../../controllers/basicData/home/instructorsCount");
const { packagesCount } = require("../../controllers/basicData/home/packagesCount");
const { lastWeekCount } = require("../../controllers/basicData/home/lastWeekCount");
const { packageWiseCount } = require("../../controllers/basicData/home/packageWiseCount");
router.post("/home/activeUsersCount", activeUsersCount);
router.post("/home/instructorsCount", instructorsCount);
router.post("/home/packagesCount", packagesCount);
router.post("/home/lastWeekCount", lastWeekCount);
router.post("/home/packageWiseCount", packageWiseCount);




//Home
const { get_Members_Card } = require("../../controllers/basicData/card/get_Members");
const { add_Card } = require("../../controllers/basicData/card/add_Card");
const { get_Cards } = require("../../controllers/basicData/card/get_Cards");
const { get_CardMembers } = require("../../controllers/basicData/card/get_CardMembers");
const { get_CardDiet } = require("../../controllers/basicData/card/get_CardDiet");
const { get_CardMembership } = require("../../controllers/basicData/card/get_CardMembership");
const { get_CardBody } = require("../../controllers/basicData/card/get_CardBody");
const { get_CardExcercise } = require("../../controllers/basicData/card/get_CardExcercise");
router.post("/card/get_Members", get_Members_Card);
router.post("/card/add_Card", add_Card);
router.post("/card/get_Cards", get_Cards);
router.post("/card/get_CardMembers", get_CardMembers);
router.post("/card/get_CardDiet", get_CardDiet);
router.post("/card/get_CardMembership", get_CardMembership);
router.post("/card/get_CardBody", get_CardBody);
router.post("/card/get_CardExcercise", get_CardExcercise);



//Report
const { get_ReportPackages } = require("../../controllers/basicData/report/get_ReportPackages");
const { get_ReportExpences } = require("../../controllers/basicData/report/get_ReportExpences");
const { get_ReportIncome } = require("../../controllers/basicData/report/get_ReportIncome");
const { get_ReportSalary } = require("../../controllers/basicData/report/get_ReportSalary");
const { get_ReportMembership } = require("../../controllers/basicData/report/get_ReportMembership");
const { get_ReportProfit } = require("../../controllers/basicData/report/get_ReportProfit");
router.post("/report/get_Packages", get_ReportPackages);
router.post("/report/get_ReportExpences", get_ReportExpences);
router.post("/report/get_ReportIncome", get_ReportIncome);
router.post("/report/get_ReportSalary", get_ReportSalary);
router.post("/report/get_ReportMembership", get_ReportMembership);
router.post("/report/get_ReportProfit", get_ReportProfit);



//Expences
const { get_Expences } = require("../../controllers/basicData/expences/get_Expences");
const { get_Users_Expences } = require("../../controllers/basicData/expences/get_Users_Expences");
const { add_Expences } = require("../../controllers/basicData/expences/add_Expences");
router.post("/expences/get_Expences", get_Expences);
router.post("/expences/get_Users_Expences", get_Users_Expences);
router.post("/expences/add_Expences", add_Expences);


//Income
const { get_Income } = require("../../controllers/basicData/income/get_Income");
const { get_Users_Income } = require("../../controllers/basicData/income/get_Users_Income");
const { add_Income } = require("../../controllers/basicData/income/add_Income");
router.post("/income/get_Income", get_Income);
router.post("/income/get_Users_Income", get_Users_Income);
router.post("/income/add_Income", add_Income);


//PayType
const { get_PayType } = require("../../controllers/basicData/payType/get_PayType");
const { add_PayType } = require("../../controllers/basicData/payType/add_PayType");
router.post("/payType/get_PayType", get_PayType);
router.post("/payType/add_PayType", add_PayType);


//Salary
const { get_Salary } = require("../../controllers/basicData/salary/get_Salary");
const { get_Users_Salary } = require("../../controllers/basicData/salary/get_Users_Salary");
const { add_Salary } = require("../../controllers/basicData/salary/add_Salary");
router.post("/salary/get_Salary", get_Salary);
router.post("/salary/get_Users_Salary", get_Users_Salary);
router.post("/salary/add_Salary", add_Salary);


//Equipment
const { get_Equipment } = require("../../controllers/basicData/equipment/get_Equipment");
const { add_Equipment } = require("../../controllers/basicData/equipment/add_Equipment");
const { update_Equipment } = require("../../controllers/basicData/equipment/update_Equipment");
const { state_Equipment } = require("../../controllers/basicData/equipment/state_Equipment");
const { validate_Equipment_Name } = require("../../controllers/basicData/equipment/validate_Equipment_Name");
router.post("/equipment/get_Equipment", get_Equipment);
router.post("/equipment/add_Equipment", add_Equipment);
router.post("/equipment/update_Equipment", update_Equipment);
router.post("/equipment/state_Equipment", state_Equipment);
router.post("/equipment/validate_Equipment_Name", validate_Equipment_Name);


// DuePayments
const { get_DuePayments } = require("../../controllers/basicData/duePayment/get_DuePayments");
router.post("/duePayment/get_DuePayment", get_DuePayments);

module.exports = router;

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_ReportMembership = async (req, res) => {
  var start = req.body.start;
  var end = req.body.end;
  var empNo = req.body.empNo;
  const check = parseInt(empNo) === 0 ? "" : `AND membership.user_Id = ${empNo} `;

  const sql = `
  SELECT membership.*, user.name as empName, package.name as packageName
  FROM membership 
  left join user on membership.user_Id = user.id
  left join package on membership.package_Id = package.id
  where membership.created >= '${start}' and membership.created <= '${end}' ${check};`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

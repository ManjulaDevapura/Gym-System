const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_ReportSalary = async (req, res) => {
  var start = req.body.start;
  var end = req.body.end;
  var empNo = req.body.empNo;
  const check = parseInt(empNo) === 0 ? "" : `AND salary.user_Id = ${empNo} `;

  const sql = `
  SELECT salary.*, user.name as empName
  FROM salary
  left join user on salary.user_Id = user.id
  where salary.created >= '${start}' and salary.created <= '${end}' ${check};`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

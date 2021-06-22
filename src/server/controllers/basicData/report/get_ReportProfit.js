const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_ReportProfit = async (req, res) => {
  var start = req.body.start;
  var end = req.body.end;

  const sql_Income = `
  SELECT income.*, pay_type.reason as payTypeName 
  FROM income 
  left join pay_type on income.payType_Id = pay_type.id
  where created >= '${start}' and created <= '${end}';`;

  con(sql_Income, (err_Income, result_Income) => {
    const sql_Expences = `
    SELECT expences.*, pay_type.reason as payTypeName 
    FROM expences 
    left join pay_type on expences.payType_Id = pay_type.id
    where created >= '${start}' and created <= '${end}';`;

    con(sql_Expences, (err_Expences, result_Expences) => {
      const sql_Membership = `
      SELECT membership.*, user.name as empName, package.name as packageName
      FROM membership 
      left join user on membership.user_Id = user.id
      left join package on membership.package_Id = package.id
      where membership.created >= '${start}' and membership.created <= '${end}';`;

      con(sql_Membership, (err_Membership, result_Membership) => {
        const sql_Salary = `
        SELECT salary.*, user.name as empName 
        FROM salary 
        left join user on salary.user_Id = user.id
        where salary.created >= '${start}' and salary.created <= '${end}';`;

        con(sql_Salary, (err_Salary, result_Salary) => {
          const result = {
            income: result_Income,
            expences: result_Expences,
            membership: result_Membership,
            salary: result_Salary,
          };
          res.status(200).json(result);
        });
      });
    });
  });
};

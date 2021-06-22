const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_ReportIncome = async (req, res) => {

    var start = req.body.start;
    var end  = req.body.end;

  const sql = `
  SELECT income.*, user.name as userName, pay_type.reason as payTypeName 
  FROM income 
  left join pay_type on income.payType_Id = pay_type.id
  left join user on user.id = expences.toUser_Id
  where income.created >= '${start}' and income.created <= '${end}';`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

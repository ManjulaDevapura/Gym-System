const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_ReportExpences = async (req, res) => {

    var start = req.body.start;
    var end  = req.body.end;

  const sql = `
  SELECT expences.*, user.name as userName, pay_type.reason as payTypeName 
  FROM expences 
  left join pay_type on expences.payType_Id = pay_type.id
  left join user on user.id = expences.toUser_Id
  where expences.created >= '${start}' and expences.created <= '${end}';`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

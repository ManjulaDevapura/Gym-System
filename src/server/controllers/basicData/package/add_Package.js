var { con } = require("../../../database/config/transac");
var md5 = require("blueimp-md5");

exports.add_Package = (req, res, next) => {
  let name = req.body.name;
  let amount = req.body.amount;
  let period = req.body.period;
  let type = req.body.type;

  var sql = `INSERT INTO package
              (name, amount, period, expired, type)
                VALUES ('${name}', '${amount}', '${period}', '0', '${type}');`;

  con(sql, (err, result) => {
    res.json("success");
  });
};

var { con } = require("../../../database/config/transac");

exports.add_PayType = (req, res, next) => {
  let reason = req.body.reason;

  var sql = `INSERT INTO pay_type
              (reason)
                VALUES ('${reason}');`;

  con(sql, (err, result) => {
    res.json("success");
  });
};

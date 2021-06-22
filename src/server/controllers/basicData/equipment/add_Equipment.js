var { con } = require("../../../database/config/transac");
var md5 = require("blueimp-md5");

exports.add_Equipment = (req, res, next) => {
  let name = req.body.name;
  let value = req.body.amount;
  let description = req.body.description;

  var sql = `INSERT INTO equipment
              (name, value, description, status)
                VALUES ('${name}', '${value}', '${description}', '1');`;

  con(sql, (err, result) => {
    res.json("success");
  });
};

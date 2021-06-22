const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.validate_Package_Name = async (req, res) => {
  let name = req.body.name;
  const sql = `select count(*) as no_Packages from package where name = '${name}' ;`;

  con(sql, (err, result) => {    
    if (parseInt(result[0].no_Packages) === 0) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  });
};

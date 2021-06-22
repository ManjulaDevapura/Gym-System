const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_UserTypes_admin = async (req, res) => {
  const sql = `select * from userType ;`;

  con(sql, (err, result) => {
    
    res.status(200).json(result);
  });
};

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.validate_UserName = async (req, res) => {
  let userName = req.body.userName;
  const sql = `select count(*) as no_Users from login where username = '${userName}' ;`;

  con(sql, (err, result) => {
    
    if (parseInt(result[0].no_Users) === 0) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  });
};

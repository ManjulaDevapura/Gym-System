const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.validate_Nic_Member = async (req, res) => {
  let nic = req.body.nic;
  const sql = `select count(*) as no_Users from user where nic = '${nic}' ;`;

  con(sql, (err, result) => {    
    if (parseInt(result[0].no_Users) === 0) {
      res.status(200).json(true);
    } else {
      res.status(200).json(false);
    }
  });
};

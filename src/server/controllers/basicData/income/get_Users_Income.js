const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Users_Income = async (req, res) => {
  const sql = `select * from user;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

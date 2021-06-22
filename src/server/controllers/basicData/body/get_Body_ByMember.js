const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Body_ByMember = async (req, res) => {
  let member = req.body.member;
  const sql = `SELECT * FROM gym_management.body where user_Id = ${member} AND history = 0;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

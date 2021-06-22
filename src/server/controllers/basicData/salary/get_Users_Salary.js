const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Users_Salary = async (req, res) => {
  const sql = `SELECT * FROM user left join login on user.id = login.user_Id where login.type_Id = 1 or login.type_Id = 3;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

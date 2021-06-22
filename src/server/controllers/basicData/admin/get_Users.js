const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Users_admin = async (req, res) => {
  const sql = `select user.* from user 
                  left join login ON user.id = login.user_Id
                      where login.id  is NULL;`;

  con(sql, (err, result) => {
   
    res.status(200).json(result);
  });
};

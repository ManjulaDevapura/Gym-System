const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Instructors_member = async (req, res) => {
  const sql = `
    select user.* from user 
        left join login ON user.id = login.user_Id and login.type_Id = 3
            where login.id  is not NULL
                group by user.id
                    ; `;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Membership_Members = async (req, res) => {
  const sql = `                       
  select 
    user.*,
    (select MAX(membership.end) from membership where user.id = membership.user_Id limit 1) as finalDate
        from user
            left join login on user.id = login.user_Id
                where login.type_Id = 4;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

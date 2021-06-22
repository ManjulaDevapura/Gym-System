const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_CardMembers = async (req, res) => {
  const { id, type } = req.body;

  const sql = `select 
    user.*,
	(select name from user as u2 where u2.id = user.user_Id) as instructor
        from user 
            left join login on user.id = login.user_Id
                where user.id=${id};`;

  con(sql, (err, result) => {
    var dateObj = new Date(result[0].dob).toLocaleString();
    result[0].dob = dateObj.split(",", 1);
    // result[0].dob = result[0].dob.toISOString().split("T", 1)
    res.status(200).json(result);
  });
};

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Diet_ByMember = async (req, res) => {
  let member = req.body.member;
  const sql = `SELECT 
  diet.id,
  diet.breakfast,
  diet.lunch,
  diet.dinner,
  diet.description,
  diet.created,
  diet.user_Id,
  diet.instructor_Id,
  user.name,
  (select u1.name from user as u1 where u1.id = diet.instructor_Id) as ins_name
      FROM diet 
          left join user on user.id = diet.user_Id
            where diet.user_Id = ${member} AND diet.history = 0 
              ;`;

  con(sql, (err, result) => {
    if(result[0]){
      var dateObj = new Date(result[0].created).toLocaleString();
      result[0].created = dateObj.split(",", 1);
    }
    res.status(200).json(result);
  });
};

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Excercise_ByMember = async (req, res) => {
  let member = req.body.member;
  const sql = `SELECT 
  excercise.id,
  excercise.description,
  excercise.created,
  excercise.user_Id,
  excercise.instructor_Id,
  user.name,
  (select u1.name from user as u1 where u1.id = excercise.instructor_Id) as ins_name
      FROM excercise 
          left join user on user.id = excercise.user_Id
            where excercise.user_Id = ${member} AND excercise.history = 0 
              ;`;

  con(sql, (err, result) => {
    if(result[0]){
      var dateObj = new Date(result[0].created).toLocaleString();
      result[0].created = dateObj.split(",", 1);
    }
    res.status(200).json(result);
  });
};

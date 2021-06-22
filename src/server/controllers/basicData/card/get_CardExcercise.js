const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_CardExcercise = async (req, res) => {
  const { id } = req.body;
  const sql = `SELECT 
    excercise.id,
    excercise.description,
    excercise.created,
    excercise.user_Id,
    excercise.instructor_Id
        FROM excercise 
            where user_Id = ${id} ORDER BY created DESC LIMIT 1
                ;`;

  con(sql, (err, result) => {
    res.status(200).json(result[0]);
  });
};

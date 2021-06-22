var { con } = require("../../../database/config/transac");

exports.update_Excercise = (req, res, next) => {
  let member_id = req.body.member_id;
  let instructor_id = req.body.instructor_id;
  let description = req.body.description;
  

  let dateObj = new Date();
  let date_Var = ("0" + dateObj.getDate()).slice(-2);
  let month_Var = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let year_Var = dateObj.getFullYear();
  let hour = ("0" + dateObj.getHours()).slice(-2);
  let min = ("0" + dateObj.getMinutes()).slice(-2);
  let sec = ("0" + dateObj.getSeconds()).slice(-2);

  var full_Date =
    year_Var +
    "-" +
    month_Var +
    "-" +
    date_Var +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec;

  var sql = `UPDATE excercise SET history = 1 WHERE user_Id = ${member_id} ;`;

  con(sql, (err, result) => {
    // res.json("success");
    if (err !== "") {
      res.status(400).json(err.code);
    } else {
      var sql_body = `INSERT INTO excercise
        (user_Id , instructor_Id, description, created, history )
          VALUES 
            ('${member_id}', '${instructor_id}', '${description}', '${full_Date}', '0');`;

      con(sql_body, (err_body, result_body) => {
        if (err_body !== "") {
          res.status(400).json(err_body.code);
        } else {
          res.status(200).json("success");
        }
      });
    }
  });
};

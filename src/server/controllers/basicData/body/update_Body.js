var { con } = require("../../../database/config/transac");

exports.update_Body = (req, res, next) => {
  let body_Id = req.body.body_Id;
  let height = req.body.height;
  let weight = req.body.weight;
  let chest = req.body.chest;
  let hip = req.body.hip;
  let neck = req.body.neck;
  let waist = req.body.waist;
  let forearm = req.body.forearm;
  let calf = req.body.calf;
  let user_Id = req.body.user_Id;
  let instructor = req.body.instructor;

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

  var sql = `UPDATE body SET history = 1 WHERE user_Id = ${user_Id} ;`;

  con(sql, (err, result) => {
    // res.json("success");
    if (err !== "") {
      res.status(400).json(err.code);
    } else {
      var sql_body = `INSERT INTO body
        (height , weight , chest , hip , neck , waist , forearm , calf , created , history , user_Id , instructor_Id )
          VALUES 
            ('${height}', '${weight}', '${chest}', ${hip}, '${neck}', '${waist}', '${forearm}', 
                '${calf}', '${full_Date}', 0, ${user_Id}, ${instructor});`;

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

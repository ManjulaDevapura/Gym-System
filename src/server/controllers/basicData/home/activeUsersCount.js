const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.activeUsersCount = async (req, res) => {
  //   const { pages, page, sort, filtered, inst_Id } = req.body;

  let dateObj = new Date();
  let date_Var = ("0" + dateObj.getDate()).slice(-2);
  let month_Var = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let year_Var = dateObj.getFullYear();

  var full_Date = year_Var + "-" + month_Var + "-" + date_Var;
//   full_Date = "2019-12-29";
  const sql1 = `SELECT * FROM gym_management.attendence where created = '${full_Date}' group by created,user_Id ;`;

  const sql2 = `SELECT * FROM gym_management.user left join login on login.user_Id = user.id where login.type_Id = 4 and user.activity = 1;`;

  con(sql1, (err1, result1) => {
    if (err1 === "") {
      con(sql2, (err2, result2) => {
        if (err2 === "") {
          var result = {
            todayCount: result1.length,
            activeCount: result2.length,
          };
          res.status(200).json(result);
        } else {
          res.status(400).json();
        }
      });
    } else {
      res.status(400).json();
    }
  });
};

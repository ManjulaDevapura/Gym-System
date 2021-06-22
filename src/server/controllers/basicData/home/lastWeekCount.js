const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.lastWeekCount = async (req, res) => {
  // let dateObj = new Date("2020-01-03");
  let dateObj = new Date();
  dateObj = new Date(dateObj.setDate(dateObj.getDate() - 1)); // -1
  let date_Var = ("0" + dateObj.getDate()).slice(-2);
  let month_Var = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let year_Var = dateObj.getFullYear();
  var full_Date_Till = year_Var + "-" + month_Var + "-" + date_Var;

  dateObj = new Date(dateObj.setDate(dateObj.getDate() - 6)); // -1

  date_Var = ("0" + dateObj.getDate()).slice(-2);
  month_Var = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  year_Var = dateObj.getFullYear();
  var full_Date = year_Var + "-" + month_Var + "-" + date_Var;

  const sql = `SELECT count(created) as Count, created FROM gym_management.attendence where created >= '${full_Date}' && created <= '${full_Date_Till}' group by created order by created asc;`;

  con(sql, (err, result) => {
    if (err === "") {
      let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
        new Date().getDay()
      ];
      let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      // 1 wed
      if (result.length > 0) {
        for (var i = 0; i < 7; i++) {
          if(result[i]){
          var createdDate = new Date(result[i].created).toLocaleString();
          result[i].created = weekdays[new Date(createdDate).getDay()];
          }
          console.log(result[i]);
        }
      }

      res.status(200).json(result);
    } else {
      res.status(400).json();
    }
  });
};

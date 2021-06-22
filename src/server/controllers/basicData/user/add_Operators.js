var { con } = require("../../../database/config/transac");
var md5 = require("blueimp-md5");

exports.add_Operators = (req, res, next) => {
  let nic = req.body.nic;
  let name = req.body.name;
  let address = req.body.address;
  let city = req.body.city;
  let dob = req.body.dob;
  let sex = req.body.sex;
  let mob = req.body.mob;

  // 2020-06-10 17:17:17
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

  var sql_user = `INSERT INTO user (nic, name, address, email, dob, sex, created, activity, mobile )
          VALUES
  ('${nic}', '${name}', '${address}', '${city}', '${dob}', ${sex}, '${full_Date}', '1', ${mob});`;

  con(sql_user, (err_user, result_user) => {
    console.log(result_user);
    
    let user_Id = result_user;
    let password = md5(req.body.mob); //random value
    //and send it to user mobile no with pass and name

    var sql = `INSERT INTO login
              (username, password, created, user_Id, type_Id)
                VALUES ('${nic}', '${password}', '${full_Date}', ${user_Id}, 2);`;

    con(sql, (err, result) => {
          res.json("success");
    });
  });
};

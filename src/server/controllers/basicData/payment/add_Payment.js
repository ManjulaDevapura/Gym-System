var { con } = require("../../../database/config/transac");
var md5 = require("blueimp-md5");

exports.add_Payment = (req, res, next) => {
  let member = req.body.member;
  let packageId = req.body.packageId;
  let start = req.body.start;
  let end = req.body.end;
  let amount = req.body.package_amount;

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

  var sql = `INSERT INTO membership
               (user_Id, created, amount, start, end, package_Id)
                    VALUES ('${member}', '${full_Date}', '${amount}', '${start}', '${end}', '${packageId}');`;

  con(sql, (err, result) => {
    if (err === "") {
      res.status(200).json("success");
    }
  });
};

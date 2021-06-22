var { con } = require("../../../database/config/transac");

exports.add_Salary = (req, res, next) => {
  let basic = req.body.basic;
  let allowance = req.body.allowance;
  let deduction = req.body.deduction;
  let total = req.body.total;
  let user = req.body.user;
  let loged = req.body.loged;

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

  var sql = `INSERT INTO salary
              (basic,
              allowance,
              deduction,
              total,
              created,
              user_Id,
              paidBy)
                VALUES (
                    
                    '${basic}',
                    '${allowance}',
                    '${deduction}',
                    '${total}',
                    '${full_Date}',
                    '${user}',
                    '${loged}'
                    );`;

  con(sql, (err, result) => {
    res.json("success");
  });
};

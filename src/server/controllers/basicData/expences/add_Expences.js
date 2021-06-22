var { con } = require("../../../database/config/transac");

exports.add_Expences = (req, res, next) => {
  let logedId = req.body.logedId;
  let User_Id = req.body.User_Id;
  let reason = req.body.reason;
  let qty = req.body.qty;
  let value = req.body.value;

  
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

  var sql = `INSERT INTO expences
              (created,
              value,
              payType_Id,
              log_Id,
              toUser_Id,
              qty)
                VALUES (
                    
                    '${full_Date}',
                    '${value}',
                    '${reason}',
                    '${logedId}',
                    '${User_Id}',
                    '${qty}'
                    );`;

  con(sql, (err, result) => {
    res.json("success");
  });
};

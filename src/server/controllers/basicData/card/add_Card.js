const _ = require("lodash");
var { con } = require("../../../database/config/transac");
var cons = require("../../../database/config/connection");

exports.add_Card = async (req, res) => {
  let Card_Id = req.body.Card_Id;
  let User_Id = req.body.User_Id;

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
    
  const sqlGet = `  UPDATE card SET status = 0 WHERE id = ${User_Id};`;
  const sql = `  INSERT INTO card (card_Id, user_Id, created) VALUES (${Card_Id}, ${User_Id}, '${full_Date}') ;`;

  cons.con(sqlGet, (errGet, resultGet) => {
    if (resultGet != null) {
      con(sql, (err, result) => {
        if (result != null) {
          res.status(200).json(result);
        } else {
          res.status(400);
        }
      });
    } else {
      res.status(400);
    }
  });
};

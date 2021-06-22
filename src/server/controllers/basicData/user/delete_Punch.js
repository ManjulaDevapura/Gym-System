var { con } = require("../../../database/config/transac");

exports.delete_Punch = (req, res, next) => {
  let userId = req.body.userId;

  var sqlUp = `UPDATE user SET activity = 0 WHERE id = ${userId} ;`;
  con(sqlUp, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });

  // var sql = `DELETE FROM user WHERE user_Id = ${userId};`;
  // con(sql, (err, result) => {
  //   if (err !== "") {
  //     res.status(400).json(err.code);
  //   } else {
  //     res.status(400).json("success");
  //   }
  // });
};

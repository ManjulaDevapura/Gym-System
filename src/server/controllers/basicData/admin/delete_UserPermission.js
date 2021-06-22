var { con } = require("../../../database/config/transac");

exports.delete_UserPermission = (req, res, next) => {
  let userId = req.body.userId;

  var sql = `DELETE FROM login WHERE user_Id = ${userId};`;

  con(sql, (err, result) => {
    if (err !== "") {
      res.status(400).json(err.code);
    } else {
      
      var sqlUp = `UPDATE user SET activity = 0 WHERE id = ${userId} ;`;
      con(sqlUp, (errUp, resultUp) => {
        if (errUp !== "") {
          res.status(400).json(errUp.code);
        } else {
          
          res.json("success");
        }
      });
    }
  });
};

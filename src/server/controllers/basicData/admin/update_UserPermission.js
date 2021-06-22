var { con } = require("../../../database/config/transac");

exports.update_UserPermission = (req, res, next) => {
  let userId = req.body.userId;
  let act = req.body.act;
  

  var sql = `UPDATE user SET 
                activity = ${act}
                    WHERE id = ${userId} ;`;

  con(sql, (err, result) => {
    
    res.json("success");
  });
};

var { con } = require("../../../database/config/transac");

exports.update_Message = (req, res, next) => {
  let id = req.body.id;

  var sqlUp = `UPDATE messages SET status = 1 WHERE id = ${id} ;`;
  con(sqlUp, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });

};

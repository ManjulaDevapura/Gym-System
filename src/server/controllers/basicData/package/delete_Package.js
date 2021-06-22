var { con } = require("../../../database/config/transac");

exports.delete_Package = (req, res, next) => {
  let id = req.body.id;

  var sqlUp = `UPDATE package SET expired = 1 WHERE id = ${id} ;`;
  con(sqlUp, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });

};

var { con } = require("../../../database/config/transac");

exports.update_Package = (req, res, next) => {
  let id = req.body.id;
  let type = req.body.type;

  var sqlUp = `UPDATE package SET expired = 0, type = '${type}' WHERE id = ${id} ;`;
  con(sqlUp, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });

};

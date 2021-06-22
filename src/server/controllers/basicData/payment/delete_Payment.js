var { con } = require("../../../database/config/transac");

exports.delete_Payment = (req, res, next) => {
  let id = req.body.id;

  var sqlUp = `Delete from membership WHERE id = ${id};`;
  con(sqlUp, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });

};

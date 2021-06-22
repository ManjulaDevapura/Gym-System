var { con } = require("../../../database/config/transac");

exports.update_Equipment = (req, res, next) => {
  let id = req.body.id;
  let name = req.body.name;
  let value = req.body.amount;
  let description = req.body.description;

  var sqlUp = `UPDATE equipment SET name = '${name}', value = '${value}', description = '${description}' WHERE id = ${id} ;`;

  con(sqlUp, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });

};

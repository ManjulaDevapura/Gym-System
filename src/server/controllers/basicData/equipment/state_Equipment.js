var { con } = require("../../../database/config/transac");

exports.state_Equipment = (req, res, next) => {
  let id = req.body.id;
  let act = req.body.act;

  var sql = `UPDATE equipment SET 
                status = ${act}
                    WHERE id = ${id} ;`;
                    
  con(sql, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });

};

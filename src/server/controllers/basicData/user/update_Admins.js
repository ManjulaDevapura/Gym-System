var { con } = require("../../../database/config/transac");

exports.update_Admins = (req, res, next) => {
  let userId = req.body.id;
  let nic = req.body.nic;
  let name = req.body.name;
  let address = req.body.address;
  let city = req.body.city;
  let dob = req.body.dob;
  let sex = req.body.sex;
  let mob = req.body.mob;
    
  var sql = `UPDATE user SET 
                nic ='${nic}', 
                name = '${name}', 
                address = '${address}', 
                email = '${city}', 
                dob = '${dob}', 
                sex = ${sex},
                mobile = ${mob}
                    WHERE id = ${userId} ;`;

  con(sql, (err, result) => {
    res.json("success");
  });
};

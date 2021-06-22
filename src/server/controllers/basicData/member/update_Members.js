var { con } = require("../../../database/config/transac");

exports.update_Members = (req, res, next) => {
  let userId = req.body.id;
  let nic = req.body.nic;
  let name = req.body.name;
  let address = req.body.address;
  let city = req.body.city;
  let dob = req.body.dob;
  let sex = req.body.sex;
  let mob = req.body.mob;
  let instructor = req.body.instructor;
    
  let dateObj = new Date();
  let date_Var = ("0" + dateObj.getDate()).slice(-2);
  let month_Var = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let year_Var = dateObj.getFullYear();
  let hour = ("0" + dateObj.getHours()).slice(-2);
  let min = ("0" + dateObj.getMinutes()).slice(-2);
  let sec = ("0" + dateObj.getSeconds()).slice(-2);

  var full_Date =
    year_Var +
    "-" +
    month_Var +
    "-" +
    date_Var +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec;

  var sql = `UPDATE user SET 
                nic ='${nic}', 
                name = '${name}', 
                address = '${address}', 
                email = '${city}', 
                dob = '${dob}', 
                sex = ${sex},
                mobile = ${mob},
                modified = '${full_Date}', 
                user_Id = ${instructor}
                    WHERE id = ${userId} ;`;

  con(sql, (err, result) => {
    res.json("success");
  });
};

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_CardBody = async (req, res) => {
  var { id } = req.body;
//  id=24;
  const sql_old = `SELECT * FROM gym_management.body WHERE user_Id = ${id} ORDER BY created ASC LIMIT 1 ;`;
  const sql_new = `SELECT * FROM gym_management.body WHERE user_Id = ${id} ORDER BY created DESC LIMIT 1 ;`;
 
  con(sql_old, (err_old, result_old) => {
    const resA = result_old
    if (result_old.length!==0) {
      // if (result_old!=='' && result_old!==null && result_old!==undefined) {
        result_old=result_old[0]
      con(sql_new, (err_new, result_new) => {
        result_new=result_new[0]
        // console.log('\n\n\n\n\n\n\t')
        // console.log(resA)
        // console.log(result_old)
        var bodyObj = [
            { name: 'height', old: result_old.height, new: result_new.height },
            { name: 'weight', old: result_old.weight, new: result_new.weight },
            { name: 'chest', old: result_old.chest, new: result_new.chest },
            { name: 'hip', old: result_old.hip, new: result_new.hip },
            { name: 'neck', old: result_old.neck, new: result_new.neck },
            { name: 'waist', old: result_old.waist, new: result_new.waist },
            { name: 'forearm', old: result_old.forearm, new: result_new.forearm },
            { name: 'calf', old: result_old.calf, new: result_new.calf },
          ];
          res.status(200).json(bodyObj);
      });
    }else{
        var bodyObj = [
            { name: 'height', old: 0, new: 0 },
            { name: 'weight', old: 0, new: 0 },
            { name: 'chest', old: 0, new: 0 },
            { name: 'hip', old: 0, new: 0 },
            { name: 'neck', old: 0, new: 0 },
            { name: 'waist', old: 0, new: 0 },
            { name: 'forearm', old: 0, new: 0 },
            { name: 'calf', old: 0, new: 0 },
          ];
          res.status(200).json(bodyObj);
    }
  });
};


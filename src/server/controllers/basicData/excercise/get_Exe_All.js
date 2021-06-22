const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Exe_All = async (req, res) => {
  const sql = `SELECT 
    excercise.*
        FROM excercise 
            order by id desc
                ;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Diet_All = async (req, res) => {
  const sql = `SELECT 
    diet.*
        FROM diet 
            order by id desc
                ;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

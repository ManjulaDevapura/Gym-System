const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Membership_Packages = async (req, res) => {
  const sql = `                       
SELECT 
    package.* 
        FROM 
            package
                where expired = 0
    ;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

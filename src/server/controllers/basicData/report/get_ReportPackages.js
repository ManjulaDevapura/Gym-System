const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_ReportPackages = async (req, res) => {
  const sql = `select 
                    package.*
                        from package ;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

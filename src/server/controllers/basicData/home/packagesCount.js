const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.packagesCount = async (req, res) => {
  //   const { pages, page, sort, filtered, inst_Id } = req.body;

  const sql = `SELECT * FROM gym_management.package where expired = 0;`;

  con(sql, (err, result) => {
    if (err === "") {
      result = { packages: result.length };
      res.status(200).json(result);
    } else {
      res.status(400).json();
    }
  });
};

const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.packageWiseCount = async (req, res) => {
  const sql = `SELECT package.name, (SELECT count(id) FROM membership where membership.package_Id=package.id) as countValue FROM package;`;

  con(sql, (err, result) => {
    if (err === "") {
      res.status(200).json(result);
    } else {
      res.status(400).json();
    }
  });
};

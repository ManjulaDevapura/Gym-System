const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Members_Card = async (req, res) => {
  const sql = `                       
  SELECT * FROM gym_management.user where activity = 1
    ;`;

  con(sql, (err, result) => {
    if (result != null) {
      res.status(200).json(result);
    } else {
      res.status(400);
    }
  });
};

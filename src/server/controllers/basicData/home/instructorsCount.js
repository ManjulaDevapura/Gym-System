const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.instructorsCount = async (req, res) => {
  //   const { pages, page, sort, filtered, inst_Id } = req.body;

  const sql = `SELECT * FROM gym_management.user left join login on login.user_Id = user.id where login.type_Id = 3 and user.activity = 1;`;

                    
  con(sql, (err, result) => {
    if (err === "") {
      result = { instructors: result.length };
      res.status(200).json(result);
    } else {
      res.status(400).json();
    }
  });
};

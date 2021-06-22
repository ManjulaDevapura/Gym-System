const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_CardDiet = async (req, res) => {
  const { id } = req.body;

  const sql = `select *
        from diet 
            where diet.user_Id=${id} AND history=0;`;

  con(sql, (err, result) => {
    res.status(200).json(result);
  });
};

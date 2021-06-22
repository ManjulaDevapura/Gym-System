const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_MsgCount = async (req, res) => {
  const { user_Id } = req.body;

  const sql = `SELECT 
                	COUNT(messages.id) as count                	
                		FROM gym_management.messages
                left join user 
                    on user.id = messages.user_Id
                        where inst_Id = ${user_Id} AND status = 0
                    ;`;
                    
  con(sql, (err, result) => {
    res.status(200).json(result[0].count);
  });
};

/**
 * ******************************************************************
 * @file This file defines for check DB for ever Day
 * @author Manjula Devapura
 * ******************************************************************
 */
 const CronJob = require("cron").CronJob;
 var nodemailer = require("nodemailer");
 
 var { con } = require("../database/config/connection");
 var conGet = require("../database/config/transac");
 
 
 var Activate = new CronJob(
   "00 04 * * *",
   function () {
     console.log(
       `\x1b[37;1m***********************************************************************`
     );
     console.log(
       `\x1b[32mCRON JOB :\x1b[31m[${new Date().toString()}] \x1b[0m Activation Job start...!`
     );
    do_Activation();
    
   },
   null,
   true,
   "Asia/Colombo"
 );
 
 do_Activation = () => {
   
  let dateObj = new Date();
  dateObj.setDate("25");
  dateObj.setMonth(parseInt(dateObj.getMonth()) - 1);
  const today = dateObj.toLocaleDateString().split("/");
  const finalDate = today[2] + "-" + today[0] + "-" + today[1];

  const sqlDelete = `DELETE FROM duepayments where id > 0;`;
  conGet.con(sqlDelete, async(errDelete, resultDelete) => {
    const sqlGet = `SELECT count(*) as count, user_Id FROM salary where created='${finalDate}' ;`;
    await con(sqlGet, async (errGet, resultGet) => {
      const sql = `SELECT user.* FROM user 
                    left join login on user.id = login.user_Id 
                        where login.type_Id = 1 OR login.type_Id = 4 AND user.activity = 1;`;

      con(sql, async (err, result) => {
        for (var i = 0; i < result.length; i++) {
          await handler(result[i], i, resultGet, finalDate);
        }
      });
    });
  });
 };
 
 module.exports = Activate;
 
async function handler(user, index, resultGet, finalDate) {
  console.log(
    "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%" +
    index
  );
  console.log(user.id);
  var count = 0;
  for (var i = 0; i < resultGet.length; i++) {
    if (parseInt(resultGet[i].user_Id) === parseInt(user.id)) {
      count++;
      i = resultGet.length
    }
  }
  if (parseInt(count) === 0) {
    const sqlAdd = `INSERT INTO duepayments (user_Id, reason) VALUES (${user.id},'Pay the Salary to user for ${finalDate}');`;
    await conGet.con(sqlAdd, (errAdd, resultAdd) => { });
  }
}

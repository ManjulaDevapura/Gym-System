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
  const sql = `SELECT user.* FROM user 
  left join login on user.id = login.user_Id 
where login.type_Id = 4 AND activity = 1;`;

  con(sql, (err, result) => {
    for (var i = 0; i < result.length; i++) {
      handler(result[i], i);
    }
  });
};

module.exports = Activate;

async function handler(user, index) {
  let dateObj = new Date();
  const today = dateObj.toISOString().split("T", 1)[0];

  const sqlGet = `SELECT count(*) as count, user_Id
    FROM membership 
    where start<='${today}' AND end>='${today}' AND user_Id=${user.id};`;

  await con(sqlGet, (errGet, resultGet) => {
    if (parseInt(resultGet[0].count) > 0) {
      const sqlChange = `UPDATE user SET 
                               activity = 1
                                      WHERE id = ${user.id} ;`;
      remindPayment(resultGet[0].user_Id, today, user.email);
      conGet.con(sqlChange, (errChange, resultChange) => {});
    } else {
      emailSender(user.email);
      const sqlChange = `UPDATE user SET 
                              activity = 0
                                  WHERE id = ${user.id} ;`;
      conGet.con(sqlChange, (errChange, resultChange) => {});
    }
    return true;
  });
}

async function emailSender(emailID) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  let info = await transporter.sendMail({
    from: '"Fitness Center 👻" <manworldlove@example.com>',
    to: emailID,
    subject: "Fitness Center Alert ✔",
    text: "Please renew your membership",
  });

  console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

async function remindPayment(user_Id, today, emailID) {
  const sqlGet = `SELECT *
    FROM membership 
    where start<='${today}' AND end>='${today}' AND user_Id=${user_Id};`;

  await con(sqlGet, (errGet, resultGet) => {
    if (parseInt(resultGet.length) > 0) {
      var dateObj = new Date(resultGet[0].end).toLocaleString();
      const endDate = dateObj.split(",", 1)[0];

      var dateObj_today = new Date(today).toLocaleString();
      const Date_today = dateObj_today.split(",", 1)[0];

      let date_Var =
        parseInt(endDate.split("/", 3)[1]) -
        parseInt(Date_today.split("/", 3)[1]);
      let month_Var =
        parseInt(endDate.split("/", 3)[0]) -
        parseInt(Date_today.split("/", 3)[0]);
      let year_Var =
        parseInt(endDate.split("/", 3)[2]) -
        parseInt(Date_today.split("/", 3)[2]);

      if (year_Var * 365 + month_Var * 30 + date_Var < 7) {
        emailSender(emailID);
      }
    }
  });
}

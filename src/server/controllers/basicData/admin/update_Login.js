var { con } = require("../../../database/config/transac");
var conGet = require("../../../database/config/connection");
var md5 = require("blueimp-md5");

exports.update_Login = (req, res, next) => {
  let login_Id = req.body.login_Id;
  let userType_Id = req.body.userType_Id;
  let userName = req.body.userName;
  let password = "";

  let getPass = req.body.password.toString().trim();
  if (getPass !== "") {
    password = "password = '" + md5(req.body.password) + "',";
  } else {
    password = "";
  }

  // 2020-06-10 17:17:17
  let dateObj = new Date();
  let date_Var = ("0" + dateObj.getDate()).slice(-2);
  let month_Var = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  let year_Var = dateObj.getFullYear();
  let hour = ("0" + dateObj.getHours()).slice(-2);
  let min = ("0" + dateObj.getMinutes()).slice(-2);
  let sec = ("0" + dateObj.getSeconds()).slice(-2);

  var full_Date =
    year_Var +
    "-" +
    month_Var +
    "-" +
    date_Var +
    " " +
    hour +
    ":" +
    min +
    ":" +
    sec;

  var sql = `UPDATE login SET 
                username = '${userName}', ${password} modified = "${full_Date}", type_Id = ${userType_Id}
                    WHERE id = ${login_Id} ;`;

  con(sql, (err, result) => {
    const sqlGetId = `select user_Id from login where id = ${login_Id};`;
    conGet.con(sqlGetId, async (errGetId, resultGetId) => {
      const user_Id = resultGetId[0].user_Id;

      const sqlGet = `select email from user where user.id = ${user_Id};`;
      conGet.con(sqlGet, async (errGet, resultGet) => {
        console.log(
          "*********************************************************************"
        );

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
          to: resultGet[0].email,
          subject: "Fitness Center Login Updated ✔",
          text:
            "Your updated new username is " +
            userName +
            " & updated new password is " +
            plainPass,
          html: "<b>Fitness Center Login ✔ ?</b>",
        });

        console.log("Message sent: %s", info.messageId);

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
    });
    res.json("success");
  });
};

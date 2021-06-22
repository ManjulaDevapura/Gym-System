var { con } = require("../../../database/config/transac");
var conGet = require("../../../database/config/connection");
var md5 = require("blueimp-md5");
var nodemailer = require("nodemailer");

exports.add_UserPermission = (req, res, next) => {
  let user_Id = req.body.user_Id;
  let userType_Id = req.body.userType_Id;
  let userName = req.body.userName;
  let password = md5(req.body.password);
  let plainPass = req.body.password;

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

  var sql = `INSERT INTO login
              (username, password, created, user_Id, type_Id)
                VALUES ('${userName}', '${password}', '${full_Date}', ${user_Id}, ${userType_Id});`;

  

  con(sql, (err, result) => {
    var sqlUp = `UPDATE user SET activity = 1 WHERE id = ${user_Id} ;`;
    con(sqlUp, (errUp, resultUp) => {
      const sqlGet = `select email from user where user.id = ${user_Id};`;
      conGet.con(sqlGet, async (errGet, resultGet) => {

        // var transporter = nodemailer.createTransport({
        //   service: "gmail",
        //   auth: {
        //     user: "manworldlove@gmail.com",
        //     pass: "",
        //   },
        // });
        // var mailOptions = {
        //   from: "manworldlove@gmail.com",
        //   to: resultGet[0] ? resultGet[0].email : "manworldlove@gmail.com",
        //   subject: "Fitness Center Login",
        //   text:
        //     "Your new username is " +
        //     userName +
        //     " & new password is " +
        //     plainPass,
        // };
        // transporter.sendMail(mailOptions, function (error, info) {
        //   if (error) {
        //     console.log(error);
        //   } else {
        //     console.log("Email sent: " + info.response);
        //   }
        // });

        console.log('*********************************************************************')
        // console.log(resultGet[0])
        // console.log(resultGet[0].email)


// Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fitness Center 👻" <manworldlove@example.com>', // sender address
    to: resultGet[0].email, // list of receivers
    subject: "Fitness Center Login ✔", // Subject line
    text:
        "Your new username is " +
        userName +
        " & new password is " +
        plainPass, // plain text body
    html: "<b>Fitness Center Login ✔ ?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...



        // res.status(200).json(result);
      });
      res.json("success");
    });
  });
};

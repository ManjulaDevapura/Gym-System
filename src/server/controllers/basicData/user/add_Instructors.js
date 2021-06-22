var { con } = require("../../../database/config/transac");
var conGet = require("../../../database/config/connection");
var md5 = require("blueimp-md5");

exports.add_Instructors = (req, res, next) => {
  let nic = req.body.nic;
  let name = req.body.name;
  let address = req.body.address;
  let city = req.body.city;
  let dob = req.body.dob;
  let sex = req.body.sex;
  let mob = req.body.mob;
  let sal = req.body.sal;

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

  var sql_user = `INSERT INTO user (nic, name, address, email, dob, sex, created, activity, mobile, salary )
          VALUES
  ('${nic}', '${name}', '${address}', '${city}', '${dob}', ${sex}, '${full_Date}', '1', ${mob}, ${sal});`;

  con(sql_user, (err_user, result_user) => {
    console.log(result_user);
    
    let user_Id = result_user;
    let password = md5(req.body.mob); //random value
    //and send it to user mobile no with pass and name

    var sql = `INSERT INTO login
              (username, password, created, user_Id, type_Id)
                VALUES ('${nic}', '${password}', '${full_Date}', ${user_Id}, 3);`;

    con(sql, (err, result) => {
      
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
        subject: "Fitness Center Login ✔",
        text:
          "Your new username is " +
          userName +
          " & new password is " +
          plainPass,
        html: "<b>Fitness Center Login ✔ ?</b>",
      });

      console.log("Message sent: %s", info.messageId);

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
          res.json("success");
    });
  });
};

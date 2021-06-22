var { con } = require("../../../database/config/transac");
var conGet = require("../../../database/config/connection");
var md5 = require("blueimp-md5");
var nodemailer = require("nodemailer");
var Messenger = require("../../../messenger/messenger");

exports.add_Members = (req, res, next) => {
  let nic = req.body.nic;
  let name = req.body.name;
  let address = req.body.address;
  let city = req.body.city;
  let dob = req.body.dob;
  let sex = req.body.sex;
  let mob = req.body.mob;
  let instructor = req.body.instructor;
  let instructor_mob = req.body.instructor_mob;

  let height = req.body.height;
  let weight = req.body.weight;
  let chest = req.body.chest;
  let hip = req.body.hip;
  let neck = req.body.neck;
  let waist = req.body.waist;
  let forearm = req.body.forearm;
  let calf = req.body.calf;

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

  var description =
    ` New Member allocated to you ` +
    nic +
    ` - ` +
    name +
    ` at ` +
    full_Date +
    `. 
    Please add Excersice schedule and Diet Plan to this member `;

  var sql_user = `INSERT INTO user (nic, name, address, email, dob, sex, created, activity, mobile, user_Id )
          VALUES
  ('${nic}', '${name}', '${address}', '${city}', '${dob}', ${sex}, '${full_Date}', '1', ${mob}, ${instructor});`;

  con(sql_user, (err_user, result_user) => {
    // console.log(result_user);

    let user_Id = result_user;
    let password = md5(req.body.mob); //random value
    //and send it to user mobile no with pass and name
    if (err_user !== "") {
      res.status(400).json(err_user.code);
    } else {
      var sql = `INSERT INTO login
              (username, password, created, user_Id, type_Id)
                VALUES ('${nic}', '${password}', '${full_Date}', ${user_Id}, 4);`;

      con(sql, (err, result) => {
        // res.json("success");
        if (err !== "") {
          res.status(400).json(err.code);
        } else {
          var sql_body = `INSERT INTO body
        (height , weight , chest , hip , neck , waist , forearm , calf , created , history , user_Id , instructor_Id )
          VALUES 
            ('${height}', '${weight}', '${chest}', ${hip}, '${neck}', '${waist}', '${forearm}', 
                '${calf}', '${full_Date}', 0, ${user_Id}, ${instructor});`;

          con(sql_body, (err_body, result_body) => {
            if (err_body !== "") {
              res.status(400).json(err_body.code);
            } else {
              var sql_message = ` INSERT INTO messages
            (
            description,
            subject,
            user_Id,
            status,
            created,
            type,
            inst_Id)
            VALUES
            (
            '${description}',
            'New Member',
            '${user_Id}',
            '0',
            '${full_Date}',
            '1',
            '${instructor}'
            );`;

              con(sql_message, (err_message, result_message) => {
                
    const sqlGet = `select email from user where user.id = ${user_Id};`;
    const userName = nic;
    const plainPass = mob;
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
                Messenger(instructor_mob, description);
              });
            }
          });
        }
      });
    }
  });
};

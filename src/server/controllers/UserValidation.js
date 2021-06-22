var { con } = require('../database/config/connection');
var md5 = require('blueimp-md5');
var jwt = require('jsonwebtoken');


exports.validate = async (req, res, next) => {
    console.log("-------------------------------")
    console.log(req.body.userName)
    console.log(req.body.password)
    const { userName, password } = req.body;
    // console.log(userName + " " + password);
    var fromLoginPass = password 

    // user password encrypted
    fromLoginPass = md5(password);
    console.log(fromLoginPass);


    // login.*,
    var sql = `select

login.id as login_Id,
login.username,
login.password,
login.created,
login.modified,
login.user_Id,
login.type_Id,

user.id as user_Id_Key, 
user.nic, 
user.name, 
user.address, 
user.email, 
user.dob, 
user.sex, 
user.created, 
user.activity, 
user.mobile, 
user.modified,
usertype.*
 from login 
	                left join user on user.id = login.user_Id
                    left join usertype on usertype.id = login.type_Id
                where username='${userName}' and activity = 1;`;
    var validation = '';

    con(sql, (err, result) => {
        if (err !== '') {
            validation = { error: err.code }
            res.status(400).json(validation);
        } else if (result.length === 0) {
            validation = { isLoggedIn: false, error: 'invalid user name or password' }
            console.log(validation);
            res.json(validation);
        } else {
            var id = result[0].user_Id_Key;
            var login_name = result[0].username;
            var login_password = result[0].password;
            var user_Id = result[0].user_Id;
            var type_Id = result[0].type_Id;
            var type = result[0].type;
            var name = result[0].name;


            console.log( '=================================================== ');
            console.log(login_name + ' ' + login_password);
            console.log(userName + ' ' + fromLoginPass);


            if (userName == login_name && fromLoginPass === login_password) {
                //  user name and password are correct
                const user = {
                    login_name: login_name,
                }
                // console.log(login_name);

                validation = {
                    isLoggedIn: true,
                    name: name,
                    userName: login_name,
                    token: "token",
                    error: null
                }
                // res.json(validation);
                // ManjulaDevapura
                jwt.sign({ user }, 'zp', (err, token) => {
                    if (err) validation = { error: err }
                    console.log(token);
                    console.log(validation);
                    validation = {
                         isLoggedIn: true,
                         id : id,
                         login_name : login_name,
                         login_password : login_password,
                         user_Id : user_Id,
                         type_Id : type_Id,
                         type : type,
                         name : name,
                         token: token,
                         error: null
                    }
                    console.log(validation);
                    console.log('Correct   user name & password');
                    res.json(validation);
                })

            } else if (userName !== login_name && fromLoginPass !== login_password) {
                // wrong user name and password
                validation = { isLoggedIn: false, error: 'invalid user name & password' }
                console.log(validation);
                res.json(validation);

            } else if (fromLoginPass !== login_password) {
                // wrong password
                validation = { isLoggedIn: false, error: 'invalid password' }
                console.log(validation);
                res.json(validation);

            } else {
                // wrong user name
                validation = { isLoggedIn: false, error: 'invalid user name' }
                console.log(validation);
                res.json(validation);

            }
        }
    });
}


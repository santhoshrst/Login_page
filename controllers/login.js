const db = require('../db/db');
const pool = db.db_host;

exports.login=async function(req,res,next) {
    var qery_list = await pool.query('select * from user_login where username = "'+req.body.user_name+'" AND password = "'+req.body.password+'"')

    if(qery_list != undefined && qery_list != null != ''){
        if(qery_list[0].length > 0 ){
            res.send({"status":1,value:"Login Successfully"});
        }else{
            res.send({"status":0,message:"Username Or Passwords Incorrect"});
        }
    }else{
        res.send({"status":0,message:"Username Or Passwords Incorrt"});
    }
};

exports.create_login=async function(req,res,next) {
    var qery_list = await pool.query('select * from user_login where username = "'+req.body.user_name+'" ')

    if(qery_list != undefined && qery_list != null != ''){
        if(qery_list[0].length <= 0 ){
            await pool.query('insert into user_login (username,password) values ("'+req.body.user_name+'", "'+req.body.password+'")')
            res.send({"status":1,value:"Username Or Passwords Created Successfully"});
        }else{
            res.send({"status":0,message:"Username Already Exist"});
        }
    }else{
        res.send({"status":0,message:"Api issues"});
    }
};
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'rst12042003',
    database:'users'
  });

  module.exports={
    db_host:pool
  };
const mysql = require('mysql2/promise');
const express = require('express');
const cors = require('cors');
const app = express();
var indexRouter = require('./routes/index')
app.use(cors());
app.use(express.json());

app.use('/', indexRouter);

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:8080'
}));

const pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'rst12042003',
  database:'users'
});

app.listen(7221, () => {
  console.log(`Server is running on port 7221`);
});

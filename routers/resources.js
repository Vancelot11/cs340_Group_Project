require('dotenv').config()

const express = require('express');
const router = express.Router();

const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host		:	process.env.MYSQL_HOST,
	database	:	process.env.MYSQL_DB,
	user		:	process.env.MYSQL_USER,
	password	:	process.env.MYSQL_PASS,
});

connection.connect( (err) => {
	if(err) {
		console.error(">>>Error connection: ", err.stack);
		return;
	}
	console.log("connected as id ", connection.threadId);
});

router.post("/user/:fname/:lname/:pass/:userName", (req, res) => {
	const user = {
		fname		:	req.params.fname,
		lname		:	req.params.lname,
		pass		:	req.params.pass,
		userName	:	req.params.userName
	}
	connection.query('INSERT INTO User SET ?', user, (err, res, fields) => {
		if(err) throw err;
		console.log('>>>RESULT: ', res);
		ret = res;
	});
});

module.exports = router;

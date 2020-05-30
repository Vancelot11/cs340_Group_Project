require("dotenv").config()

const express = require("express");
const router = express.Router();

const path = require("path");
const mysql = require("mysql");

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

/* GET home page. */
/*Testing
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});
*/
router.get("/", (req, res) => {
	new Promise((resolve, reject) => {
		connection.query("SELECT * FROM Restaurant", (err, res, fields) => {
			if(err) {
				reject(new Error(err.code));
			}
			else {
				resolve(res);
			}
		});
	}).then(r => {
		console.log(">>>Result: ", r);
		res.status(200).json(r);
	}).catch(err => {
		console.log(">>>Err: ", err.message);
		res.status(400).end();
	});
});

router.get("/User/:userName", (req, res) => {
	new Promise((resolve, reject) => {
		connection.query("SELECT * FROM User WHERE userName = ?", [req.params.userName], (err, res, fields) => {
			if(err) {
				reject(new Error(err.code));
			}
			else {
				if(res.length === 0) {
					reject(new Error("User not found"))
				}
				else {
					resolve(res);
				}
			}
		});
	}).then(r => {
		console.log(">>>TYPE: ", typeof(r))
		res.json(r);
	}).catch(err => {
		console.log(">>>ERR: ", err.message);
		res.status(500).json(err.message);
	});
});


router.post("/User/:fname/:lname/:pass/:userName", (req, res) => {
	const user = {
		fname		:	req.params.fname,
		lname		:	req.params.lname,
		pass		:	req.params.pass,
		userName	:	req.params.userName
	}
	new Promise((resolve, reject) => {
		connection.query("INSERT INTO User SET ?", user, (err, res, fields) => {
			if(err) {
				reject(new Error(err.code));
			}
			else {
				resolve(res.affectedRows);
			}
		});
	}).then(r => {
		console.log(">>>User affected rows: ", r);
		res.status(200).end();
	}).catch(err => {
		console.log(">>>Err: ", err.message);
		res.status(500).end();
	});
});

router.post("Restaurant/:name/:openDate"), (req, res) => {
	const rest = {
		name		:	req.params.name,
		openDate	:	req.params.opendate
	}
	new Promise((resolve, reject) => {
		connection.query("INSERT INTO Restaurant SET ?", rest, (err, res, fields) => {
			if(err) {
				reject(new Error(err.code));
			}
			else {
				resolve(res.affectedRows);
			}
		});
	}).then(r => {
		console.log(">>>Restaurant affected rows: ", r);
		res.status(200).end();
	}).catch(err => {
		console.log(">>>Err: ", err.message);
		res.status(500).end();
	});
}


module.exports = router;

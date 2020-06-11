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

router.get("/", (req, res) => {
	new Promise((resolve, reject) => {
		connection.query("SELECT r.rid, r.name, r.image, rt.att, rh.start, rh.stop FROM Restaurant r LEFT JOIN Restaurant_hours rh ON r.rid = rh.rid LEFT JOIN Restaurant_type rt ON r.rid = rt.rid", (err, res, fields) => {
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
		res.status(400).json("oh noooo");
	});
});

router.get("/:table/:key/:val", (req, res) => {
	new Promise((resolve, reject) => {
		const sql = "SELECT * FROM " + connection.escapeId(req.params.table) + " WHERE " + connection.escapeId(req.params.key) + " = " + connection.escape(req.params.val);
		connection.query(sql, (err, res, fields) => {
			if(err) {
				console.log(">>>SQL: ", err.sql);
				reject(new Error(err.code));
			}
			else {
				resolve(res);
			}
		});
	}).then(r => {
		console.log(">>>Result: ", r)
		res.status(200).json(r);
	}).catch(err => {
		console.log(">>>Err: ", err.message);
		res.status(400).json(err.message);
	});
});

router.get("/Restaurant/:key/", (req, res) => {
	new Promise((resolve, reject) => {
		const sql = `
		SELECT r.name, r.image, r.openDate, r.description, r.owner, ra.num, ra.street, ra.city, ra.state, ra.zip, rt.att, rh.days, rh.start, rh.stop
		FROM Restaurant r
		LEFT JOIN Restaurant_address ra ON ra.rid = r.rid
		LEFT JOIN Restaurant_type rt ON rt.rid = r.rid
		LEFT JOIN Restaurant_hours rh ON rh.rid = r.rid
		WHERE r.rid = ?;
		`
		connection.query(sql, req.params.key, (err, res, fields) => {
			if(err) {
				console.log(">>>SQL: ", err.sql);
				reject(new Error(err.code));
			}
			else {
				resolve(res);
			}
		});
	}).then(r => {
		console.log(">>>Result: ", r);
		res.status(200).json(r[0]);
	}).catch(err => {
		console.log(">>>Err: ", err.message);
		res.status(400).json(err.message);
	});
});


router.post("/insert/:table/", (req, res) => {
	const p = req.body;

	console.log(">>> PARAMS: ", [req.params.table, p]);
	new Promise((resolve, reject) => {
		connection.query("INSERT INTO ?? SET ?", [req.params.table, p], (err, res, fields) => {
			if(err) {
				console.log(">>> SQL ERR: ", err.sql)
				reject(new Error(err.code));
			}
			else {
				resolve(res.affectedRows);
			}
		});
	}).then(r => {
		res.status(200).end();
	}).catch(err => {
		console.log(">>>Err: ", err.message);
		res.status(500).json(err.message);
	});
});

router.post("/update/:table/:key/:val/:att/:update", (req, res) => {
	const p = req.params;
	new Promise((resolve, reject) => {
		connection.query("UPDATE ? SET ? = ? WHERE ? = ?;", [p.table, p.att, p.update, p.key, p.val], (err, res, fields) => {
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
		res.status(500).json(er.message);
	});
});

router.post("/delete/:table/:key/:val", (req, res) => {
	const p = req.params;
	new Promise((resolve, reject) => {
		connection.query("DELETE FROM ? WHERE ? = ?;", [p.table, p.key, p.val], (err, res, fields) => {
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
		res.status(500).json(err.message);
	});
});

router.post("Restaurant/:name/:openDate/:image"), (req, res) => {
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
		res.status(500).json(err.message);
	});
}


module.exports = router;

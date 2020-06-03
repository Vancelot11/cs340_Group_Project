# cs340\_Group\_Project
Intro to Databases Group Project

# Usage
Define host, database, user, and password in `.env` file
run command `npm run start` to start server locally


# Routes

|	Query																												|	Http																		|
|	:----																												|	:---																		|
|	`SELECT * FROM Restaurant;`																				|	GET	"/"																|
|	`SELECT * FROM :table WHERE :key = :val;`																|	GET	"/resources/:table/:key/:val"								|
|	`INSERT INTO User SET fname: :fname, lname: :lname, pass: :pass, userName: :userName;`	|	POST	"/resources/User/:fname/:lname/:pass/:userName"		|
|	`UPDATE :table SET :att = :update WHERE :key = :val;`												|	POST	"/resources/update/:table/:key/:val/:att/:update"	|
|	`DELETE FROM :table WHERE :key = :val;`																|	POST	"/resources/delete/:table/:key/:val"					|

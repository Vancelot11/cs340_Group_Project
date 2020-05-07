INSERT INTO User (fname, lname, username, email, pass)
VALUES
	('Kerry', 'Vance', 'vancelot', 'vancelot@realwebsite.org', 'totallymyrealpassword');

INSERT INTO Restaurant (name, openDate)
VALUES
	('Burger town', '2001-11-3'),
	('Pizza cittadina', '2002-1-13'),
	('Sushi machi', '2003-7-14'),
	('Pho thi tran', '2004-7-14'),
	('Curry nagar', '2005-7-14'),
	('Pad thai tawmeuxng', '2006-7-14'),
	('Beer borough', '2007-7-14'),
	('Bao zhen', '2008-7-14'),
	('Wonton zhen', '2008-7-14'),
	('Brat stadt', '2009-7-14'),
	('Burrito pueblo', '2010-7-14');

INSERT INTO Restaurant_address (num, street, city, state, zip, rid)
VALUES
	('123', 'America ave', 'Someplaceville', 'OR', '12345', (SELECT rid FROM Restaurant WHERE name = 'Burger town')),
	('123', 'Italy rd', 'Someplaceville', 'OR', '12345', (SELECT rid FROM Restaurant WHERE name = 'Pizza cittadina')), 
	('123', 'Japan st', 'Someplaceville', 'OR', '12345', (SELECT rid FROM Restaurant WHERE name = 'Sushi machi'));

INSERT INTO Restaurant_type (att, rid)
VALUES
	(('German,Bar'), (SELECT rid FROM Restaurant WHERE name = 'Brat stadt')),
	('Italian', (SELECT rid FROM Restaurant WHERE name = 'Pizza cittadina'));

INSERT INTO Restaurant_hours (days, start, stop, rid)
VALUES
	(('M,T,W,Th,F'), '10:00:00', '17:00:00', (SELECT rid FROM Restaurant WHERE name = 'Burrito pueblo'));

INSERT INTO Menu (name, days, start, stop, rid)
VALUES
	('Happy hour', 'F,Sat,Sun', '5:00:00', '21:00:00', (SELECT rid FROM Restaurant WHERE name = 'Beer borough'));

INSERT INTO Menu_item (name, description, price, menuName, rid)
VALUES
	('Beer', "I mean... It's a beer right? because this is a bar", '2.00', 'Happy hour', (SELECT rid FROM Restaurant WHERE name = 'Beer borough'));

INSERT INTO Review (stamp, rating, rev, rid, userName)
VALUES
	('2020-01-01 00:01:00', '5', 'dope', (SELECT rid FROM Restaurant WHERE name = 'Burrito pueblo'), 'vancelot');

INSERT INTO User_favorites (dishName, menuName, rid, userName)
VALUES
	('Beer',
		'Happy hour',
		(SELECT rid
		FROM Restaurant
		WHERE name = 'Beer borough'),
	'vancelot');



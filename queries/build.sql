DROP TABLE IF EXISTS User_favorites;
DROP TABLE IF EXISTS Restaurant_address;
DROP TABLE IF EXISTS Restaurant_hours;
DROP TABLE IF EXISTS Restaurant_type;
DROP TABLE IF EXISTS Menu_item;
DROP TABLE IF EXISTS Menu;
DROP TABLE IF EXISTS Review;
DROP TABLE IF EXISTS Restaurant;
DROP TABLE IF EXISTS User;

CREATE TABLE User (
	fname varchar(255) NOT NULL,
	lname varchar(255) NOT NULL,
	userName varchar(255) NOT NULL,
	pass varchar(255) NOT NULL,
	PRIMARY KEY (userName)
);

CREATE TABLE Restaurant (
	rid int(11) NOT NULL AUTO_INCREMENT,
	image varchar(255),
	openDate date NOT NULL,
	name varchar(255) NOT NULL,
	owner varchar(255) DEFAULT NULL, FOREIGN KEY (owner) REFERENCES User(userName),
	PRIMARY KEY (rid)
);

CREATE TABLE Restaurant_address (
	num varchar(255) NOT NULL,
	street varchar(255) NOT NULL,
	city varchar(255) NOT NULL,
	state varchar(255) NOT NULL,
	zip varchar(255) NOT NULL,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	PRIMARY KEY (street, num, rid)
);

CREATE TABLE Restaurant_type (
	att set(
		'American',
		'Bar',
		'Buffet',
		'Burger',
		'Casual',
		'Chinese',
		'Delivery',
		'Family',
		'Fast Food',
		'Fine Dining',
		'Food Truck',
		'German',
		'Indian',
		'Italian',
		'Japanese',
		'Mexican',
		'Pizza',
		'Sandwich',
		'Sushi',
		'Thai',
		'Vegan',
		'Vietnamese'
	) NOT NULL,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	PRIMARY KEY (att, rid)
);

CREATE TABLE Restaurant_hours (
	days set('M', 'T', 'W', 'Th', 'F', 'Sat', 'Sun') NOT NULL,
	start time NOT NULL,
	stop time NOT NULL,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	PRIMARY KEY (start, stop, rid)
);

CREATE TABLE Review (
	stamp datetime NOT NULL,
	rating tinyint NOT NULL,
	rev text,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	userName varchar(255) NOT NULL, FOREIGN KEY (userName) REFERENCES User(userName),
	PRIMARY KEY (stamp, rid, userName)
);

CREATE TABLE Menu (
	name varchar(255) NOT NULL,
	days set('M', 'T', 'W', 'Th', 'F', 'Sat', 'Sun') NOT NULL,
	start time NOT NULL,
	stop time NOT NULL,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	PRIMARY KEY (rid, name)
);

CREATE TABLE Menu_item (
	name varchar(255) NOT NULL,
	type set('Drink', 'Appetizer', 'Entree', 'Breakfast', 'Lunch', 'Dinner') NOT NULL,
	image varchar(255),
	description text NOT NULL,
	price decimal(10,2) NOT NULL,
	menuName varchar(255) NOT NULL,
	rid int(11) NOT NULL,
	FOREIGN KEY (rid, menuName) REFERENCES Menu (rid, name),
	PRIMARY KEY (name, rid, menuName)
);

CREATE TABLE User_favorites (
	dishName varchar(255) NOT NULL,
	rid int(11) NOT NULL,
	menuName varchar(255) NOT NULL,
	userName varchar(255) NOT NULL, FOREIGN KEY (userName) REFERENCES User(userName),
	FOREIGN KEY (dishName, rid, menuName) REFERENCES Menu_item (name, rid, menuName),
	PRIMARY KEY (dishName, menuName, rid, userName)
);

-- describe Menu;
-- describe Menu_item;
-- describe Restaurant;
-- describe Restaurant_address;
-- describe Restaurant_hours;
-- describe Restaurant_type;
-- describe Review;
-- describe User;
-- describe User_favorites;

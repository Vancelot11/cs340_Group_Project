CREATE TABLE User (
	name varchar(255) NOT NULL,
	userName varchar(255) NOT NULL,
	PRIMARY KEY (userName)
);

CREATE TABLE Restaurant (
	rid int(11) NOT NULL AUTO_INCREMENT,
	openDate date NOT NULL,
	name varchar(255) NOT NULL,
	owner varchar(255) NOT NULL,  FOREIGN KEY (owner) REFERENCES User(userName),
	PRIMARY KEY (rid)
);

CREATE TABLE Restaurant_address (
	street varchar(255) NOT NULL,
	num varchar(255) NOT NULL,
	city varchar(255) NOT NULL,
	state varchar(255) NOT NULL,
	zip varchar(255) NOT NULL,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	CONSTRAINT PK_Restaurant_address PRIMARY KEY (street, num, rid)
);

CREATE TABLE Restaurant_type (
	att set(
		'American',
		'Bar',
		'Buffet',
		'Burger',
		'Casual',
		'Family',
		'Fast Food',
		'Fine Dining',
		'Food Truck',
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
	CONSTRAINT PK_Restaurant_type PRIMARY KEY (att, rid)
);

CREATE TABLE Restaurant_hours (
	days set('M', 'T', 'W', 'Th', 'F', 'Sat', 'Sun') NOT NULL,
	start time NOT NULL,
	stop time NOT NULL,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	CONSTRAINT PK_Restaurant_hours PRIMARY KEY (start, stop, rid)
);

CREATE TABLE Review (
	stamp datetime NOT NULL,
	rating enum('1', '2', '3', '4', '5') NOT NULL,
	rev text,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	userName varchar(255) NOT NULL, FOREIGN KEY (userName) REFERENCES User(userName),
	CONSTRAINT PK_Review PRIMARY KEY (rid, userName)
);

CREATE TABLE User_favorites (
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant (rid),
	userName varchar(255) NOT NULL, FOREIGN KEY (userName) REFERENCES User(userName),
	CONSTRAINT PK_User_favorites PRIMARY KEY (rid, userName)
);

CREATE TABLE Menu (
	name varchar(255) NOT NULL,
	days set('M', 'T', 'W', 'Th', 'F', 'Sat', 'Sun') NOT NULL,
	start time NOT NULL,
	stop time NOT NULL,
	rid int(11) NOT NULL, FOREIGN KEY (rid) REFERENCES Restaurant(rid),
	CONSTRAINT PK_Menu PRIMARY KEY (rid, name)
);

CREATE TABLE Menu_item (
	name varchar(255) NOT NULL,
	description text NOT NULL,
	price decimal(10,2) NOT NULL,
	menuName varchar(255) NOT NULL,
	rid int(11) NOT NULL,
	FOREIGN KEY (rid, menuName) REFERENCES Menu (rid, name),
	PRIMARY KEY (name, rid, menuName)
);

describe Menu;
describe Menu_item;
describe Restaurant;
describe Restaurant_address;
describe Restaurant_hours;
describe Restaurant_type;
describe Review;
describe User;
describe User_favorites;



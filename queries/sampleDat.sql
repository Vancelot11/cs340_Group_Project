INSERT INTO User (fname, lname, username, pass)
VALUES
	('Kerry', 'Vance', 'vancelot', 'totallymyrealpassword'),
	('Anh', 'Ha', 'haanh', '123456'),
	('Man', 'Ha', 'ham', '124005'),
	('Joshua', 'Webb', 'webbj', '123325');
	

INSERT INTO Restaurant (name, openDate, image)
VALUES
	('Burger town', '2001-11-3', 'https://assets3.thrillist.com/v1/image/2705507/size/tmg-article_tall;jpeg_quality=20.jpg'),
	('Pizza cittadina', '2002-1-13', 'https://i.pinimg.com/236x/7d/f5/02/7df5028183d23147f1cf454bdc343b20--funny-things-funny-stuff.jpg'),
	('Sushi machi', '2003-7-14', 'https://www.liveabout.com/thmb/9TDR1R5Ie8STt5q0TW6eJqBdkn0=/735x0/dog-funny-face-58b8ecd55f9b58af5c9bd15d.jpg'), 
	('Pho thi tran', '2004-7-14', 'https://purewows3.imgix.net/images/articles/2018_02/Husky-dog-making-funny-face-400.jpg?auto=format,compress&cs=strip'),
	('Curry nagar', '2005-7-14', 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2015/03/12192356/Chubby-Bulldog.jpg'),
	('Pad thai tawmeuxng', '2006-7-14', 'https://lh3.googleusercontent.com/oMCK0wUYvsEyTOoVidKdGNrR5bbXTDIY02jzQfqTI4W2gEY7OuZL7FGpFhTNFirv4BC7kgVJASrhoh9OV7dEijE=s750'),
	('Beer borough', '2007-7-14', 'https://cdn.kinsights.com/cache/22/f5/22f57331c1ba168e9dd467c58934e685.jpg'),
	('Bao zhen', '2008-7-14', 'https://www.aglobalreach.com/wp-content/uploads/2014/12/Chubby-Dog-1.jpg'),
	('Wonton zhen', '2008-7-14', 'https://lh3.googleusercontent.com/proxy/CGyW433jDRKcyR1o6-s5Yzz7Ru1gKgsgguyKA6c8dsN7i6DtJSblap2740qGx7uArzjunqo9c22A1wgx4_LyY-PdoH20poyChg'),
	('Brat stadt', '2009-7-14', 'https://static.boredpanda.com/blog/wp-content/uploads/2019/12/B4JJhucH84--png__700.jpg'),
	('Burrito pueblo', '2010-7-14', 'https://i.pinimg.com/originals/83/c5/ef/83c5ef86f945fea67e2974d483519404.jpg') ;

INSERT INTO Restaurant_address (num, street, city, state, zip, rid)
VALUES
	('123', 'America ave', 'Someplaceville', 'OR', '12345', (SELECT rid FROM Restaurant WHERE name = 'Burger town')),
	('123', 'Italy rd', 'Someplaceville', 'OR', '12345', (SELECT rid FROM Restaurant WHERE name = 'Pizza cittadina')), 
	('123', 'Japan st', 'Someplaceville', 'OR', '12345', (SELECT rid FROM Restaurant WHERE name = 'Sushi machi'));

INSERT INTO Restaurant_type (att, rid)
VALUES
	(('German, Bar'), (SELECT rid FROM Restaurant WHERE name = 'Brat stadt')),
	('American', (SELECT rid FROM Restaurant WHERE name = 'Burger town')),
	('Italian', (SELECT rid FROM Restaurant WHERE name = 'Pizza cittadina')),
	('Japanese', (SELECT rid FROM Restaurant WHERE name = 'Sushi machi')),
	('Vietnamese', (SELECT rid FROM Restaurant WHERE name = 'Pho thi tran')),
	('Indian', (SELECT rid FROM Restaurant WHERE name = 'Curry nagar')),
	('Thai', (SELECT rid FROM Restaurant WHERE name = 'Pad thai tawmeuxng')),
	('Chinese', (SELECT rid FROM Restaurant WHERE name = 'Bao zhen')),
	('Chinese', (SELECT rid FROM Restaurant WHERE name = 'Wonton zhen')),
	('German, Bar', (SELECT rid FROM Restaurant WHERE name = 'Beer borough')),
	('Mexican', (SELECT rid FROM Restaurant WHERE name = 'Burrito pueblo'));
	
	

INSERT INTO Restaurant_hours (days, start, stop, rid)
VALUES
	(('M,T,W,Th,F'), '10:00:00', '17:00:00', (SELECT rid FROM Restaurant WHERE name = 'Burger town')),
	(('M,T,W,Th,F'), '10:00:00', '23:00:00', (SELECT rid FROM Restaurant WHERE name = 'Pizza cittadina')),
	(('M,T,W,Th,F'), '10:00:00', '20:00:00', (SELECT rid FROM Restaurant WHERE name = 'Sushi machi')),
	(('M,T,W,Th,F'), '10:00:00', '00:00:00', (SELECT rid FROM Restaurant WHERE name = 'Brat stadt')),
	(('M,T,W,Th,F'), '10:00:00', '22:00:00', (SELECT rid FROM Restaurant WHERE name = 'Pho thi tran')),
	(('M,T,W,Th,F'), '10:00:00', '19:00:00', (SELECT rid FROM Restaurant WHERE name = 'Curry nagar')),
	(('M,T,W,Th,F'), '10:00:00', '20:00:00', (SELECT rid FROM Restaurant WHERE name = 'Pad thai tawmeuxng')),
	(('M,T,W,Th,F'), '10:00:00', '21:00:00', (SELECT rid FROM Restaurant WHERE name = 'Bao zhen')),
	(('M,T,W,Th,F'), '10:00:00', '21:30:00', (SELECT rid FROM Restaurant WHERE name = 'Wonton zhen')),
	(('M,T,W,Th,F'), '10:00:00', '22:30:00', (SELECT rid FROM Restaurant WHERE name = 'Burrito pueblo')),
	(('M,T,W,Th,F'), '10:00:00', '00:00:00', (SELECT rid FROM Restaurant WHERE name = 'Beer borough'));
	
INSERT INTO Menu (name, days, start, stop, rid)
VALUES
	('Happy hour', 'F,Sat,Sun', '5:00:00', '21:00:00', (SELECT rid FROM Restaurant WHERE name = 'Beer borough'));

INSERT INTO Menu_item (name, description, price, menuName, rid)
VALUES
	('Beer', "I mean... It's a beer right? because this is a bar", '2.00', 'Happy hour', (SELECT rid FROM Restaurant WHERE name = 'Beer borough'));

INSERT INTO Review (stamp, rating, rev, rid, userName)
VALUES
	('2020-01-01 00:01:00', 5, 'dope', (SELECT rid FROM Restaurant WHERE name = 'Burrito pueblo'), 'vancelot'),
	('2020-01-02 00:01:00', 3, 'dope', (SELECT rid FROM Restaurant WHERE name = 'Burrito pueblo'), 'vancelot');

INSERT INTO User_favorites (dishName, menuName, rid, userName)
VALUES
	('Beer',
		'Happy hour',
		(SELECT rid
		FROM Restaurant
		WHERE name = 'Beer borough'),
	'vancelot');



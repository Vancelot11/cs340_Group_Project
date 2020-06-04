--Get all Restaurants
SELECT * FROM Restaurant;

--Get Restaurant_address
SELECT * FROM Restaurant_address WHERE rid = :rest_id;

--Get all food images
SELECT image FROM Menu_item WHERE image IS NOT NULL;

--Get all food images from selected Restaurant
SELECT image FROM Menu_item WHERE rid = :rest_id;

--Find User from login screen
SELECT * FROM User WHERE username = :uname AND pass = entered_pass;

-- Add new User
INSERT INTO User (fname, lname, username, email, pass)

-- Add new Restaurant
INSERT INTO Restaurant (name, openDate)

-- Add new Restaurant_address
INSERT INTO Restaurant_address (num, street, city, state, zip, rid)

-- Add new Restaurant_type
INSERT INTO Restaurant_type (att, rid)

-- Add new Restaurant_hours
INSERT INTO Restaurant_hours (days, start, stop, rid)

--Add new Review
INSERT INTO Review (stamp, rating, rev, rid, userName)

--Add new Review
INSERT INTO User_favorites (dishName, menuName, rid, userName)

--Add new Menu
INSERT INTO Menu (name, days, start, stop, rid)

--Add new Menu_item
INSERT INTO Menu_item (name, description, price, menuName, rid)

--Validate password
SELECT IF(:hash = (SELECT pass FROM User WHERE userName = :uname), 'YES', 'NO');

--Update User password
UPDATE User SET pass = :p WHERE userName = :uname

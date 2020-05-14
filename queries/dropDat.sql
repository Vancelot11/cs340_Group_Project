DELETE FROM Review WHERE stamp IS NOT NULL;

DELETE FROM Menu_item WHERE name IS NOT NULL;
DELETE FROM Menu WHERE name IS NOT NULL;

DELETE FROM User_favorites where userName IS NOT NULL;
DELETE FROM User where name IS NOT NULL;

DELETE FROM Restaurant_address where num IS NOT NULL;
DELETE FROM Restaurant_type where att IS NOT NULL;
DELETE FROM Restaurant_hours where days IS NOT NULL;
DELETE FROM Restaurant where name IS NOT NULL;

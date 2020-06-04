DELIMITER //

CREATE OR REPLACE PROCEDURE AvgRating (IN rid int(11)) 
BEGIN
	SELECT AVG(rating)
	FROM Review r
	WHERE r.rid = rid;
END

//

CREATE OR REPLACE PROCEDURE RestByType (IN t varchar(255))
BEGIN
	SELECT r.rid, r.name
	FROM Restaurant r
	INNER JOIN Restaurant_type rt ON rt.rid = r.rid
	WHERE FIND_IN_SET(t, rt.att)
	GROUP BY r.name;
END

//

CREATE OR REPLACE PROCEDURE RestByTime (IN d varchar(255), IN t time)
BEGIN
	SELECT r.rid, r.name
	FROM Restaurant r
	INNER JOIN Restaurant_hours rh ON rh.rid = r.rid
	WHERE rh.start < t AND rh.stop > t AND FIND_IN_SET(d, rh.days)
	GROUP BY r.name;
END

//

DELIMITER ;

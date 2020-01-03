DROP DATABASE IF EXISTS clients; 

CREATE DATABASE IF NOT EXISTS clients;
USE clients;

DROP TABLE IF EXISTS client;

CREATE TABLE IF NOT EXISTS client (
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
    firstName CHAR(20) NOT NULL,
    lastName CHAR(20) NOT NULL,
    tel CHAR(11) NOT NULL,
    email CHAR(30) NOT NULL,
    ocupation CHAR(20),
    salary NUMERIC(12, 2),
    problemStatement CHAR(50) NOT NULL,
    dateIn	date NOT NULL,
    PRIMARY KEY (ID)
);

-- INSERT INTO client (firstName, lastName, tel, email, ocupation, salary, problemStatement, dateIn)
-- VALUE('s', 's', '1111111111', "saklnskdnf@sfnsdln", 'nalnfsdnf', 3.0, "sdhnalsnljdsfhsjldn", CURDATE()); 

-- SELECT CURRENT_DATE();
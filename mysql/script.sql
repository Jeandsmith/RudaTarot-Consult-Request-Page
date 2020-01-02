-- DROP DATABASE IF EXISTS clients;
CREATE DATABASE IF NOT EXISTS clients;
USE clients;

CREATE TABLE IF NOT EXISTS client (
	ID INT PRIMARY KEY,
    firstName CHAR(20) NOT NULL,
    lastName CHAR(20) NOT NULL,
    tel CHAR(11) NOT NULL,
    email CHAR(30) NOT NULL,
    ocupation CHAR(20),
    salary NUMERIC(6, 2),
    problemStatement CHAR(50) NOT NULL
);


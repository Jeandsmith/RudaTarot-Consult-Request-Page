-- Database: clients

-- DROP DATABASE clients;

CREATE DATABASE clients
    WITH 
    OWNER = root
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE clients
    IS 'Database with clients';
	
CREATE TABLE client (
	firstName CHAR(30) NOT NULL,
	lastName CHAR(30) NOT NULL,
	tel CHAR(10) PRIMARY KEY,
	email CHAR(60) NOT NULL,
	business CHAR(20) NOT NULL,
	salary NUMERIC(6, 2) NOT NULL,
	pStatement CHAR(500) NOT NULL
);

INSERT INTO client VALUES ('James', 'Abreu', '6466004786', 'jeandsmith@protonmail.com', 'Student', 6000.50, 'I dont comida');

SELECT * FROM client;
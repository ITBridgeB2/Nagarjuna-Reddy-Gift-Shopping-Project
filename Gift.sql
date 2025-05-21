create database db;

use db;

CREATE TABLE demo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(255)
);

INSERT INTO demo (username, password)
VALUES ('Nagarjuna', 'Nag@123');
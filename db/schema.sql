CREATE DATABASE kitchen_db;

USE kitchen_db;

CREATE TABLE items
(
	id INT AUTO_INCREMENT NOT NULL,
	item_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
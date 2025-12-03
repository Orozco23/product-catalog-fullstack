CREATE DATABASE catalog_db;

USE catalog_db;

CREATE TABLE products(
	sku INT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(350) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	inventory INT NOT NULL,
	image VARCHAR(250) NOT NULL,
	created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    deleted_at TIMESTAMP DEFAULT NULL   -- Soft delete
);

CREATE TABLE users(
	id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50),
	email VARCHAR(100) UNIQUE NOT NULL,
	password TEXT NOT NULL,
	type INT NOT NULL
);

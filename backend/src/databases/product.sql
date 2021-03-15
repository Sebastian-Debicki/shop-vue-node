CREATE DATABASE products_db;

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);
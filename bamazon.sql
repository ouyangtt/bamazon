DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(30),
  price INTEGER(11),
  stock_quantity INTEGER(11),
  PRIMARY KEY (id)

);

CREATE TABLE departments(
	department_id INTEGER(11) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	over_head_costs INTEGER(11) NOT NULL,
	PRIMARY KEY(department_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Beauty Blender", "Beauty", 9,30),
("Quantitative Finance", "Book",24,10),
("Deep Sleep Pillow Spray", "Pharmarcy",21,50),
("Pine Cat Litter","Pet",30,100),
("Sake Pot","Kitchen",12,3),
("Bathroom Cleaner","Household",20,300),
("Scientific Calculator","Electronics",13,400);
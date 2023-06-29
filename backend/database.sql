CREATE TABLE category (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100)
);

CREATE TABLE admin (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  username VARCHAR(80) NOT NULL,
  hashedpassword VARCHAR(255) NOT NULL
);

CREATE TABLE phone (
  id INT PRIMARY KEY AUTO_INCREMENT,
  brand VARCHAR(80),
  phone_name VARCHAR(80),
  version_os VARCHAR(255),
  storage VARCHAR(20),
  dimensions VARCHAR(255),
  network VARCHAR(20),
  ram VARCHAR(20),
  image VARCHAR(255),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO category (title) VALUES ('Samsung'),('Apple'),('Google'),('Xiaomi');

INSERT INTO phone (brand, phone_name, version_os, storage, dimensions, network, ram, image, category_id)
VALUES
  ('Samsung', 'Galaxy S9', 'Android 8.0 Oreo', '64', '5.8', '3G/4G', '4', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/154214_0a804472-8918-4908-a6de-b8396f7773b0.jpg', 1),
  ('Apple','Iphone 11', 'Version OS', 'Storage', 'Dimensions', 'Network', 'Ram', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_aeb6f021-ed9e-45a8-b247-c336792a9dd6.jpg', 2),
  ('Apple','Iphone 10',  'Version OS', 'Storage', 'Dimensions', 'Network', 'Ram', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36833_4776bbd6-9959-4ea1-85e1-3214d47d481f.jpg', 2),
  ('Apple','Iphone 8',  'Version OS', 'Storage', 'Dimensions', 'Network', 'Ram', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36830_58f067cd-4b1b-49fa-aa4f-1b2ed1ad041d.jpg', 2),
  ('Samsung', 'Galaxy S23 Ultra',  'Version OS', 'Storage', 'Dimensions', 'Network', 'Ram', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/3ac876fa-5e26-4d02-b363-f875c2c88e59.jpg', 1),
  ('Xiaomi', 'Mi 11', 'Version OS', 'Storage', 'Dimensions', 'Network', 'Ram', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/355062_47b66cc9-74a6-41e0-ba5b-34e8048d45c3.jpg', 4);

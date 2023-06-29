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
  price INT,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO category (title) VALUES ('Samsung'),('Apple'),('Google'),('Xiaomi');

INSERT INTO `phone` (brand, phone_name, version_os, storage, dimensions, network, ram, image, price) 
VALUES ('Samsung', 'Galaxy S9', 'Android 8.0 Oreo', '64', '5.8', '3G/4G', '4', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/154214_0a804472-8918-4908-a6de-b8396f7773b0.jpg','141.39'),
('Nokia', '3310', '-', '16MO', '2.4', '2G', 'microSD', 'https://fr.shopping.rakuten.com/photo/1028270070.jpg','1'),
('Samsung', 'Galaxy S21', 'Android 11', '256', '6.2', '4G/5G', '8', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1080/https://d1eh9yux7w8iql.cloudfront.net/product_images/1a6dc250-ae18-48ab-98d4-35d4c1b46f71-1_3b63bb22-0549-4c76-ada0-6bda964c4ba2.jpg','1'),
('Apple','Iphone 12', 'iOS 14', '64', '6.1', '4G/5G', '4', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d1eh9yux7w8iql.cloudfront.net/product_images/418117_6694d854-7865-4932-8eb7-8d603861915a.jpg','1'),
('Apple','Iphone 8', 'iOS 11', '64', '4.7', '3G/4G', '2', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36830_58f067cd-4b1b-49fa-aa4f-1b2ed1ad041d.jpg','1'),
('Google', 'Pixel 7 Pro', 'Android 13', '128', '6.7', '3G/4G', '12','https://cdn.lesnumeriques.com/optim/product/67/67605/d7c9c641-pixel-7-pro__w968.jpeg','1'),
('Google', 'Pixel 7a', 'Android 13', '128', '6.1', '3G/4G', '8', 'https://www.cdiscount.com/pdt2/1/4/4/1/1200x1200/goo0840244702144/rw/google-pixel-7a-128gb-arctic-blue.jpg','1'),
('Google', 'Pixel 7', 'Android 13', '128', '6.3', '3G/4G', '8','https://static.fnac-static.com/multimedia/Images/FR/MDM/2e/eb/35/20310830/3756-1/tsp20230625071117/Smartphone-Google-Pixel-7-6-3-5G-Double-SIM-128-Go-Noir-Volcanique.jpg','1'),
('Apple','Iphone 10', 'iOS 11', '64', '5.8', '3G/4G', '3','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36833_4776bbd6-9959-4ea1-85e1-3214d47d481f.jpg','1'),
('Apple','Iphone 11', 'iOS 13', '64', '6.1', '3G/4G', '4', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_aeb6f021-ed9e-45a8-b247-c336792a9dd6.jpg','1'),
('Xiaomi', 'Xiaomi Mi 11 Lite', 'Android 11', '128', '6.55', '3G/4G', '8', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/None_d4aa97c7-ae17-4eb8-af81-cee83a42aaa5.jpg','1'),
('Xiaomi', 'Xiaomi Redmi Note 12', 'Android 12', '128', '6.67', '4G/5G', '4', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/0e641c43-9a83-45f2-927f-dfa3a0448f53-1_df56a2f6-93fe-4475-9d47-4cf0f232aff5.jpg','1'),
('Samsung', 'Galaxy Note10+', 'Android 9', '256', '6.8', '3G/4G', '12', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d1eh9yux7w8iql.cloudfront.net/product_images/347789_e4dcc730-c95f-41d2-a5af-ce343b3badc7.jpg','1'),
('Xiaomi', 'Redmi 7', 'Android 9', '32', '6.26', '3G/4G', '3', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D260/https://d1eh9yux7w8iql.cloudfront.net/product_images/258443_863b7c38-08d2-409f-96ee-38e0b72cc71e.jpg','1'),
('Samsung', 'Galaxy S23 Ultra', 'Android 13', '256', '6.8', '4G/5G', '12', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/3ac876fa-5e26-4dea-bfb6-809e528e21eb-1_7e1f9216-8fec-463f-9a16-737dd68338c7.jpg','1');

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
    image VARCHAR(255)
);

CREATE TABLE category (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(100)
);

INSERT INTO category (title) VALUES ('Samsung'),('Apple'),('Google'),('Xiaomi');

INSERT INTO `phone` (brand, phone_name, version_os, storage, dimensions, network, ram, image) VALUES ('Samsung', 'Galaxy S9', 'Android 8.0 Oreo', '64', '5.8', '3G/4G', '4', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/154214_0a804472-8918-4908-a6de-b8396f7773b0.jpg');

('Apple','Iphone 11', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_aeb6f021-ed9e-45a8-b247-c336792a9dd6.jpg'),('Apple','Iphone 10','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36833_4776bbd6-9959-4ea1-85e1-3214d47d481f.jpg');('Apple','Iphone 8','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36830_58f067cd-4b1b-49fa-aa4f-1b2ed1ad041d.jpg');
INSERT INTO `phone` (brand, phone_name, image) VALUES ('Samsung', 'Galaxy S23 Ultra', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/3ac876fa-5e26-4dea-bfb6-809e528e21eb-1_7e1f9216-8fec-463f-9a16-737dd68338c7.jpg'),('Samsung', 'Galaxy Note10+', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/630575_f731442d-179d-478c-a173-b3e8cf9cf2b1.jpg'),('Xiaomi', 'Redmi 7', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/258443_863b7c38-08d2-409f-96ee-38e0b72cc71e.jpg'),('Xiaomi', 'Xiaomi Redmi Note 12', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/0e641c43-9a83-45f2-927f-dfa3a0448f53-1_df56a2f6-93fe-4475-9d47-4cf0f232aff5.jpg'),('Xiaomi', 'Xiaomi Mi 11 Lite', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/None_d4aa97c7-ae17-4eb8-af81-cee83a42aaa5.jpg'),('Apple','Iphone 11', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_aeb6f021-ed9e-45a8-b247-c336792a9dd6.jpg'),('Apple','Iphone 10','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36833_4776bbd6-9959-4ea1-85e1-3214d47d481f.jpg');('Apple','Iphone 8','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36830_58f067cd-4b1b-49fa-aa4f-1b2ed1ad041d.jpg'),('Apple','Iphone 11', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_aeb6f021-ed9e-45a8-b247-c336792a9dd6.jpg'),('Apple','Iphone 10','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36833_4776bbd6-9959-4ea1-85e1-3214d47d481f.jpg');('Apple','Iphone 8','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36830_58f067cd-4b1b-49fa-aa4f-1b2ed1ad041d.jpg'),('Apple','Iphone 11', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_aeb6f021-ed9e-45a8-b247-c336792a9dd6.jpg'),('Apple','Iphone 10','https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/36833_4776bbd6-9959-4ea1-85e1-3214d47d481f.jpg')


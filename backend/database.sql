CREATE TABLE `admin` (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(80) NOT NULL,
    hashedpassword VARCHAR(255) NOT NULL,
);

CREATE TABLE `phone` (
    id INT PRIMARY KEY AUTO_INCREMENT,
    brand VARCHAR(80),
    phone_name VARCHAR(80),
    version_os VARCHAR(255),
    storage VARCHAR(20),
    dimensions VARCHAR(255),
    network VARCHAR(20),
    ram VARCHAR(20),
    image_phone VARCHAR(80)
);

INSERT INTO `phone` (brand, phone_name, version_os, storage, dimensions, network, ram, image_phone) VALUES ('Samsung', 'Galaxy S9', 'Android 8.0 Oreo', '64', '5.8', '3G/4G', '4', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/154214_0a804472-8918-4908-a6de-b8396f7773b0.jpg');

INSERT INTO `phone` (brand, phone_name, image_phone) VALUES ('Samsung', 'Galaxy S23 Ultra', 'https://www.backmarket.fr/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/3ac876fa-5e26-4dea-bfb6-809e528e21eb-1_7e1f9216-8fec-463f-9a16-737dd68338c7.jpg');
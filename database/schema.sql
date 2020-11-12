DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(45),
  age int,
  eye_color varchar(45),
  hair_color varchar(45),
  skin_tone varchar(45),
  skin_type varchar(45),
  PRIMARY KEY (id)
);

CREATE TABLE Reviews (
  id int NOT NULL AUTO_INCREMENT,
  stars int NOT NULL,
  subject varchar(45),
  text varchar(500),
  helpful int,
  not_helpful int,
  recommends boolean,
  user_id int,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);
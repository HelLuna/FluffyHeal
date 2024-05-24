CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  phone CHAR(12) NOT NULL,
  password VARCHAR(255) NOT NULL,
  surname VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  patronymic VARCHAR(50),
  birthday DATE,
  email VARCHAR(255),
  avatar TEXT,
  is_removed BOOLEAN NOT NULL
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY NOT NULL,
  role_name VARCHAR(20) NOT NULL
);

CREATE TABLE role_user (
  role_id INTEGER REFERENCES role (id) NOT NULL,
  user_id INTEGER REFERENCES users (id) NOT NULL
);

CREATE TABLE pet (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users (id) NOT NULL,
  nickname VARCHAR(50) NOT NULL,
  species VARCHAR(50),
  breed VARCHAR(50),
  sex CHAR(1),
  age NUMERIC(3),
  special TEXT,
  photo TEXT
);

CREATE TABLE pet_document (
  id SERIAL PRIMARY KEY NOT NULL,
  pet_id INTEGER REFERENCES pet (id) NOT NULL,
  url TEXT NOT NULL
);

CREATE TABLE department (
  id SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR(200) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone CHAR(12) NOT NULL,
  metro VARCHAR(30)
);

CREATE TABLE requisition_status (
  id SERIAL PRIMARY KEY NOT NULL,
  status_name VARCHAR(20) NOT NULL
);

CREATE TABLE requisition (
  id SERIAL PRIMARY KEY NOT NULL,
  department_id INTEGER REFERENCES department (id),
  user_id INTEGER REFERENCES users (id),
  status_id INTEGER REFERENCES requisition_status (id) NOT NULL,
  nickname VARCHAR(50),
  reason TEXT NOT NULL,
  phone CHAR(12) NOT NULL,
  email CHAR(255),
  visit_date DATE NOT NULL
);

CREATE TABLE veterinarian (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users (id) NOT NULL,
  seniority NUMERIC(2) NOT NULL,
  education TEXT NOT NULL,
  experience TEXT NOT NULL,
  additionally TEXT NOT NULL
);

CREATE TABLE veterinarian_department (
  department_id INTEGER REFERENCES department (id) NOT NULL,
  veterinarian_id INTEGER REFERENCES veterinarian (id) NOT NULL
);

CREATE TABLE service_class (
  id SERIAL PRIMARY KEY NOT NULL,
  class_name VARCHAR(200) NOT NULL UNIQUE,
  description TEXT NOT NULL
);

CREATE TABLE specialisation (
  class_id INTEGER REFERENCES service_class (id) NOT NULL,
  veterinarian_id INTEGER REFERENCES veterinarian (id) NOT NULL
);

CREATE TABLE service (
  id SERIAL PRIMARY KEY NOT NULL,
  class_id INTEGER REFERENCES service_class (id) NOT NULL,
  service_name VARCHAR(200) NOT NULL UNIQUE,
  price INTEGER NOT NULL
);

CREATE TABLE requisition_service (
  requisition_id INTEGER REFERENCES requisition (id) NOT NULL,
  service_id INTEGER REFERENCES service (id) NOT NULL
);

CREATE TABLE state (
  id SERIAL PRIMARY KEY NOT NULL,
  state_name VARCHAR(20) NOT NULL
);

CREATE TABLE article (
  id SERIAL PRIMARY KEY NOT NULL,
  author_id INTEGER REFERENCES veterinarian (id) NOT NULL,
  state_id INTEGER REFERENCES state (id) NOT NULL,
  preview TEXT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  publication_date DATE NOT NULL
);

CREATE TABLE tag (
  id SERIAL PRIMARY KEY NOT NULL,
  tag_name VARCHAR(50) NOT NULL
);

CREATE TABLE tag_article (
  tag_id INTEGER REFERENCES tag (id) NOT NULL,
  article_id INTEGER REFERENCES article (id) NOT NULL
);

CREATE TABLE analyzes (
  id SERIAL PRIMARY KEY NOT NULL,
  author_id INTEGER REFERENCES veterinarian (id) NOT NULL,
  state_id INTEGER REFERENCES state (id) NOT NULL,
  abbreviation VARCHAR(10) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  content TEXT NOT NULL
);
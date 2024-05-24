-- Пользователь
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  phone CHAR(12) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  surname VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  patronymic VARCHAR(50),
  birthday DATE,
  email VARCHAR(255),
  avatar TEXT,
  is_removed BOOLEAN NOT NULL
);

-- Роль
CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  role_name VARCHAR(20) NOT NULL UNIQUE
);

-- Роль_Пользователь
CREATE TABLE role_user (
  role_id INTEGER REFERENCES role (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  user_id INTEGER REFERENCES users (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (role_id, user_id)
);

-- Питомец
CREATE TABLE pet (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id)
	  ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
  pet_name VARCHAR(50) NOT NULL,
  species VARCHAR(50),
  breed VARCHAR(50),
  sex CHAR(1),
  age NUMERIC(3),
  special TEXT,
  photo TEXT
);

-- Документ_питомца
CREATE TABLE pet_document (
  id SERIAL PRIMARY KEY,
  pet_id INTEGER REFERENCES pet (id)
	  ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
  url TEXT NOT NULL
);

-- Отделение
CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  address VARCHAR(200) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone CHAR(12) NOT NULL,
  metro VARCHAR(30)
);

-- Статус_заявки
CREATE TABLE requisition_status (
  id SERIAL PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);

-- Заявка_на_приём
CREATE TABLE requisition (
  id SERIAL PRIMARY KEY,
  department_id INTEGER REFERENCES department (id)
	  ON DELETE SET NULL ON UPDATE CASCADE,
  user_id INTEGER REFERENCES users (id)
	  ON DELETE SET NULL ON UPDATE CASCADE,
  status_id INTEGER REFERENCES requisition_status (id)
	  ON UPDATE CASCADE NOT NULL,
  name VARCHAR(50) NOT NULL,
  pet_name VARCHAR(50),
  reason TEXT NOT NULL,
  phone CHAR(12) NOT NULL,
  email CHAR(255),
  visit_date DATE NOT NULL
);

-- Ветеринар
CREATE TABLE veterinarian (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id)
	  ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
  seniority NUMERIC(2) NOT NULL,
  education TEXT NOT NULL,
  experience TEXT NOT NULL,
  additionally TEXT NOT NULL
);

-- Ветеринар_Отделение
CREATE TABLE veterinarian_department (
  department_id INTEGER REFERENCES department (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  veterinarian_id INTEGER REFERENCES veterinarian (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (department_id, veterinarian_id)
);

-- Класс_услуг
CREATE TABLE service_class (
  id SERIAL PRIMARY KEY,
  class_name VARCHAR(200) NOT NULL UNIQUE,
  description TEXT NOT NULL
);

-- Специализация
CREATE TABLE specialization (
  class_id INTEGER REFERENCES service_class (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  veterinarian_id INTEGER REFERENCES veterinarian (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (class_id, veterinarian_id)
);

-- Услуга
CREATE TABLE service (
  id SERIAL PRIMARY KEY,
  class_id INTEGER REFERENCES service_class (id)
	  ON DELETE CASCADE ON UPDATE CASCADE NOT NULL,
  service_name VARCHAR(200) NOT NULL UNIQUE,
  price INTEGER NOT NULL
);

-- Заявка_Услуга
CREATE TABLE requisition_service (
  requisition_id INTEGER REFERENCES requisition (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  service_id INTEGER REFERENCES service (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (requisition_id, service_id)
);

-- Состояние
CREATE TABLE state (
  id SERIAL PRIMARY KEY,
  state_name VARCHAR(20) NOT NULL UNIQUE
);

-- Статья
CREATE TABLE article (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES veterinarian (id)
	  ON DELETE SET NULL ON UPDATE CASCADE,
  state_id INTEGER REFERENCES state (id)
	  ON UPDATE CASCADE NOT NULL,
  preview TEXT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  publication_date DATE NOT NULL
);

-- Тег
CREATE TABLE tag (
  id SERIAL PRIMARY KEY,
  tag_name VARCHAR(50) NOT NULL UNIQUE
);

-- Тег_статьи
CREATE TABLE tag_article (
  tag_id INTEGER REFERENCES tag (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  article_id INTEGER REFERENCES article (id)
	  ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (tag_id, article_id)
);

-- Расшифровка_анализа
CREATE TABLE analyzes (
  id SERIAL PRIMARY KEY,
  author_id INTEGER REFERENCES veterinarian (id)
	  ON DELETE SET NULL ON UPDATE CASCADE,
  state_id INTEGER REFERENCES state (id)
	  ON UPDATE CASCADE NOT NULL,
  abbreviation VARCHAR(10) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  content TEXT NOT NULL
);
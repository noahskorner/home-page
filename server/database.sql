CREATE DATABASE homepage;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
);

SELECT email
FROM users
WHERE email = 'noahskorner@gmail.com'
LIMIT 1;



CREATE DATABASE homepage;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE refresh_tokens (
    token VARCHAR(255) PRIMARY KEY,
    valid_until TIMESTAMP NOT NULL
);



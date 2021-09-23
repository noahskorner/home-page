CREATE DATABASE homepage;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    date_created TIMESTAMP DEFAULT NOW(),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE swimlanes (
    id SERIAL PRIMARY KEY,
    date_created TIMESTAMP DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    date_created TIMESTAMP DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    swimlane_id INTEGER REFERENCES swimlanes(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) DEFAULT '',
    status INTEGER DEFAULT 0
);

CREATE TABLE refresh_tokens (
    token VARCHAR(255) PRIMARY KEY,
    date_created TIMESTAMP DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    valid_until TIMESTAMP NOT NULL
);



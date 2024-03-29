CREATE DATABASE trello_db;

CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name character varying(124) NOT NULL,
  email character varying(124) UNIQUE NOT NULL,
  password text NOT NULL,
  refresh_token text DEFAULT NULL,
  created_at timestamp DEFAULT current_timestamp NOT NULL
);

CREATE TABLE workspaces (
  id SERIAL PRIMARY KEY,
  name character varying(124) NOT NULL,
  user_id UUID,
  FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  created_at timestamp DEFAULT current_timestamp NOT NULL
);

CREATE TABLE boards (
  id SERIAL PRIMARY KEY,
  name character varying(124) NOT NULL,
  workspace_id integer,
  user_id UUID,
  FOREIGN KEY (workspace_id) REFERENCES workspaces (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  created_at timestamp DEFAULT current_timestamp NOT NULL
);

CREATE TABLE columns (
  id SERIAL PRIMARY KEY,
  name character varying(124) NOT NULL,
  board_id integer,
  user_id UUID,
  FOREIGN KEY (board_id) REFERENCES boards (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  created_at timestamp DEFAULT current_timestamp NOT NULL
);

CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  name character varying(124) NOT NULL,
  column_id integer,
  user_id UUID,
  FOREIGN KEY (column_id) REFERENCES columns (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  created_at timestamp DEFAULT current_timestamp NOT NULL
);

CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid () NOT NULL,
  name character varying(124) NOT NULL,
  email character varying(124) UNIQUE NOT NULL,
  password text NOT NULL,
  refresh_token text DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE workspaces (
  id bigserial NOT NULL,
  name character varying(124) NOT NULL,
  user_id UUID REFERENCES users (id) ON DELETE SET NULL,
  PRIMARY KEY (id)
);

CREATE TABLE boards (
  id bigserial NOT NULL,
  name character varying(124) NOT NULL,
  workspace_id bigserial REFERENCES workspaces (id) NOT NULL,
  user_id UUID REFERENCES users (id)
    ON DELETE SET NULL,
  PRIMARY KEY (id)
);

CREATE TABLE columns (
  id bigserial NOT NULL,
  name character varying(124) NOT NULL,
  board_id bigserial REFERENCES boards (id),
  user_id UUID REFERENCES users (id) ON DELETE SET NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cards (
  id bigserial NOT NULL,
  name character varying(124) NOT NULL,
  column_id bigserial REFERENCES columns (id),
  user_id UUID REFERENCES users (id) ON DELETE SET NULL,
  PRIMARY KEY (id)
);

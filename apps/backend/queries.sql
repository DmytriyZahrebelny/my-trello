CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid () NOT NULL,
  name character varying(124) NOT NULL,
  email character varying(124) UNIQUE NOT NULL,
  password text NOT NULL,
  refresh_token text DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE boards (
  id bigserial NOT NULL,
  name character varying(124) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE work_spaces (
  id SERIAL PRIMARY KEY,
  name character varying(124) NOT NULL,
  owner_id UUID,
  FOREIGN KEY (owner_id) REFERENCES users (id)
    ON DELETE SET NULL
);

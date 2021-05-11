CREATE TABLE IF NOT EXISTS pies (
  pie_id SERIAL PRIMARY KEY,
  flavor VARCHAR(50),
  description VARCHAR(500),
  crust VARCHAR(50),
  is_delicious BOOLEAN
);
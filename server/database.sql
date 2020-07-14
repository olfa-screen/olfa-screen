CREATE DATABASE olfa_screen

CREATE TABLE screens (
  _id SERIAL,
  screen_id VARCHAR(6) PRIMARY KEY,
  scent_a VARCHAR(150),
  scent_b VARCHAR(150),
  scent_c VARCHAR(150),
)
INSERT INTO pies
(flavor, description, crust, is_delicious)
VALUES
($1, $2, $3, $4);
SELECT * FROM pies;
UPDATE pies
SET (flavor, description, crust, is_delicious) = ($2, $3, $4, $5)
WHERE pie_id = $1;
SELECT * FROM pies;
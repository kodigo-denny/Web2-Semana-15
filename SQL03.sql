
SELECT 
*
FROM 
alumnos AS a
LEFT OUTER JOIN inscripciones AS i  ON a.id=i.id

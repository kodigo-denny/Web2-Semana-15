
SELECT 
i.id, nombres, apellidos, carrera,
i.idmateria, materia
FROM 
alumnos AS a
INNER JOIN inscripciones AS i  ON a.id=i.id
INNER JOIN materias AS m ON m.idmateria=i.idmateria
INNER JOIN carreras AS c ON c.idcarrera=a.idcarrera
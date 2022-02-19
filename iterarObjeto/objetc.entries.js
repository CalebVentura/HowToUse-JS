let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };

  // entries convierte a la llave y valor en un arreglo
  Object.entries(perro).forEach(([key, value]) => {
    console.log(value)
  });
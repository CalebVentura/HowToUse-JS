let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };

  // Aquí se extrae los valores [key, value] del entries.
  for(const [key, value] of Object.entries(perro)){
    console.log(key)
  }
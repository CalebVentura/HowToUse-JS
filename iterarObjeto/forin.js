let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };

  // Realiza un recorrido sin devolución por cada key del objeto
  for (let clave in perro){
    console.log(perro[clave]);
  }
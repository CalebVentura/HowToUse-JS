let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };

  // Object.keys(obj) devuelve un arreglo con las key de cada propiedad
  let claves = Object.keys(perro); // claves = ["nombre", "color", "macho", "edad"]
  for(let i=0; i< claves.length; i++){
    let clave = claves[i];
    console.log(perro[clave]);
  }
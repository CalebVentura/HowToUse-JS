let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };

  // Object.values(obj) devuelve un arreglo con los valores de cadas propiedad
  let valores = Object.values(perro);
  for(let i=0; i< valores.length; i++){
    console.log(valores[i]);
  }

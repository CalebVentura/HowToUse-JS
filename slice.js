/**
 * ?Uso de slice
 * *Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * slice es un método de javascript que devuelve una copia de una parte del arreglo dentro de un nuevo array. Se le puede especificar el inicio, fin. El array original no se modifica.
*/

var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);
console.log(masculinos);

var miHonda = { color: 'red', ruedas: 4, motor: { cilindros: 4, cantidad: 2.2 } };
var miCoche = [miHonda, 2, 'Buen estado', 'comprado 1997'];
var nuevoCoche = miCoche.slice(0, 2);

//  Muestra los valores de myCar, newCar y el color de myHonda.
console.log(JSON.stringify(miCoche));
console.log('nuevoCoche = ' + JSON.stringify(nuevoCoche));
console.log('miCoche[0].color = ' + miCoche[0].color);
console.log('nuevoCoche[0].color = ' + nuevoCoche[0].color);

// Cambia el color de miHonda.
miHonda.color = 'azul';
console.log('El nuevo color de mi Honda es ' + miHonda.color);

// Muestra el color de myHonda referenciado desde ambos arrays. 
console.log('miCoche[0].color = ' + miCoche[0].color)
console.log('nuevoCoche[0].color = ' + nuevoCoche[0].color);
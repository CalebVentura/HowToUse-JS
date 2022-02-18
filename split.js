/**
 * ?Uso de split
 * *Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * split es método de javascript que premite convertir un string en un arreglo de acuerdo a las coincidencias de búsqueda que el usuario especifique.
*/

const texto = 'El siguiente ejemplo define una función que divide una cadena en un array de cadenas usando el separador especificado. Después de la división de la caden. la función muestra 15-12-1995 mensajes indicando la cadena original (antes de la división). El separador usado, el número de elementos del array y los elementos individuales del array'

// En este caso el texto será separado por comas.
const arreglo = texto.split('.')

console.log(arreglo)
console.log(arreglo.length)

// Es posible usarlo con expresiones regulares. En este caso el texto se separa al encontrar la expresión regular que denoa fechas. Devuelve solo la primera coincidencia.
const arreglo2 = texto.split(/\d+\W\d+\W\d+/g,1)
console.log(arreglo2)

// En este caso al usar () en las regex, devuelve incluso el la fecha de coincidencia.
const arreglo3 = texto.split(/(\d+\W\d+\W\d+)/g)
console.log(arreglo3)
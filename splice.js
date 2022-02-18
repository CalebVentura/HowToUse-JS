/**
 * ?Uso de splice
 * *Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * Splice es un método javascript que sirve para cambiar el contenido de un array, eliminado contenido existente y/o agregando nuevos elelemtos
*/

// Array inicial
 const months = ['Jan', 'March', 'April', 'June', 'July'];

 // Al array de months vamos a añadir un elemento en la posición 1 y eliminamos 0 elementos de la posición 1
 months.splice(1, 0, 'Feb');
 console.log(months);

 // Al arrar de months vamos a añadirle un elemento en la posición 4 y eliminamos 1 elemento de la la posición 4
 months.splice(4, 1, 'May');
 console.log(months);

 // Al array de motnths vamos a añadirle 3 elementos en la posición 3, 4 y 5. Eliminamos 2 elementos (posición 3 y 4)
 months.splice(3, 2, 'August', 'September', 'October')
 console.log(months)
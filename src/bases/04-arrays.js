/*
la primera posión de un arrelgo es la 0
Los arreglos tambien funcionan en su asignación con referencia,
así como los objetos.
*/
const array1 = [1,2,3,4]
array1.push(5) // apesar se ser array1 constante, no sacar error porque se utiliza el método del arreglo y no la posición en memoria


const array2 = [ ...array1 ] // se hace para copiar el valor y no la referencia, con esto se evita modificar el mismo arreglo
array2.push(6)
console.log(`Este es el arreglo 1: ${ array1 }`)
console.log(`Este es el arreglo 2: ${ array2 }`)

const array3 = array2.map( function(n) { // un callback en una función
  return n * 2;
})

array3.push(15) // el método map retorna un nuevo arreglo, por tal motivo no hay problema en agregar un nuego elemento al array
console.log(`Este es el arreglo 3: ${ array3 }`)

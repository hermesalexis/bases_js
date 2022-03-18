/*
 Objetos literales: Son como los hashes en Ruby.
 Los objetos en js son pasados por referencia y no por valor,
 es decir que los cambios hechos a la misma referencia se van a mantener
*/

const person = { // Este es un objeto literal
  name: 'Hermes',
  lastName: 'Galvis',
  age: 33,
  address: {
    city: 'Marinilla',
    zip: '054020',
    lat: 15.30,
    long: 30.25
  }
}

console.log(person)


/*
En este ejemplo se ve como person y person2 (apesar de definirse como nueva constatne)
sufren las mismas modificaciones. Esto es porque apuntan a la misma referencia
*/
person2 = person
person2.name = 'Peter'

console.log(person2)
console.log(person)


/* Para romper la referencia del caso  anterior se utiliza el operador
 spread, el cual crea una copia del valor de un objeto, no su referencia
*/

person2 = { ...person } // crea una copia de person (sus valores y propiedades, no su referencia)
person2.name = 'Andres'

console.log(person)
console.log(person2)


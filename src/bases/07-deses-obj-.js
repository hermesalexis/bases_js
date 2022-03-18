/* Desestructuración:
  permite asignar en una sentencia las propiedades de un objeto a variables
*/

const person = {
  name: 'Hermes',
  age: 33,
  codedName: 'ha',
  weigth: 60,
}

const { name, age, codedName, power, weigth = 50, height = 30 } = person // No importa el nombre, lo que importa es que se haga match con los nombre de las propiedades

console.log(name)
console.log(age)
console.log(codedName)
console.log(power) // retorna undefined porque en js lo que no está asignado se setea con este valor, al igual las funciones que no tienen return
console.log(weigth) // en este caso tiene un valor por defecto en caso que no tenga valor la propiedad
console.log(height) // imprime el valor por defecto porque no está seteado

// desestructuración en una función
const createHero = ( { name, age, codedName, power = 100 } ) => // si pongo los argumentos dentro de llaves {}, indico que es un objeto y puedo acceder directamente a sus propiedades
  ({
      id: 1010, // desde EMC6 si el nombre de la variable hace match con el key del objeto, no es necesario poner key: value, con poner la variable basta
      name,
      age,
      codedName,
      power
  })

console.log(createHero(person))
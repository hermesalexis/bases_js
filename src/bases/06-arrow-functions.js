/*
  funciones:
 - Tener en cuenta que es más seguro definir las funciones con const (anónima) porque es más seguro
  en el sentido que se evita el error de setear su valor con el nombre de una variable

 funciones flecha (lambda functions, arrow functions): Es la nueva forma de declarar funciones en js
*/

//forma tradicional, ya no se utiliza. Ahora se utiliza la funciones flecha

const greet = function ( name ) { // funcion anómina es más segura que definirla sin function
  return `Hola ${ name } with greet 1`
}

console.log(greet('hermes'))

// arrow function

const greet2 = ( name ) => { // no va la palabra function y va la flecha gorda =>
  return `Hola ${ name } with greet 2`
}

console.log(greet2('hermes'))


const greet3 = ( name = 'Peter' ) => `Hola ${ name } with greet 3` // si sólo se retorna una línea, no es necesario las {} ni la palabra return
console.log(greet3('hermes'))
console.log(greet3()) // se utiliza el valor por defecto


// ejemplo 2

//opción 1
const getUser = () => {
  return {
    uuid: "abc0540",
    username: "hermesagm"
  }
}

console.log('con la opción 1: ', getUser())

//opción 2
/*
 el valor que retonra la función debe estar con () porque se retorna un objeto,
 de esta forma se evita el error de que js piense que los {} hacen parte del cuerpo
 de una función
*/
const getUser2 = () => ({
  uuid: "abc0540",
  username: "hermesagm"
})
console.log('con la opción 2: ', getUser2())


// ejericio verificar si existe un objeto enviando su id cómo parámetro

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}]

//const existHeroe = (heroe_id) => heroes.some(heroe => heroe.id === heroe_id) // el método some retorna true si algúno de los elementos del arreglo cumple con la condición específicada
// console.log(`Existe el héroe?: ${ existHeroe('1') }`)

const { name } = heroes.find( ( heroe ) => heroe.id === 1) // desestructura el objecto heroe, en este caso sólo toma la propiedad name
console.log(name)

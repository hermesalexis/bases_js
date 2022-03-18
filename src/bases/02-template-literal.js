/*
 Template literal: Técnica para interpolar valores en js
 `hola ${variable}`
 ` este caracter se llama back tick
*/

const name = 'Hermes'
const lastName = 'Galvis'

const fullName = `${ name } ${ lastName }` // con el back tick me permite interporlar cadenas con expresiones js

console.log(fullName)

console.log(`Resultado: ${ 5 + 4 }`)

function greeting(name) {
  return `Hola ${ name }`
}

console.log(`Este es un texto: ${ greeting(name)}`)
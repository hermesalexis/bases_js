/*
 - En js ya no se utiliza var porque pone la variables contextos globales
 puede darse el error de sobre escribir los valors de la variable.
 - Js primero lee todo el archivo, y luego ejecuta el código
 */
const name = 'Hermes' // const es más ligero que let porque no utiliza el modificador de setter
const lastName = 'Stark'
let petName = 'Maya' // let lo utilizo cuando estoy seguro que el valor de la variable puede cambiar
console.log(name, lastName)

if (true) {
  const name = 'peter' // js le  da prelación al scope que está más global
  petName = 'Ivar' // si reasignara el valor y fuera const me saca error
  console.log(name)
}

console.log(petName)


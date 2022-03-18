/*
 Ternarios y null check
*/

let firstName;
let lastName;

// console.log(`${ firstName || 'No firstName' } ${ lastName || 'No lastName' }`) chequeo que una variable no tenga valor

const isActive = true

const message = ( isActive ) ? 'Activo' : 'Inactivo' // operador ternario

console.log(message)
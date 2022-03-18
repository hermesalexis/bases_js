/*
  Promesas son tareas asíncronas que me permiten ejecutar tareas que no son inmediatas
*/
 //console.log('inicio')

 /*
  No se importa nada porque ya están en js, resolve el el callback que se ejecuta
  resolve se ejecuta y todo está ok y reject si pasa error
*/

/*new Promise( ( resolve, reject ) => {
  console.log('Cuerpo de la promesa')
  // resolve({ message: 'Promesa resuelta', value: 33 }) // lo que se manda en resolve (resuelve la promesa), se envía al then
  reject('Promesa resuelta con error')
})
.then( msg => console.log( msg) ) // ms es lo que se envía en el resolve como parámetros
.catch( console.log ) // err es lo que se manda en el reject como parámetros
                      // en este caso se envía de forma implicita err lo que mandan en reject y el console.log lo toma
                      // cuando llega un sólo parámetro se consologear de forma implicita, en este caso hace lo mismo que en el then
console.log('fin') */
import { getHeroById } from "./bases/09-export-import";

const getHeroByIdAsync = ( id ) => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      const heroe = getHeroById( id )
      if ( heroe ) {
        resolve( heroe )
      } else {
        reject('El heroe no existe')
      }
    }, 1000);
  })
}

getHeroByIdAsync(1)
  .then( heroe => console.log(`El heroe es ${ heroe.name }`) )
  .catch( console.log )

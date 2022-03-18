/*
  Async y Await
  Una fucnción asíncrona retorna una promesa por defecto y
  el await sólo puede ser utilizado dentron de una funció asíncrona
*/

const myPromise = () => {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      //resolve('Tenemos un valor en la promesa')
      reject(' Reject en mi promesa')
    }, 1000);
  })
}

/*
  async es para indicar que la función es asíncronay retorna una
  promes, es decir que hace todo el código de new Promise etc, se
  resume la lógica
*/
const measureAsyncTime = async() => {
  try { // si el await falla el catch resuelve el error
    console.log('Inicio')

    const response = await myPromise(); // el await espera a que se resuelva la promesa
    console.log(response)

    console.log('Fin')

    return 'fin de medir tiempo async'
  } catch (error) {
    //return 'catch en measureAsyncTime'
    throw 'Error en medir tiempo Async' // este lanza el error que es atrapado en el catch de la promesa
  }
}

/*
  La siguiente en then se recibe lo que retorna la función de
  measureAsyncTime!!!, es decir que el async convierte una
  función en una promesa.
*/
measureAsyncTime()
  .then( value => console.log( 'THEN exitoso:', value ) )
  .catch( err => console.log( err ) ) // el catch sólo se dispoara cuando una promise retornar un throw
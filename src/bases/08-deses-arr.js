/* Desestructuración de arreglos
 A diferencia de la desestructuración de objectos, la posición
 de arreglos es importante
*/

const characters = ['Goku', 'Vegeta', 'Trunks']

const [ goku, vegeta, trunks, goten = 'No tiene valor' ] = characters // La diferencia con los objectos es que debo ser conciente de que la posición haga match con la variable

console.log(goku, vegeta, trunks, goten) // goten imprime con su valor por defecto porque el array no lo tiene

const [ , , trunks2 ] = characters // indico que sólo me interesa trunks
console.log(trunks2)

const returnArray = ([ letters, numbers ]) => [ letters, numbers ] // puedo desestructurar desde los argumentos así como se hace con los objetos

const [ letters, numbers ] = returnArray(['XYZ', 2020]) // puedo desesctructurar los valores que retorne una función

console.log(letters, numbers)


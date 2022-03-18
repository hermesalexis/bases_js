/*
 Exportar e importar
 Cuando se ejecuta una importación, el archivo se ejecuta
 en vue js se maneja la exportación por defecto.
 */
/* import { owners } from './data/heroes' // importo owners con la ruta relativa a index.js, no es necesario poner la externsión .js

const [dc, marvel] = owners

console.log(dc)
console.log(marvel) */

import superHeroes from '../data/heroes' // esta es la exportación por defecto, la puedo llamar con el nombre que desee
/* La ruta de importación from debe ser relativa al archivo que lo importe, es decir estando en el archivo importador
  debo definir la ruta hasta llevar a lo que deseo importar
  getHeroById( id )
  función flecha
 find */
export const getHeroById = ( id ) => superHeroes.find( heroe => heroe.id === id )

// getHeroesByOwner 'DC', 'Marvel'
export const getHeroesByOwner = ( owner ) => superHeroes.filter( heroe => heroe.owner === owner )


/*
  Este es un ejemplo de cómo importar las funciones del archivo e importarlas en un
  archivo que se encuentre dentro de la carpeta bases

  import { getHeroById, getHeroesByOwner } from './bases/09-export-import'

  console.log(getHeroById(2))
  console.log(getHeroesByOwner('DC'))
*/
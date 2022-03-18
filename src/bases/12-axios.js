/* Axios
  Libreria para hacer peticiones http
*/

import axios from "axios"

const apiKey = 'oJw0gdcyMAne5eVr8KNVZQsj4bnVWR9E'
//`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

/*
  Instancia de axios para evitar por cada request tener que configurar
  la url base y el api key
*/
const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs', // url base siempre es la misma para los endpoints
  params: { // son los query params
    api_key: apiKey,

  }
})
/*
giphyApi.get('/random') // la data ya viene parseada
  .then( ({ data }) => {
    const { url } = data.data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  }) */

export default giphyApi

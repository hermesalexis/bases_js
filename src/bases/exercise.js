/*
  El fetch API es una función que me permite consultar un api externa,
  no es necesaria importarla porque viene desde EMC 6
*/


const randomGiphy = () => {
  return new Promise( ( resolve, reject ) => {
    const apiKey = 'oJw0gdcyMAne5eVr8KNVZQsj4bnVWR9E'
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`) // se hace la petición al endpoint
      .then( resp => resp.json() ) // serlializa la respuesta a json viene en un stream
      .then(({ data }) => { // la respuesta del primer then se obtiene en este
        const { url } = data.images.original
        resolve( url )
      // se muestra la imagen en el html
        //const img = document.createElement('img')
        //img.src = url

        //document.body.append(img)
      })
  })

}

setTimeout( () => {
  const url = randomGiphy().then(( url ) => {
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  })
}, 5000)



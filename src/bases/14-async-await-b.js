import giphyApi from "./bases/12-axios";
const getImage = async() => {
  try {
    const { data } = (await giphyApi.get('/random')).data // con los paréntisis se ejecuta el código y se puede acceder a la data
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.log('Error en la petición', error)
    throw error
  }
}

getImage()
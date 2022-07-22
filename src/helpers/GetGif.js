//función que permite acceder a la api de giphy
export const getGifs = async (item) => {
    const apiKey ='Sef5vT9XbdvE3K63el8aFMo2qvwXFAcV'
    //variable que tiene la url con los parametros necesarios para traer los gifs
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${item}&limit=8`
    //fetch permite la comunicación entre la api 
    const resp = await fetch(url)
    //trae la respuesta de la api, la destructuramos
    const  {data}  = await resp.json()
    
    //genera un nuevo arreglo con los datos relevantes
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    return gifs

}

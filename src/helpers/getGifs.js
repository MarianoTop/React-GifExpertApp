
export const getGifs =  async (category) => {

    const url= `https://api.giphy.com/v1/gifs/search?api_key=7F7nZss9o643Ta6YSCyCTIg2mWkww363&q=${category}&limit=10`
  
    const resp= await fetch (url)
    const {data } = await resp.json();
  
    const gifs= data.map  (img =>  ({
      id: img.id,
      title : img.title,
      url: img.images.downsized_medium.url
    }) )
  
    console.log(data)
    return gifs;
  }
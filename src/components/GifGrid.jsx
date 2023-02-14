

import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";


export const GifGrid = ({ category }) => {


  const { images, isLoading } = useFetchGifs(category);
  console.log({ isLoading })

  return (
    <>
      <h3>{category}</h3>
      
      {
        /* Tercera opcion un nuevo componente le paso mi prop y ver que devuelva*/
        /*         isLoading ? (<h2>Cargando...</h2>) :null */
        /* And logico*/
        isLoading && (<h2>Cargando...</h2>)
      }




      <div className="card-grid">

        {images.map((image) => (
          //<li key={id}> {title}</li>  
          <GifItem
            key={image.id}
            {...image}

          />
        ))

        }
      </div>





    </>

  )
}

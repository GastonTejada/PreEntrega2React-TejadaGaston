import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( {pelicula} ) => {
  return (
    <div className="cnt-pelicula-deta">
      <div className='pelicula-deta'>
        <img src={pelicula.image} alt={pelicula.title}/>          
        <div className="pelicula-descrip">
            <h1>{pelicula.title}</h1>
            <p>Genero: {pelicula.genre[0]}</p>
            <p>Descripcion: {pelicula.description}</p>                                        
            <p>Año: {pelicula.year}</p>                                        
            <p>Director: {pelicula.director}</p>                                
            <p>Escritores: {pelicula.writers}</p>                                
            <p>Precio: {pelicula.price} pesos</p>
            <ItemCount />            
        </div>                
      </div>
    </div>
  )
}

export default ItemDetail;
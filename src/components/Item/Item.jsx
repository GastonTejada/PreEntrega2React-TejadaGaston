
const Item = ( {pelicula} ) =>{
    return(
        <div className="cnt-pelicula">
            <img src={pelicula.image} alt={pelicula.title}/>
            <br />
            <br />
            <div>                
                <h4>{pelicula.title}</h4>                                    
                <div>
                    <p>Genero: {pelicula.genre[0]}</p>                                        
                    <p>Precio: {pelicula.price} pesos</p>                                
                </div>
                <div>
                    <a className="btnVer" href={`/pelicula/${pelicula.rank}`}>Ver más</a>
                </div>
            </div>        
        </div>
    )
}

export default Item;



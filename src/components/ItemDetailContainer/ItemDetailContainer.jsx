import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import {pedirItemPorId} from '../helpers/importaJson';

const ItemDetailContainer = () => {

  const [pelicula, setPelicula] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    pedirItemPorId(id)    
      .then(res => {        
        setPelicula(res);
      })
  }, [pelicula])

  return (
    <div>
      {pelicula && <ItemDetail pelicula={pelicula} />}
    </div>
    
  )
  
}

export default ItemDetailContainer;


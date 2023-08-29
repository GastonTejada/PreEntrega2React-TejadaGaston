import React, { useState } from 'react'

const ItemCount = () => {

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {

    }
    
  return (
    <div>
        <div className="item-count">
            <p>Cantidad</p>
            <button className="sumaResta" onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button className="sumaResta"onClick={handleSumar}>+</button>
            <button className="agregarCarrito" onClick={handleAgregar}>Agregar al carrito</button>
        </div>        
    </div>
  )
}

export default ItemCount
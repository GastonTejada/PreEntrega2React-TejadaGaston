import carrito from '../../images/carrito.png'
import './CartWidget.css'

const CartWidget = () => {

    return (
        <div className="cartWidget">                        
            <img src={carrito} alt='carrito de compras'/>
            <p>0</p>
        </div>    
    );

}

export default CartWidget;
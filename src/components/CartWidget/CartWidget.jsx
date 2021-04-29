import { CartContext } from '../../context/CartContext';
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cartIcon from "../../icons/cart-icon.svg";
import './CartWidget.css';

function CartWidget (props) {
    const context = useContext(CartContext);
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const handleBlur = () => {
        setTimeout(()=> setActive(false), 500);
    };

    return (

        <div className="cart-widget">
            <button className="icon-btn" onClick={handleClick} onBlur={handleBlur}>
                <img src={cartIcon} className="cart-widget__icon" alt="" />
                <span className={context.totalQty === 0 ? '' : 'cart-widget__quantity appear'} hidden>{context.totalQty}</span>
            </button>
            <div className={`cart-widget__items-container ${active ? 'active' : ''}`}>
                <h5>ITEMS DEL CARRITO</h5>
                <ul>
                    {
                        context.cart.length === 0
                            ? <li>Todavía no hay productos</li>
                            : context.cart.map(
                                (obj) => {
                                    return (
                                        <li key={obj.item.id} className="cart-widget">
                                            <img src={obj.item.pictureUrl} alt={obj.item.title} className="cart-item__img" />
                                            <div className="cart-item__title">
                                                <h5>{obj.item.title}</h5>
                                            <span>Cantidad: {obj.quantity}</span>
                                            </div>
                                        </li>
                                        
                                    );
                                }
                            )
                    }
                </ul>
                <NavLink to="/cart" className="btn--big">IR AL CARRITO</NavLink>

            </div>
        </div>
    );
}

export default CartWidget;
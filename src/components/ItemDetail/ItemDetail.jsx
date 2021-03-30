import './ItemDetail.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {
    const initial = 0;
    const [itemsQ, setItemsQ] = useState(initial);
    const availableStock = item.stock - itemsQ;

    const Stock = () => {
        return (
            <>
                <p className="stock">Stock disponible: {availableStock}</p>
                <ItemCount min="0" max={item.stock} value={itemsQ} onAdd={onAdd} onSubstract={onSubstract} />
                <div className="btn-group">
                    <Link to="/cart" className={`btn--big ${itemsQ} || 'disabled'}`}>COMPRAR AHORA</Link>
                    <button className="btn--big" disabled>AGREGAR AL CARRITO</button>
                </div>
            </>
        )
    }

    const NoStock = () => {
        return <h3>No hay stock disponible</h3>
    }

    const onAdd = (e) => {
        e.preventDefault();
        if (itemsQ > item.stock) {
            setItemsQ(item.stock);
        } else {
            setItemsQ(itemsQ + 1);
        }
    };

    const onSubstract = (e) => {
        e.preventDefault();
        if (itemsQ < initial) {
            setItemsQ(initial);
        } else {
            setItemsQ(itemsQ - 1);
        }
    };

    const IsAvailable = item.stock > 0
    ? Stock 
    : NoStock;

    return (
            <div className="item-detail">
                <div className="item-img-detail">
                    <img className="img-detail" src={'.' + item.pictureUrl} alt={item.title} />
                </div>
                    <div className="text-item-detail">
                        <h3 className="title">{item.title}</h3>
                        <span className="price">$ {item.price}</span>
                        <p className="description">
                            {item.description}
                        </p>
                        <p className="description">
                            {item.fullDescription}
                        </p>
                        <IsAvailable />
                    </div>
            </div>
    );
}

export default ItemDetail;
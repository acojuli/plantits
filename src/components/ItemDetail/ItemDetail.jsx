import './ItemDetail.css';
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import Container from '@material-ui/core/Container';

function ItemDetail(props) {
    const initial = 1;
    const [itemsQ, setItemsQ] = useState(initial);
    const context = useContext(CartContext);
    const item = {
        id: props.id,
        category: props.item.category,
        description: props.item.description,
        fullDescription: props.item.fullDescription,
        pictureUrl: props.item.pictureUrl,
        price: props.item.price,
        stock: props.item.stock,
        title: props.item.title
    };
    const stockInCart = context.getItemQty(item.id);
    const [maxStock, setMaxStock] = useState(item.stock - stockInCart);
    const availableStock = maxStock - itemsQ;

    const Stock = () => {
        return (
            <>
                <p className="stock">Stock disponible: {availableStock}</p>
                <ItemCount min="0" max={item.stock} value={itemsQ} onAdd={onAdd} onSubstract={onSubstract} />
                <div className="btn-group">
                    <Link to="/cart" className={`btn--big`}>COMPRAR AHORA</Link>
                    <button onClick={(e) => { onAddToCart(e) }} className={`btn--big ${itemsQ === 0 ? 'disabled' : ''}`}>AGREGAR AL CARRITO</button>
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

    const onAddToCart = (e) => {
        context.addItem(e, item, itemsQ);
        setMaxStock(maxStock - itemsQ);
    }

    return (
        <React.Fragment>
        <Container fixed>
            <div className="item-detail">
                <div className="item-img-detail">
                    <img className="img-detail" src={item.pictureUrl} alt={item.title} />
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
        </Container>
        </React.Fragment>
    );
}

export default ItemDetail;
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Orders.css';
import backIcon from "../../icons/back-icon.svg";
import deleteIcon from "../../icons/delete-icon.svg";
import { getFirestore } from '../../firebase';

/* eslint-disable react-hooks/exhaustive-deps */

function Orders() {
    const [orders, setOrders] = useState([])
    const db = getFirestore();

    const getAll = () => {
        const itemsCollection = db.collection('orders');
        itemsCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No orders');
            }
            let snapshot = querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            });
            setOrders(snapshot);
        }).catch((error) => {
            console.error("Error:", error);
        }).finally(() => {
            console.log("Orders loaded");
        });
    };

    function formatDate(dateFirestore) {
        let timestamp= dateFirestore.seconds * 1000 + dateFirestore.nanoseconds /1000000;
        let dateObj = new Date(timestamp);
        let date = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let year = dateObj.getFullYear();
        let fullDate = `${date}/${month}/${year}`;
        return fullDate;
    }

    function deleteOrder(id) {
        const order = db.collection("orders").doc(id);
        order.delete();
        let updatedOrders = orders.filter((order) => { return id !== order.id })
        setOrders(updatedOrders);
    }

    useEffect(() => {
        getAll();
    }, [ getAll ]);

    return (
        <div >
            <div className="breadcrumb">
                <Link to="/cart" className="back-link">
                    <img src={backIcon} className="back-link__icon" alt="" />
                    <span className="back-link__text">Volver al carrito </span>
                </Link>
            </div>
            {
                (orders.length === 0)
                    ? <h2 className="appear" > No hay ordenes a??n</h2>
                    : <div className="orders appear" >
                        <div className="orders__title">ORDENES DE COMPRA</div>
                        {
                            orders.map(
                                (order) => {
                                    return (
                                        <ul className="order" key={order.id}>
                                            <button onClick={() => { deleteOrder(order.id) }} className="order__delete">
                                                <img src={deleteIcon} className="delete-icon" alt="" />
                                            </button>
                                            <h5>ORDEN DE COMPRA</h5>
                                            <p className="order__id">({order.id}) </p>
                                            <ul className="order__buyer">
                                                <li>
                                                    <b>Datos personales </b>
                                                </li>
                                                <li>
                                                    <b>Nombre: </b> {order.buyer.name}
                                                </li>
                                                <li>
                                                    <b>Tel: </b> {order.buyer.phone}
                                                </li>
                                                <li>
                                                    <b>Email: </b> {order.buyer.email}
                                                </li>
                                                <li>
                                                    <b>Fecha: </b> { formatDate(order.date)}
                                                </li>
                                            </ul>
                                            <li className="order__head">
                                                <span >T??tulo</span>
                                                <span>Cantidad</span>
                                                <span >Precio </span>
                                                <span>Subtotal:</span>
                                            </li>
                                            {
                                                order.items.map(
                                                    (item) => {
                                                        return (
                                                            <li className="order__item" key={item.id}>
                                                                <span> {item.title} </span>
                                                                <span> {item.quantity}</span>
                                                                <span> $ {item.price} </span>
                                                                <span> $ {item.price * item.quantity}</span>
                                                            </li>
                                                        );
                                                    }
                                                )
                                            }
                                            <li className="order__total"><span>Total: </span> <span> $ {order.total}</span> </li>
                                        </ul>
                                    );
                                }
                            )
                        }
                        <button className={`btn--big ${orders.length > 0 ? '' : 'disabled'}`} > PAGAR PEDIDOS  </button>
                    </div>
            }
        </div>
    );
}

export default Orders;
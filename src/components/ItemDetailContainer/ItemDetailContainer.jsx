  
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { getFirestore } from '../../firebase';
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import backIcon from "../../icons/back-icon.svg";
import Loader from "../Loader/Loader"


function ItemDetailContainer() {

  // save the item state
  const [item, setItem] = useState('');
  // the useParams read the url and take the id
  let { id } = useParams();
  // Get only one product by id
  const getItem = (id) => {
    const db = getFirestore();
    db.collection('items').doc(id).get().then((snapshot) => {
      setItem(snapshot.data());
    });
  };

  useEffect(() => {
    getItem(id);
  }, [id]);

  return (
    <>
      {
        item === ''
          ? <Loader/>
          : <div className={`item-detail-container ${item ? 'appear' : 'Loading...'}`}>
            <div className="breadcrumb">
              <Link to="/" className="back-link">
                <img src={backIcon} className="back-link__icon" alt="" />
                <span className="back-link__text">Volver al inicio </span>
              </Link>
            </div>
            <div>
              <ItemDetail item={item} id={id} />
            </div>
          </div>
      }
    </>
  )
};

export default ItemDetailContainer;
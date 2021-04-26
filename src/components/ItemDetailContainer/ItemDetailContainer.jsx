  
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { getFirestore } from '../../firebase';
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import backIcon from "../../icons/back-icon.svg";
import Container from '@material-ui/core/Container';
import Loader from "../Loader/Loader"


function ItemDetailContainer() {
  const [item, setItem] = useState('');
  let { id } = useParams();

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
            <Container fixed>
              <ItemDetail item={item} id={id} />
            </Container>
          </div>
      }
    </>
  )
};

export default ItemDetailContainer;
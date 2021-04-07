import React from 'react';
import Error404Svg from './Error404Svg';
import './NotFound.css';
import { Link } from 'react-router-dom';
import backIcon from "../../icons/back-icon.svg";


const NotFound = () => {

    return (
        <div className="breadcrumb">
                <Link to="/" className="back-link">
                    <img src={backIcon} className="back-link__icon" alt="" />
                    <span className="back-link__text">Volver al inicio </span>
                </Link>
                <div className="not-found">
                    <Error404Svg/>
                </div>
        </div>
    )
}

export default NotFound;
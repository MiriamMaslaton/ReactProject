import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { productCtx } from "./ProductsContext.js";

export default function ProductDetails() {

    const { name, description, price, img } = useParams();
    const product = useContext(productCtx);

    return (
<div className="divProductDetails">
            <div style={{ flex: 1, paddingLeft: '10%' }}>
                <img src={require(`../images/${img}`)} width='400' height={'300'} alt={name} />
            </div>
            <div style={{ flex: 1, paddingLeft: '10%' }}>
                <h2><b>{name}</b></h2>
                <h5>{description}</h5>
                <h6>₪ {price}</h6>
                <button onClick={() => {navigate(`/donation/${name}/${price}`);}}> לרכישה</button>
            </div>
        </div>
    );
}

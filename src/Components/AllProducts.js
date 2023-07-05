import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "./ProductContext";

export default function AllProducts() {

    const navigate = useNavigate();
    //   const baseUrl = '../../assets/';
    const prodCtx = useContext(productContext);
    console.log(prodCtx)

    return (
        <div className="div1">
            {prodCtx ?
                (
                    prodCtx.map((prod, index) => (
                        <div key={index} onClick={() => {
                            navigate(`/productDetails/${JSON.stringify(prod)}`);
                        }}
                        >
                            <img src={require(`../../public/images/${prod.img}.JPG`)} alt={prod.img}/>
                            {console.log(prod.img)}
                            <div >
                                <h5>{prod.name}</h5>
                            </div>
                        </div>
                    ))):(<div id="loading"> LOADING, PLEASE WAIT!</div>)
            }
        </div>
    )
}

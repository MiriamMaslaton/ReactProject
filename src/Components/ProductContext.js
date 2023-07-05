import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import products from "./ProductsData.json";
export const productContext = createContext(products);

export default function ProductContext(props) {
    
    const [productsArr, setProductsArr] = useState(products);

    useEffect(() => {
        axios.get("./ProductsData.json")
            .then((response) => {
                console.log("response data: ", response.data);
                setProductsArr(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <productContext.Provider value={{ productsArr, setProductsArr }}>
            {props.children}
        </productContext.Provider>
    );
}

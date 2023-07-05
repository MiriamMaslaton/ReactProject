import React, { useContext, useState } from "react";
import productContext from "../ProductsData.json";
import { all } from "axios";

export default function ProductsTable() {

    const productCtx = useContext(productContext)
    const [allProducts, setAllProducts] = useState(productCtx, []);
    const [newProduct, setNewProduct] = useState({ name: "", discription: "", price: "", img: "default.jpeg" });

    const addProduct = () => {
        setAllProducts([...allProducts, newProduct]);
        productContext.push(newProduct);
    }

    return (
        <div>
            {<table>
                <thead>
                    <th>תמונה</th>
                    <th>שם</th>
                    <th>תאור</th>
                    <th>מחיר</th>
                </thead>
                <tbody>
                    {
                        allProducts.map((item, i) => (
                            <tr key={i}>
                                <td className="border border-2 border-primary"><input type="url" value={item.img} onChange={(e) => {
                                    const updatedProducts = [...allProducts];
                                    updatedProducts[i] = { ...updatedProducts[i], img: e.target.value };
                                    setAllProducts(updatedProducts);
                                    productCtx[i].img = e.target.value
                                }} /></td>
                                <td className="border border-2 border-primary"><input type="text" value={allProducts[i].name} onChange={(e) => {
                                    const updatedProducts = [...allProducts];
                                    updatedProducts[i] = { ...updatedProducts[i], name: e.target.value };
                                    setAllProducts(updatedProducts);
                                    productCtx[i].name = e.target.value;
                                }} /></td>
                                <td className="border border-2 border-primary"><input type="text" value={item.description} onChange={(e) => {
                                    const updatedProducts = [...allProducts];
                                    updatedProducts[i] = { ...updatedProducts[i], description: e.target.value };
                                    setAllProducts(updatedProducts);
                                    productCtx[i].description = e.target.value
                                }} /></td>
                                <td className="border border-2 border-primary"><input type="number" value={item.price} onChange={(e) => {
                                    const updatedProducts = [...allProducts];
                                    updatedProducts[i] = { ...updatedProducts[i], price: e.target.value };
                                    setAllProducts(updatedProducts);
                                    productCtx[i].price = e.target.value
                                }} /></td>
                            </tr>))
                    }
                </tbody>
            </table>}


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ height: "5%", border: "2px solid black", borderRadius: " 16px", backgroundColor: "lightblue", padding: "1%" }}>
                    <h3>הוספת פרס חדש</h3>
                    <div>
                        <label>שם</label>
                        <input type="text" name="n" onChange={(e) => { setNewProduct({ ...newProduct, name: e.target.value }) }} />
                    </div>
                    <div>
                        <label>תאור</label>
                        <input type="text" name="d" onChange={(e) => { setNewProduct({ ...newProduct, description: e.target.value }) }} />
                    </div>
                    <div>
                        <label>מחיר</label>
                        <input type="number" name="p" onChange={(e) => { setNewProduct({ ...newProduct, price: e.target.value }) }} />
                    </div>
                    <div>
                        <label>תמונה</label>
                        <input type="url" name="i" onChange={(e) => { setNewProduct({ ...newProduct, img: e.target.value }) }} />
                    </div>
                    <button onClick={addProduct}>הוספת מוצר</button>
                </div>
            </div>
        </div>
    );
}
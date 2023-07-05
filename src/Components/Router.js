import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AllProducts from "./AllProducts";
import ProductsTable from "./ProductsTable";
import UserProfile from "./UserProfile";
import Logout from "./Logout";
import App from "../App";
import Donation from "./Donation";

export default function Router() {

    return (
        <>
            <nav>
                <Link to="/">כניסה</Link>
                <Link to="/donation">תרומה</Link>
                <Link to="/userDetail">פרטי משתמש</Link>
                <Link to="/products">מוצרים</Link>
            </nav>
            {
                localStorage.getItem("roleUser") === "manager" ?
              <nav>
                        <Link to="/productsTable">טבלת מוצרים</Link>
                        <Link to="/allDonation">כל התרומות</Link>
                    </nav>
                    :
                    <>
        </>
            }
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/products" element={<AllProducts />}></Route>
                <Route path="/productsTable" element={<ProductsTable />}></Route>
                <Route path="/userDetail" element={<UserProfile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/logout" element={<Logout />} />
                <Route path="/productDetails/:prod" element={<ProductDetails />} />
                <Route path="/donation/:name/:price" element={<Donation />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </>
    )
}
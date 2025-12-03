import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "../components/LogIn";
import Catalog from "../pages/Catalog";
import UpdateProduct from "../components/UpdateProduct";
import CreateProduct from "../components/CreateProduct";

export default function Base() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LogIn />}/>
                <Route path='/catalog' element={<Catalog />}/>
                <Route path='/product' element={<UpdateProduct />}/>
                <Route path='/create-product' element={<CreateProduct />}/>
            </Routes>
        </BrowserRouter>
    )
}
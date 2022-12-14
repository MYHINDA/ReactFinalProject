import { Route, Link, Routes } from "react-router-dom";
import CustomersPage from "./customers";
import EditProductPage from "./editProductPage";
import ProductsPage from "./products";
import PurchasesPage from "./purchases";

function Main() {

    return <div>
        
        <Link to="/"><h1>Main Page</h1></Link>

        <Link to="/products">products</Link><br /><br />
        <Link to="/customers">customers</Link><br /><br />
        <Link to="/purchases">purchases</Link><br /><br />

        <Routes>
            <Route path="/products" element={<ProductsPage />} >
                <Route path="editproduct" element={<EditProductPage/>} />
            </Route>
            <Route path="/customers" element={<CustomersPage/>} />
            <Route path="/purchases" element={<PurchasesPage/>} />
        </Routes>
    </div>
}

export default Main;
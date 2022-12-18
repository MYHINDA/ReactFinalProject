import { Route, Link, Routes } from "react-router-dom";
import CustomersPage from "./customers";
import EditProductPage from "./editProduct";
import EditCustomerPage from "./editCustomer";
import ProductsPage from "./products";
import Purchases from "./purchases";

function Main() {

    return <div>
        
        <Link to="/"><h1>Main Page</h1></Link>

        <Link to="/products">products</Link><br /><br />
        <Link to="/customers">customers</Link><br /><br />
        <Link to="/purchases">purchases</Link><br /><br />

        <Routes>
            <Route path="/products" element={<ProductsPage />}/ >
            <Route path="/editproduct/:id" element={<EditProductPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/editcustomer/:id" element={<EditCustomerPage />} />
            <Route path="/purchases" element={<Purchases/>} />
        </Routes>
    </div>
}

export default Main;
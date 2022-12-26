import { Route, Link, Routes } from "react-router-dom";
import CustomersPage from "./customers";
import EditProductPage from "./editProduct";
import EditCustomerPage from "./editCustomer";
import ProductsPage from "./products";
import Purchases from "./purchases";

function Main() {

    return <div>

        <Link to="/"><h1>Main Page</h1></Link>

        <div style={{width:"25%", float:"right"}}>

            <div style={{ border: "2px solid black", margin: "5px", backgroundColor: "aqua", height: "30px", width: "300px", float:"left" }}>
                <Link to="/products">products</Link><br/>
            </div>

            <div style={{ border: "2px solid black", margin: "5px", backgroundColor: "pink", height: "30px", width: "300px", float: "left" }}>
                <Link to="/customers">customers</Link><br/>
            </div>

            <div style={{ border: "2px solid black", margin: "5px", backgroundColor: "aqua", height: "30px", width: "300px", float: "left" }}>
                <Link to="/purchases">purchases</Link><br/>
            </div>
        </div>

        <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/editproduct/:id" element={<EditProductPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/editcustomer/:id" element={<EditCustomerPage />} />
            <Route path="/purchases" element={<Purchases />} />
        </Routes>
    </div>
}

export default Main;
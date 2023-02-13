import { Route, Link, Routes } from "react-router-dom";
import CustomersPage from "./customers";
import EditProductPage from "./editProduct";
import EditCustomerPage from "./editCustomer";
import ProductsPage from "./products";
import Purchases from "./purchases";
import PurchasByCustomerPage from "./purchasByCustomer";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import firebase from "./firebaseApp";
import 'firebase/firestore'



function Main() {

    debugger;

    const dispatch = useDispatch()
    const [initalValue, setInitalvalue] = useState({ products: [], customers: [], purchases: [] })

    // useEffect(() => {

    //     async function fetchData() {
    //     debugger;

    //         let product = await firebase.firestore().collection('products').get();

    //         let prodData = [];
    //         product.forEach(doc => {
    //             let obj = {
    //                 id: doc.id,
    //                 name: doc.data().name,
    //                 price: doc.data().price,
    //                 quantity: doc.data().quantity
    //             };

    //             prodData.push(obj)
    //         })

    //         setInitalvalue({ ...initalValue, products: [...initalValue.products, prodData] });

    //         let customer = await firebase.firestore().collection('customers').get();

    //         let custData = [];
    //         customer.forEach(doc => {
    //             let obj = {
    //                 id: doc.id,
    //                 firstName: doc.data().name,
    //                 lastName: doc.data().price,
    //                 city: doc.data().quantity
    //             };

    //             custData.push(obj)
    //         })

    //         setInitalvalue({ ...initalValue, customers: [...initalValue.customers, custData] });




    //         let purchase = await firebase.firestore().collection('purchases').get();

    //         let purData = [];
    //         purchase.forEach(doc => {
    //             let obj = {
    //                 id: doc.id,
    //                 customerId: doc.data().name,
    //                 productId: doc.data().price,
    //                 date: doc.data().quantity
    //             };

    //             purData.push(obj)
    //         })

    //         setInitalvalue({ ...initalValue, purchases: [...initalValue.purchases, purData] });
    //     }
    //     fetchData();
    // })

    
    return <div>

        <input type={"button"} value={"loadData"} onClick={()=>dispatch({ type: "LOAD_DATA", payload: initalValue }) } />
        <Link to="/"><h1>Main Page</h1></Link>

        <div >

            <div style={{ border: "2px solid black", margin: "5px", backgroundColor: "aqua", height: "30px", width: "100px" }}>
                <Link to="/products">products</Link>
            </div>

            <div style={{ border: "2px solid black", margin: "5px", backgroundColor: "pink", height: "30px", width: "100px" }}>
                <Link to="/customers">customers</Link>
            </div>

            <div style={{ border: "2px solid black", margin: "5px", backgroundColor: "aqua", height: "30px", width: "100px"}}>
                <Link to="/purchases">purchases</Link>
            </div>
        </div>

        <Routes>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/editproduct/:id" element={<EditProductPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/editcustomer/:id" element={<EditCustomerPage />} />
            <Route path="/purchasByCustomer/:id" element={<PurchasByCustomerPage />} />
            <Route path="/purchases" element={<Purchases />} />
        </Routes>
    </div>
}

export default Main;
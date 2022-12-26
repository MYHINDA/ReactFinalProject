import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";


function EditCustomerPage() {
    // debugger;
    const store = useSelector(state => state)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const params = useParams();

    const [customer, setCustomer] = useState({ id: params.id, firstName: "", lastName: "", city: "" })

    const [products, setProducts] = useState([])
    useEffect(() => {
        debugger;
        let purArr = store.purchases.filter(x => x.customerId === +params.id)
        let prodArr = purArr.map(y => store.products.filter(x => y.productId === x.id)).flat()
        prodArr = new Set(prodArr)
        prodArr = Array.from(prodArr)
        prodArr = prodArr.map(item => item.name)
        setProducts(prodArr)

    })

    const updateCustomer = () => {
        dispatch({ type: "EDIT_CUSTOMER", payload: customer })
        navigate("/products")
    }

    const deleteCustomer = () => {
        debugger;
        dispatch({ type: "DELETE_CUSTOMER", payload: customer })
        navigate('/products')
    }

    return <div>
        <h2>EditCustomerPage </h2>
        <div style={{ width: "300px", border: "3px solid red", float: "right" }}>
            region 1:

            <form onSubmit={updateCustomer}>

                First Name: <input type="text" onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} /> <br /><br />
                Last Name: <input type="text" onChange={(e) => setCustomer({ ...customer, lastName: e.target.value })} /> <br /><br />
                City: <input type="text" onChange={(e) => setCustomer({ ...customer, city: e.target.value })} /> <br /><br />

                <input type={"submit"} value="Update" />
                {/* <input type={"button"} value="delete" onClick={deleteCustomer} /> */}
                <Button variant="contained" onClick={deleteCustomer}>Delete</Button>
                
                <br /><br />

            </form>

        </div>

        <div style={{ width: "300px", border: "3px solid orange", float: "left" }}>
            region 2:
            <ul>
                {
                    products.map(item => { return <li>{item}</li> })
                }
            </ul>

        </div>

    </div>
}

export default EditCustomerPage;
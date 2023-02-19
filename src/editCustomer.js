import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
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
        // debugger;
        let purArr = store.purchases.filter(x => x.customerId === +params.id)
        let prodArr = purArr.map(y => store.products.filter(x => y.productId === x.id)).flat()
        prodArr = new Set(prodArr)
        prodArr = Array.from(prodArr)
        // prodArr = prodArr.map(item => item.name)
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
        {/* <h2>EditCustomerPage </h2> */}
        <div class="card" style={{  float: "right", width: "45%" , margin:"20px"}}>
            {/* region 1: */}

            <form class="details" onSubmit={updateCustomer} style={{float:"left", margin:"15px"}}>

                First Name: <input class="details" type="text" onChange={(e) => setCustomer({ ...customer, firstName: e.target.value })} style={{fontSize:"20px"}} /> <br /><br />
                Last Name:  <input class="details" type="text" onChange={(e) => setCustomer({ ...customer, lastName:  e.target.value })}  style={{ fontSize: "20px" }} /> <br /><br />
                City:       <input class="details" type="text" onChange={(e) => setCustomer({ ...customer, city:      e.target.value })}      style={{ fontSize: "20px" }} /> <br /><br />

                <input class="small_button" type={"submit"} value="Update" />

                <Button class="small_button" onClick={deleteCustomer}>Delete</Button>
                
                <br /><br />

            </form>

        </div>

        <div class="card" style={{ float: "right", width: "45%", margin:"20px" }}>
            <ul style={{ float: "left" }}>
                {
                    products.map(item => { return <li><Link class="details"  to={'/editProduct/' + item.id}> {item.name} </Link> </li> })
                }
            </ul>

        </div>

    </div>
}

export default EditCustomerPage;
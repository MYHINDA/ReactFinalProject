import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditProductPage() {

    const store = useSelector(state => state)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const params = useParams();

    const [product, setProduct] = useState({ id: params.id, name: "", price: 0, quantity: -1 })

    const [customer, setCustomer] = useState([])

    useEffect(() => {
        // debugger;
        
        let purArr = store.purchases.filter(x => x.productId === parseInt(params.id))
        let cusIdArr = purArr.map(x => x.customerId)
        cusIdArr = new Set(cusIdArr)
        cusIdArr = Array.from(cusIdArr)

        let temp = []

        for (let i = 0; i < cusIdArr.length; i++) {
            temp.push(store.customers.filter(x => x.id === cusIdArr[i]))
        }
        temp = temp.flat()
        setCustomer(temp)
    })


    const updateProduct = (e) => {
        dispatch({ type: "EDIT_PRODUCT", payload: product })
        navigate("/products")
        e.preventDefault()
    }

    return <div>

        <h2>EditProduct Page</h2>

        <div style={{ border: "3px solid yellow", float: "right", width: "300px", height: "300px" }}>
            <ul>
                {
                    customer.map(item => {

                        return <li><Link to={"/editcustomer/" + item.id}><h3>{item.firstName} {item.lastName}</h3> </Link> <br /></li>
                    })
                }</ul>
        </div>

        <div style={{ border: "3px solid blue", float: "left", width: "300px" }}>

            <form onSubmit={updateProduct}>
                Name: <input type="text" onChange={(e) => setProduct({ ...product, name: e.target.value })} /> <br /><br />
                Price: <input type="text" onChange={(e) => setProduct({ ...product, price: e.target.value })} /> <br /><br />
                Quantity: <input type="text" onChange={(e) => setProduct({ ...product, quantity: e.target.value })} /> <br /><br />
                <input type={"submit"} value="Update" name="update" />

                <input type={"button"} value="delete" onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: product }) && navigate('/products')} />
                <br /><br />

            </form>

        </div>

    </div>
}

export default EditProductPage;
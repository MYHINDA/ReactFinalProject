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

        {/* <h2>EditProduct Page</h2> */}

        <div class= "card" style={{  float: "left", width: "30%" , margin:"100px", marginTop:"10px"}}>
            <ul style={{float:"left"}}>
                {
                    customer.map(item => {

                        return <li><Link class="details" to={"/editcustomer/" + item.id}><h3>{item.firstName} {item.lastName}</h3> </Link> <br /></li>
                    })
                }</ul>
        </div>

        <div class="card" style={{ float: "right", width: "45%", margin: "60px", marginTop: "10px" }}>

            <form onSubmit={updateProduct} class="details" style={{ margin: "10px" }}>
                Name: <input type="text" class="details" style={{ fontSize: "20px" }} onChange={(e) => setProduct({ ...product, name: e.target.value })} /> <br /><br />
                Price: <input type="text" class="details" style={{ fontSize: "20px" }} onChange={(e) => setProduct({ ...product, price: e.target.value })} /> <br /><br />
                Quantity: <input type="text" class="details" style={{ fontSize: "20px" }} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} /> <br /><br />
                <input type={"submit"} class="small_button" value="Update" name="update" />

                <input type={"button"} value="delete" class="small_button" onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: product }) && navigate('/products')} />
                <br /><br />

            </form>

        </div>

    </div>
}

export default EditProductPage;